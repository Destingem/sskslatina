
"use client";
import { Divider, SimpleGrid, Text, Title, rem } from "@mantine/core";
import { useHover, useViewportSize } from "@mantine/hooks";
import Link from "next/link";
import useDevice from "../../lib/useDevice";



export default function HeroSection({name, children, links}){
    const {width} = useViewportSize();
    const device = useDevice(width)
   if(links){
    var newsLinks = ""
    var finalLinks = []
        let isDevidable = links.length % 2 == 0 ? true : false;
        if(isDevidable){
            let half = links.length / 2;
            let firstHalf = links.slice(0, half);
            let secondHalf = links.slice(half, links.length);
            newsLinks = [firstHalf, secondHalf]
        } else {
            let half = (links.length - 1) / 2;
            let firstHalf = links.slice(0, half);
            let secondHalf = links.slice(half, links.length);
            newsLinks = [firstHalf, secondHalf]
        }
  
        for(let link in newsLinks[0]+ 1){
            if(newsLinks[0][link]){
                finalLinks.push(newsLinks[0][link])
              
            } 
            if(newsLinks[1][link]){
                finalLinks.push(newsLinks[1][link])
            }
        }
   }
        
    function LinksItem({item, index, sl}){
        const { hovered, ref } = useHover();
        return(
            <Link href={item?.path} key={index} style={{display: "flex",  gap: "2vh", flexDirection: "column"}} ref={ref}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5vw"}}>
            <Title order={!sl ? 3 : 4} size={rem(20)} c={!hovered ? !sl ? "" : "#545454" : "#336500"}>{item.label}</Title>
            <svg width="75" height="23" viewBox="0 0 75 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path
  d="M63.7543 22.1932L61.2827 19.7322L67.7706 13.255H0.75V9.65412H67.7706L61.2827 3.16619L63.7543 0.715909L74.4929 11.4545L63.7543 22.1932Z"
  fill={!hovered ? !sl ? "black" : "#545454" : "#5FBC00"}
  style={{transition: "all 0.25s "}}
/>
</svg>
            </div>
            <Text size={rem(16)}>{item.desc}</Text>
            <div style={{padding: "0 0 0 2vw"}}>
                {item.sublinks?.map((sublink, index) => {
                    return(
                        <LinksItem sl={true} item={sublink} index={index} key={index} />
                    )
                })}
            </div>
        </Link>
        )
    }
   if(device !== "m"){
    return(
        <section style={{width: "100%", backgroundColor: "#FBFBFB", minHeight: "40vh", padding: "5vh 10vw", display: "flex", justifyContent: "space-between"}}>
            <div style={{maxWidth: "70%", display: "flex", flexDirection: "column", gap: "3vh"}}>
            <Title order={1} size={rem(66)}>{name}</Title>
            <Divider color={"#F76767"} size={"xl"} />
            
            <Text lh={"175%"} size={rem(20)}>{children}</Text>
            </div>
           {finalLinks &&  <SimpleGrid verticalSpacing={"xs"} cols={2} spacing={"xl"}>
                {finalLinks?.map((item, index) => {
                    return(
                     <LinksItem key={index} item={item} index={index} />
                    )
                })}
            </SimpleGrid>}
        </section>
    )
   } else{
    return(
        <section style={{width: "100%", backgroundColor: "#FBFBFB", minHeight: "40vh", padding: "5vh 10vw", display: "flex", flexDirection: "column", gap: "5vh"}}>
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh"}}>
            <Title order={1} size={rem(56)}>{name}</Title>
            <Divider color={"#F76767"} size={"xl"} />
            
            <Text lh={"175%"} size={rem(20)}>{children}</Text>
            </div>
            <SimpleGrid verticalSpacing={"xs"} cols={1} spacing={"xl"}>
                {links?.map((item, index) => {
                    return(
                     <LinksItem key={index} item={item} index={index} />
                    )
                })}
            </SimpleGrid>
        </section>
    )
   }
}
//FEE6E6