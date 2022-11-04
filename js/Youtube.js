

let pt = require("puppeteer")



async function getsubs(){
   
    const browser = await pt.launch()
    
    const page = await browser.newPage()
    
    await page.goto('https://www.youtube.com/c/VentanasdeAluminio/about')
    
    const f = await page.$("#subscriber-count")
    
    const text = await (await f.getProperty('textContent')).jsonValue()
    console.log("Subs is: " + text)
 
    
   
 }
 
 async function getviews(){
    
     const browser = await pt.launch()
     
     const page = await browser.newPage()
     
     await page.goto('https://m.youtube.com/c/VentanasdeAluminio/about')

     
     const [f] = await page.$x('//*[@id="right-column"]/yt-formatted-string[3]')
     
     const text = await (await f.getProperty('textContent')).jsonValue()
     console.log("views is: " + text)
  
     
    
  }
 
  getviews()
  getsubs()
 
