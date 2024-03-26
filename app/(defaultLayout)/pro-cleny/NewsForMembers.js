// Import necessary components and hooks
"use client";
import { SimpleGrid, } from "@mantine/core";
import SectionHeader from "app/components/Universal/SectionHeader";
import NewsCard from "app/components/Universal/NewsCard";
import { Carousel } from "@mantine/carousel";
import isDevice from "app/lib/useDevice";

export default function NewsForMembers({ blogs, blogoveKategorie }) {
  const kategorie = ["aktuality_pro_cleny", "treninkove_podklady"];

  // Function to filter blogs by category
  const filterBlogsByCategory = (categoryValue) =>
    blogs.filter((blog) => {
      const categories = blog?.attributes?.blogove_kategories.data?.map((category) => category?.attributes?.value);
      return categories.includes(categoryValue);
    });
const device = isDevice()

  return (
    <>
      {kategorie.map((katValue, index) => {
        // Find category details
        const categoryDetails = blogoveKategorie?.find(cat => cat?.attributes?.value === katValue);

        // Filter blogs for this category
        const filteredBlogs = filterBlogsByCategory(katValue);

        // Render section for each category
        return (
          <section key={index}>
            <SectionHeader
              subtitle=""
              mainText={categoryDetails?.attributes?.nazev}
              btnText="Všechny příspěvky"
              btnLink="/blog"
            >
              {categoryDetails?.attributes?.popis}
            </SectionHeader>

            <Carousel slideSize={device !== "m" ? "33%" : "100%"} slideGap="lg" align="start" controlSize={33} loop withIndicators>
              {filteredBlogs.map((blog, idx) => (
                <Carousel.Slide key={idx} style={{maxWidth: device !== "m" ? "25vw" : "100vw" }}>
                  <NewsCard
                    {...blog.attributes}
                  name={blog?.attributes?.nazev_prispevku}
                  desc={blog?.attributes?.short_text}
                  id={blog.id}
                  date={blog?.attributes?.publishedAt}
                  key={idx}
                  device={device}
                  href={""}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </section>
        );
      })}
    </>
  );
}
