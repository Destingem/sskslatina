

import HeroSection from "../../../../components/Universal/HeroSection";

import Records from "./Records";
import Sucesses from "./Sucesses";
import Results from "./Results";
import Stats from "./Stats";
import { device } from "app/lib/useDevice";
import formatSlug from "app/lib/formatSlug";
async function getData({ tofetch }) {
  console.log("ToFetch: ", tofetch)
  // URLs to fetch from
  const apiBaseURL = "http://38.242.151.80:1340/api/"
  var toFetch = [{ name: "blogs", furl: "blogs?populate=*" }]
  if (Array.isArray(tofetch)) {
    toFetch = tofetch
  }

  // Object to store fetched data
  let fetchedData = {}

  // Fetch options
  let options = {
    next: { revalidate: 10 },
    method: "GET",
    headers: {
      "User-Agent": "insomnia/8.6.0",
      Authorization: "Bearer " + process.env.STRAPI,
    },
  }

  // Iterate over the toFetch array to perform fetch operations
  for (let item of toFetch) {
    const { name, furl } = item
    try {
      let url = apiBaseURL + furl
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(`Failed to fetch ${name}`)
      }
      const data = await response.json()
      fetchedData[name] = data.data // Adjust based on your actual data structure
    } catch (err) {
      console.error(`Error fetching ${name}:`, err)
      fetchedData[name] = [] // Default to empty array on error
    }
  }

  return fetchedData
}
export async function generateStaticParams() {
  const { blogs } = await getData({})
  var slugs = blogs.map((blog, index) => {
    return { blog: formatSlug(blog?.attributes?.nazev_prispevku) + "-" + blog?.id, id: blog?.id }
  })
  console.log(slugs)
  return slugs
}
export default function Onas(p){

let fName = "Jan"
let lName = "Novák"
const links = [
    {
      label: "Osobní rekordy",
      path: "#rekordy",
      desc: "Nejlepší výsledky střelce v různých disciplínách",
    },
    {
      label: "Úspěchy",
      path: "#uspechy",
      desc: "Nejlepší umístění střelce v různých soutěžích",
    },
    {
      label: "Výsledky",
      path: "#vysledky",
      desc: "Aktuální výsledky střelce v různých disciplínách",
    },
    {
        label: "Statistiky",
        path: "#statistiky",
        desc: "Statistiky výkonnosti střelce v různých disciplínách",
      },
  ]

    return(
        <main>
        <HeroSection name={fName + " " + lName} links={links} >
          Tato funkcionalita bude dostupná v produkční verzi (při reálnném nasazení)
        </HeroSection>
        <div style={{ padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh" }}>
            <Records id="rekordy" device={device} />
            <Sucesses id="uspechy" device={device} />
            <Results id="vysledky" device={device} />
            <Stats  id="statistiky" device={device} />
        </div>
        </main>
    )
}
