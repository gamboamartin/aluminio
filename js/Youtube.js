
import pt from "./../node_modules/puppeteer"


async function getsubs(){
   
    const browser = await pt.launch()
    
    const page = await browser.newPage()
    
    await page.goto('https://m.youtube.com/c/VentanasdeAluminio')
    
    const f = await page.$("#subscriber-count")
    
    const text = await (await f.getProperty('textContent')).jsonValue()
    console.log("Subs is: " + text)
 
    
   
 }
 
 async function getviews(){
    
     const browser = await pt.launch()
     
     const page = await browser.newPage()
     
     await page.goto('https://m.youtube.com/c/VentanasdeAluminio')
     
     const f = await page.$("#subscriber-count")
     
     const text = await (await f.getProperty('textContent')).jsonValue()
     console.log("views is: " + text)
  
     
    
  }
 
  getviews()
  getsubs()
 
 