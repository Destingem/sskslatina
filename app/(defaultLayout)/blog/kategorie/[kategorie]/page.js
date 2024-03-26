import formatSlug, { extractPostId } from 'app/lib/formatSlug';
import HeroSection from '/app/components/Universal/HeroSection.js'
import { SimpleGrid } from '@mantine/core';
import NewsCard from 'app/components/Universal/NewsCard';
import { device } from 'app/lib/useDevice';
import Content from "./Content"
async function getData({tofetch}) {
    console.log("ToFetch: ",tofetch)
    // URLs to fetch from
    const apiBaseURL = 'http://38.242.151.80:1340/api/';
    var toFetch =  [
        {name: "blogoveKategorie", furl: "blogove-kategories?populate=*"},
   
      ];
  if(Array.isArray(tofetch)){
    toFetch = tofetch
  }

    // Object to store fetched data
    let fetchedData = {};
  
    // Fetch options
    let options = {
    next: {revalidate: 10},
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
  export async function generateStaticParams() {
    
    const { blogoveKategorie } = await getData({});
    var slugs = blogoveKategorie.map((soutez, index)=> {
        return {kategorie: soutez?.attributes?.value+ "-" + soutez?.id, id: soutez?.id}
    })
    console.log(slugs)
   return slugs
 }
export default async function ProCleny({params}){
    const id = extractPostId(params.kategorie)
    const {kategorie} = await getData({tofetch: [
        {name: "kategorie", furl: "blogove-kategories/" + id +  "?populate=deep"},
   
      ]})
    console.log(kategorie)
    return(
        <main>
            <HeroSection name={kategorie?.attributes?.nazev} >
            {kategorie?.attributes?.popis}
            </HeroSection>
           <Content device={device} kategorie={kategorie} />
        </main>
    )
}
