import { JSDOM } from'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const htmlString = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const dom = new JSDOM(htmlString)
global.document = dom.window.document
global.window = dom.window

describe('Import', () => {
  it('Data is imported and assigned to `parsedData` variable in `scripts/index.js`', async () => {
    const scriptRewire = await import(path.join(__dirname, '../scripts/index.js'))
    let parsedData
    try {
      parsedData = scriptRewire.__get__('parsedData');
    } catch (error) {}
    expect(parsedData).toBeDefined();
  });
});

describe('Rendering', () => {
  it('Recipes are displayed on the page', async () => {
    const scriptRewire = await import(path.join(__dirname, '../scripts/index.js'))
    let parsedData
    try {
      parsedData = scriptRewire.__get__('parsedData');
    } catch (error) {}
    expect(parsedData).toBeDefined();
    const content = document.body.textContent.replace(/(?:\r\n|\r|\n)/g, '')
    // MAXIM: exclude images when mapping
    const pattern = `(?=.*` + Object.values(parsedData).map(section => section.map(entry => {
      delete entry.image
      return Object.values(entry)
    })).flat(4).join(`)(?=.*`) + `)`
    expect(content).toMatch(new RegExp(pattern, 'igm'))
  });
});