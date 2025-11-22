import fs from 'fs/promises';
import path from 'path';

async function testNewsData() {
  console.log("Testing news data structure...");
  
  // Test reading English news data
  const enFilePath = path.join('public', 'locale', 'news', 'en', '1.json');
  try {
    const content = await fs.readFile(enFilePath, 'utf-8');
    const newsData = JSON.parse(content);
    console.log("English news 1:", newsData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error reading English news 1:", error.message);
    }
  }
  
  // Test reading Chinese news data
  const zhFilePath = path.join('public', 'locale', 'news', 'zh', '1.json');
  try {
    const content = await fs.readFile(zhFilePath, 'utf-8');
    const newsData = JSON.parse(content);
    console.log("Chinese news 1:", newsData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error reading Chinese news 1:", error.message);
    }
  }
  
  // Test reading French news data
  const frFilePath = path.join('public', 'locale', 'news', 'fr', '1.json');
  try {
    const content = await fs.readFile(frFilePath, 'utf-8');
    const newsData = JSON.parse(content);
    console.log("French news 1:", newsData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error reading French news 1:", error.message);
    }
  }
  
  console.log("Test completed.");
}

testNewsData();
