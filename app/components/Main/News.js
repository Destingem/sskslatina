"use client"
import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../Universal/SectionHeader";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../../lib/useDevice";
import NewsCard from "../Universal/NewsCard";
import { Carousel } from "@mantine/carousel";



export default function News({blogs, device}){
 
    return(
        <section style={{padding: "2vh 5vw"}}>
         <SectionHeader subtitle={""} mainText="Aktuality" btnText={"Všechny příspěvky"} btnLink={"/blog"}>Blog a provozní informace</SectionHeader>
       
         <Carousel slideSize={device !== "m" ? "33%" : "100%"}  slideGap={"lg"} align="start">
        {blogs.map((blog, index) => (
         <Carousel.Slide key={index}>
         <NewsCard {...blog.attributes}
           name={blog?.attributes?.nazev_prispevku}
           id={blog.id}
                  desc={blog?.attributes?.short_text}
                  categories={blog?.attributes?.blogove_kategories?.data}
                  date={blog?.attributes?.publishedAt}
           key={index} 
           device={device}
            href={""}
            
             />
         </Carousel.Slide>
        ))}
      </Carousel>
          
        </section>
    )
}