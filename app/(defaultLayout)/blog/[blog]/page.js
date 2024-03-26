import formatSlug, { extractPostId } from "app/lib/formatSlug"
import HeroSection from "/app/components/Universal/HeroSection.js"
import { HiArrowLongLeft } from "react-icons/hi2"
import { Badge, Text, rem } from "@mantine/core"
import Link from "next/link"
import Content from "./Content"
import MainContent from "./MainContent"
import { device } from "app/lib/useDevice"
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
export default async function ProCleny({ params }) {
  const id = extractPostId(params.blog)
  const { blog } = await getData({ tofetch: [{ name: "blog", furl: "blogs/" + id + "?populate=deep" }] })
  console.log(blog)
  const blogDate = new Date(blog?.attributes?.createdAt).toLocaleDateString("cs-CZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <main>
      <MainContent device={device} blog={blog} blogDate={blogDate}/>
    </main>
  )
}

/*
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
*/
