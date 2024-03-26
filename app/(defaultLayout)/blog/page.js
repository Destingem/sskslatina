
import { SimpleGrid } from '@mantine/core'
import HeroSection from '/app/components/Universal/HeroSection.js'
import NewsCard from "../../components/Universal/NewsCard"
import { useViewportSize } from '@mantine/hooks'
import useDevice from 'app/lib/useDevice'
import SectionHeader from 'app/components/Universal/SectionHeader'
import { Carousel } from '@mantine/carousel'
import { device } from 'app/lib/useDevice'
import Content from './Content'
import Categories from './Categories'
async function getData() {
    // URLs to fetch from
    const apiBaseURL = 'http://38.242.151.80:1340/api/';
    const toFetch = [
      {name: "blogs", furl: "blogs?populate=*"},
      {name: "blogoveKategorie", furl: "blogove-kategories?populate=*"}
    ];
  
    // Object to store fetched data
    let fetchedData = {};
  
    // Fetch options
    let options = {
      method: 'GET',
      headers: {
        'User-Agent': 'insomnia/8.6.0',
        Authorization: "Bearer " + process.env.STRAPI
      }
    };
  
    // Iterate over the toFetch array to perform fetch operations
    for (let item of toFetch) {
      const {name, furl} = item;
      try {
        let url = apiBaseURL + furl;
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${name}`);
        }
        const data = await response.json();
        fetchedData[name] = data.data; // Adjust based on your actual data structure
      } catch (err) {
        console.error(`Error fetching ${name}:`, err);
        fetchedData[name] = []; // Default to empty array on error
      }
    }
  
    return fetchedData;
  }
  
  // Example usage within a Next.js page component
  export default async function BlogPage() {
    // Fetch the blog data and blog categories
    const { blogs, blogoveKategorie } = await getData();
  
 
 

 
    return (
        <main>
        <HeroSection name="Blog">
          Na naem blogu najdete aktuality, provozní informace a novinky ze závodů.
        </HeroSection>
        <Categories blogoveKategorie={blogoveKategorie} device={device} />
        <Content blogs={blogs} blogoveKategorie={blogoveKategorie} device={device} />
      
      </main>
    )
}

