import SectionHeader from "app/components/Universal/SectionHeader"
import HeroSection from "/app/components/Universal/HeroSection.js"
import KontaktInfo from "./KontaktInfo"
import Strelnice from "./Strelnice"
import ContactForm from "./ContactForm"
import WrappedFlex from "./WrappedFlex"
import SidloMapa from "./SidloMapa"
import { device } from "app/lib/useDevice"
async function getData() {
    // URLs to fetch from
    const apiBaseURL = 'http://38.242.151.80:1340/api/';
    const toFetch = [
      {name: "strelnice", furl: "strelnices?populate=*"},
    
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
export default async function ProCleny(p) {
    const  {strelnice} = await getData({})
  return (
    <main>
      <HeroSection name="Kontakt"></HeroSection>
      <div style={{ padding: "2vh 5vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
        
        <WrappedFlex device={device}>
      <div>
      <SectionHeader mainText={"SSK Slatina Brno"} subtitle={"sportovní klub"} style={{marginBotto: "-2vh"}}></SectionHeader>
          <KontaktInfo />
      </div>
         
       <SidloMapa device={device} />
        
        </WrappedFlex>
        <Strelnice strelnice={strelnice} />
        <ContactForm device={device} />
      </div>
    </main>
  )
}
