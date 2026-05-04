import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
// Nuevo: estado compartido
  currentUser?: {
    username: string;
    password: string;
    };
// Nuevo: logs
    testLog(message: string) {
    console.log(`[TEST LOG]: ${message}`);
  }
}



setWorldConstructor(CustomWorld);