"use client";
import { SimpleGrid } from "@mantine/core";
import NewsCard from 'app/components/Universal/NewsCard';

export default function Content({device, kategorie}){

    return(
        <SimpleGrid cols={device !== "m" ? 3 : 1} gap={20} style={{padding: "2vh 5vw"}}>
        {kategorie?.attributes?.blogs?.data.map((blog, index) => (
          <NewsCard {...blog.attributes}
           id={blog.id}
           name={blog?.attributes?.nazev_prispevku}
                  desc={blog?.attributes?.short_text}
                  categories={blog?.attributes?.blogove_kategories?.data}
                  date={blog?.attributes?.publishedAt}
           key={index} 
           device={device}
            href={""}
            
             />
        ))}
      </SimpleGrid>
    )
}