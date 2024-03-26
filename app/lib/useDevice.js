"use client"
import useViewportSize from "@mantine/core"
export default function isDevice() {
    if (typeof window == "undefined") {return}
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const width = window.innerWidth
    let mobile = width < 780;
    let tablet = !mobile && width < 1024;
  
    if(mobile){
        return "m"
    } else if(tablet){
        return "m"
    } else if(width){
        return "l"
    } else {
        return "la"
    }
   

   
}



export const device = isDevice()