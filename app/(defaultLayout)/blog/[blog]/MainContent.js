"use client";
import formatSlug, { extractPostId } from "app/lib/formatSlug"
import HeroSection from "/app/components/Universal/HeroSection.js"
import { HiArrowLongLeft } from "react-icons/hi2"
import { Badge, Text, rem } from "@mantine/core"
import Link from "next/link"
import Content from "./Content"

export default function MainContent({device, blog, blogDate}){

  if(device == "m"){
    return(
        <>
          <HeroSection name={blog?.attributes?.nazev_prispevku}>{blog?.attributes?.short_text}</HeroSection>
       <div style={{ padding: "4vh 10vw" }}>
         <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
           <Link href={"/blog"}>
             <div style={{ display: "flex", gap: "2vw", alignItems: "center",  }}>
               <HiArrowLongLeft style={{ fontSize: rem(42), color: "#808080" }} />
               <Text size="lg" c={"#808080"} fw={600}>
                 zpět na blog
               </Text>
             </div>
           </Link>
           <div style={{display: "flex", gap: "1vh", alignItems: "center", flexWrap: "wrap", margin: "2vh 0"}}>
             {blog?.attributes?.blogove_kategories?.data.map((category, index) => {
                 return(
                 <Link href={"/blog/kategorie/" + category?.attributes?.value + "-" + category?.id} key={index}>
                 <Badge size="lg" color="teal" fw={600}>
                   {category?.attributes?.nazev}
                 </Badge>
                 </Link>
                 )
             })}
           </div>
           <Text component="p" size="lg" c={"#808080"} fw={600}>
             {blogDate}
           </Text>
         </div>
         <Content blog={blog} device={device} />
       </div>
        </>
     )
  } else{
    return(
        <>
          <HeroSection name={blog?.attributes?.nazev_prispevku}>{blog?.attributes?.short_text}</HeroSection>
       <div style={{ padding: "4vh 10vw" }}>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
           <Link href={"/blog"}>
             <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
               <HiArrowLongLeft style={{ fontSize: rem(42), color: "#808080" }} />
               <Text size="lg" c={"#808080"} fw={600}>
                 zpět na blog
               </Text>
             </div>
           </Link>
           <div style={{display: "flex", gap: "1vw", alignItems: "center"}}>
             {blog?.attributes?.blogove_kategories?.data.map((category, index) => {
                 return(
                 <Link href={"/blog/kategorie/" + category?.attributes?.value + "-" + category?.id} key={index}>
                 <Badge size="lg" color="teal" fw={600}>
                   {category?.attributes?.nazev}
                 </Badge>
                 </Link>
                 )
             })}
           </div>
           <Text component="p" size="lg" c={"#808080"} fw={600}>
             {blogDate}
           </Text>
         </div>
         <Content blog={blog} />
       </div>
        </>
     )
  }
}