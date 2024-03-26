import Profiles from 'app/(defaultLayout)/pro-cleny/Profiles'
import HeroSection from '/app/components/Universal/HeroSection.js'
import { device } from 'app/lib/useDevice';
async function getData() {
    // URLs to fetch from
    const apiBaseURL = 'http://38.242.151.80:1340/api/';
    const toFetch = [
      {name: "nasiClenove", furl: "clenove-klubu?populate=deep"},
   
    ];
  
    // Object to store fetched data
    let fetchedData = {};
  
    // Fetch options
    let options = {
      next: {
        revalidate: 20,
      },
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
export default async function NasiStrelci(p){
    var { nasiClenove } = await getData();
    nasiClenove = nasiClenove.map(clen => {return {id: clen.id, ...clen.attributes}}).filter(clen => {return clen.nasi_strelci === true})
    return(
        <main>
            <HeroSection name="Střeleckéí profily" >
           Výseldky, statistiky a další informace.
            </HeroSection>
            <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
            <Profiles id="profiles" oldProfiles={nasiClenove} device={device} mainLabel={" "} mainText={" "} />
            </div>
        </main>
    )
}