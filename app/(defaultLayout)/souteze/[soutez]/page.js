import SectionHeader from 'app/components/Universal/SectionHeader';
import  formatSlug, { extractPostId }  from '../../../lib/formatSlug';
import SoutezHero from "./SoutezHero"
import Info from "./Info"
import Popis from "./Popis"
import Kategorie from "./Kategorie"
import { Button, Text } from '@mantine/core';
import Link from 'next/link';
import { device } from 'app/lib/useDevice';
import Wrapped from "./Wrapped"

async function getData({tofetch}) {
    console.log("ToFetch: ",tofetch)
    // URLs to fetch from
    const apiBaseURL = 'http://38.242.151.80:1340/api/';
    var toFetch =  [
        {name: "souteze", furl: "zavody?populate=deep"},
   
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
    
    const { souteze } = await getData({});
    var slugs = souteze.map((soutez, index)=> {
        return {soutez: formatSlug(soutez?.attributes.nazev + "-" + soutez?.id), id: soutez?.id}
    })
    console.log(slugs)
   return slugs
 }



export default async function Onas({params}){
    const id = extractPostId(params.soutez)
    const {soutez} = await getData({tofetch: [
        {name: "soutez", furl: "zavody/" + id +  "?populate=deep"},
   
      ]})

      console.log("Soutěž", soutez)
      if(soutez.length == 0){
        return(
          <main>
            <section style={{minHeight: "35vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "2vh", padding: "10vh 2vw 2vh 2vw"}}>
              <Text size='3rem'>Tato soutěž neexistuje</Text>
              <Text size='lg'>Možná máte špatný link, nebo už byla soutěž odstraněna z našeho webu.</Text>
             <Link href={"/souteze"} style={{marginTop: "auto"}}> <Button type='s' radius={"xl"} size='xl' >zpět na soutěže</Button></Link>
            </section>
          </main>
        )
      }
    return(
        <main>
            <SoutezHero  name={soutez?.attributes?.nazev} map={soutez?.attributes?.strelnice?.data?.attributes?.map_iframe}>{soutez?.attributes?.popis}</SoutezHero>
            <section name="propozice" soutez={soutez} style={{padding: "2vh 5vw"}}>
            <Popis ltext={soutez?.attributes?.ltext}/>
            <SectionHeader mainText="Propozice závodu "></SectionHeader>
            <Wrapped device={device}>
          
            <Info device={device} zavod={soutez} />
            <div>
            <Kategorie device={device} disciplina={soutez?.attributes?.disciplina} />
            </div>
            </Wrapped>
            </section>
        </main>
    )
}