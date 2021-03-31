const puppeteer = require('puppeteer');
const request = require('request');

const getCerts = async(page)=>{
   let rt =  await page.goto("https://www.even3.com.br/organizador/auxiliarorganizador/retornardadospessoamodal?idPessoa=480125")
   rt = await rt.json()
   console.log(rt)
}

const main = async()=>{
   const browser = await puppeteer.launch({args: ['--no-sandbox'], userDataDir: './data' })
   const page = await browser.newPage();
   try{
      try{
         await page.goto('https://www.even3.com.br/evento/login/');
         await page.waitForSelector('input[type="email"]', {timeout:1000});
         await page.type('input[type="email"]', "marcosgona13@gmail.com")
         await page.type('input[type="password"]', "s@f3!@#");
         await page.keyboard.press('Enter');
         await page.waitForNavigation();
      }catch(e){}
      await getCerts(page)
   }catch(e){}
   await browser.close();
}
main().then(res => console.log(res))
