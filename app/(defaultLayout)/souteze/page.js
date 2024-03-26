import HeroSection from '/app/components/Universal/HeroSection.js'
import Upcoming from "./Upcoming.js"
import Ended from "./Ended.js"
async function getData() {
    // URLs to fetch from
    const apiBaseURL = 'http://38.242.151.80:1340/api/';
    const toFetch = [
      {name: "souteze", furl: "zavody?populate=deep"},
  
    ];
  
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

export default async function Souteze(p){
    const { souteze } = await getData();
    var nadchazejiciSouteze = []
    var ukonceneSouteze = []
    for(let soutez in souteze){
        const thisSoutez = souteze[soutez]
        const competitionDate = new Date(thisSoutez.attributes.termin_do).getTime()
        const dateNow = new Date().getTime()
       
        if(competitionDate < dateNow || thisSoutez?.attributes?.ukoncen == true){
            ukonceneSouteze.push(thisSoutez)
    }
    else{
        nadchazejiciSouteze.push(thisSoutez)
    }
    }

    
    return(
        <main>
            <HeroSection name="Naše soutěže" >
            Na této stránce najdete soutěže pořádané naším klubem.
            </HeroSection>
            <Upcoming souteze={souteze} nadchazejiciSouteze={nadchazejiciSouteze} ukonceneSouteze={ukonceneSouteze} />
            <Ended ukonceneSouteze={ukonceneSouteze} />
        </main>
    )
}