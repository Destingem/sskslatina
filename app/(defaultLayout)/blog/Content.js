"use client"
import { Carousel } from "@mantine/carousel"
import SectionHeader from "../../components/Universal/SectionHeader"
import NewsCard from "../../components/Universal/NewsCard"
import { SimpleGrid } from "@mantine/core"

export default function Content({ blogoveKategorie, blogs, device }) {
    console.log(blogs)
  return (
    <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
      {blogoveKategorie.map((category, index) => (
        <div key={index}>
          <SectionHeader
            subtitle=""
            mainText={category.attributes.nazev}
            btnText={"Všechny příspěvky v kategorii " + category.attributes.nazev}
            btnLink={"/blog/kategorie/" + category.attributes.value + "-" + category.id}
          >{category?.attributes?.popis}</SectionHeader>
          <Carousel slideSize={device !== "m" ? "33%" : "100%"} align="start" slideGap="md" controlSize={33} loop withIndicators>
            {category.attributes.blogs.data.map((blog, blogIndex) => (
              <Carousel.Slide key={blogIndex}>
                <NewsCard
                  {...blog.attributes}
                  name={blog?.attributes?.nazev_prispevku}
                  desc={blog?.attributes?.short_text}
                  id={blog.id}
                  date={blog?.attributes?.publishedAt}
                  key={blogIndex}
                  device={device}
                  href={""}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      ))}
      <SectionHeader subtitle="" mainText="Všechny blogy"  />
      <SimpleGrid cols={device !== "m" ? 3 : 1} gap={20} >
        {blogs.map((blog, index) => (
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
        ))}
      </SimpleGrid>
    </div>
  )
}
