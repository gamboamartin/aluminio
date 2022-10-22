const pt= require('puppeteer')
async function getText(){
   
   const browser = await pt.launch()
   
   const page = await browser.newPage()
   
   await page.goto('https://m.youtube.com/c/VentanasdeAluminio')
   
   const f = await page.$("#subscriber-count")
   
   const text = await (await f.getProperty('textContent')).jsonValue()
   console.log("Text is: " + text)

   return text;
  
}

getText();
var resultado = getText();
console.log(resultado)