import {open,test} from "nsh/test";
test("preview",async()=>{
 const app=await open("./App.tsx",{width:1400,height:900,platform:"windows"});
 await app.waitFor("text:Loaded",{timeout:60000}); await app.press("enlarge");
 await app.wait(5000); await app.screenshot("capture.png");
},90000);
