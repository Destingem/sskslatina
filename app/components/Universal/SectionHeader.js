import { Text } from "@mantine/core";
import AllButton from "./AllButton";
import SectionHeading from "./SectionHeading";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../../lib/useDevice";

export default function SectionHeader({children,mainText, btnText, btnLink,subtitle, ...props}){
    const {width} = useViewportSize();
    const device = useDevice(width)
    return(
       <div style={device !== "m" ? {marginBottom: "5vh", marginTop: "1vh"} : {marginBottom: "2vh", marginTop: "1vh"}}>
         <div style={device !== "m" ? {display: "flex", alignItems: "flex-end", justifyContent: "space-between", color: "#808080",}
        : {display: "flex", flexDirection: "column", color: "#808080",}}>
            <SectionHeading subtitle={subtitle}>{mainText}</SectionHeading>
            {device == "m" && children && <Text>{children}</Text>}
           {btnText && btnLink && <AllButton style={device !== "m" ? {} : {padding: "2vh 2vw"}} href={btnLink}>{btnText}</AllButton>}
        
            </div>
            {device !== "m" && children && <Text>{children}</Text>}
       </div>
    )
}