import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

await scrape({
  urls: ['https://meiaentrada.org.br/validador/NUZIPJ/1996-03-30'],
  directory: './site-clonado',
  plugins: [
    new PuppeteerPlugin({
      launchOptions: { headless: false },
      scrollToBottom: { timeout: 10000, viewportN: 10 },
      blockNavigation: true,
    })
  ]
});
