import { expect, test } from '@playwright/test';

test.use({ baseURL: 'http://localhost:4173' });

test.beforeEach(async ({ page }) => {
	await page.goto('/vysledky');
});

test('searches names without accents and preserves official positions', async ({ page }) => {
	const search = page.getByRole('searchbox', { name: 'Hledat' });
	await search.fill('stepan skripnik');
	await expect(page.locator('tbody tr')).toHaveCount(1);
	await expect(page.locator('tbody tr')).toContainText('Štěpán Skripnik');
	await expect(page.locator('tbody tr td').first()).toHaveText('3.');
	await expect(page.getByRole('status')).toHaveText('Zobrazeno 1 z 90 výsledků');
	await search.fill('stepan 35');
	await expect(page.locator('tbody tr')).toHaveCount(1);
	await search.fill('neexistujici jmeno');
	await expect(page.locator('tbody')).toContainText('Žádné výsledky neodpovídají hledání.');
	await page.getByRole('button', { name: 'Vymazat hledání' }).click();
	await expect(search).toBeEmpty();
	await expect(page.locator('tbody tr')).toHaveCount(90);
});

test('excludes DNS from lists and counts but keeps DNF across tracks and categories', async ({
	page
}) => {
	await expect(page.locator('tbody')).not.toContainText('DNS');
	await expect(page.locator('tbody')).toContainText('DNF');
	await page.getByRole('button', { name: 'Ženy (17)', exact: true }).click();
	await expect(page.locator('tbody tr')).toHaveCount(17);
	await expect(page.locator('tbody tr').first()).toContainText('Lucie Šálková');
	await expect(page.locator('tbody tr').first().locator('td').first()).toHaveText('15.');
	await page.getByRole('button', { name: '47 km (88)', exact: true }).click();
	await expect(page.getByRole('button', { name: 'Vše (88)' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await expect(page.locator('tbody tr')).toHaveCount(88);
	await expect(page.locator('tbody')).not.toContainText('DNS');
	await expect(page.locator('tbody')).toContainText('DNF');
	await page.getByRole('button', { name: '33 km (74)', exact: true }).click();
	await page.getByRole('button', { name: 'Ženy (34)', exact: true }).click();
	await expect(page.locator('tbody tr')).toHaveCount(34);
	await expect(page.locator('tbody')).not.toContainText('DNS');
	await expect(page.locator('tbody')).toContainText('DNF');
});

test('uses bonus categories from the CSV and searches their enriched bibs', async ({ page }) => {
	await page.getByRole('button', { name: 'Vrchařská prémie (174)', exact: true }).click();
	await expect(page.locator('tbody tr')).toHaveCount(174);
	await page.getByRole('button', { name: '61 km (88)', exact: true }).click();
	await page.getByRole('searchbox', { name: 'Hledat' }).fill('Adam 96');
	await expect(page.locator('tbody tr')).toHaveCount(1);
	await expect(page.locator('tbody tr')).toContainText('Adam Korecký');
	await expect(page.locator('tbody tr')).toContainText('0:06:36');
	await page.getByRole('button', { name: 'Rychlostní prémie (246)', exact: true }).click();
	await expect(page.getByRole('button', { name: 'Vše (246)' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await expect(page.locator('tbody tr')).toContainText('0:05:58');
});

test('keeps filters usable and the table scrollable on mobile', async ({ page }) => {
	await page.setViewportSize({ width: 340, height: 844 });
	await expect(page.getByRole('searchbox', { name: 'Hledat' })).toBeVisible();
	await expect(page.getByRole('button', { name: '61 km (90)', exact: true })).toBeVisible();
	expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
	const table = page.getByRole('region', { name: 'Výsledková tabulka, lze posouvat vodorovně' });
	expect(await table.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
	await table.focus();
	await page.keyboard.press('End');
	await page.getByRole('button', { name: '47 km (88)', exact: true }).click();
	await expect(page.locator('tbody tr')).toHaveCount(88);
});
