


import { Button } from "components/Button/Button"
import  About  from "/app/components/Main/About"
import { LP_GRID_ITEMS } from "lp-items"
import Hero from "/app/components/Main/Hero"
import Competitions from "/app/components/Main/Competitions"
import News from "/app/components/Main/News"
import Shooters from "/app/components/Main/Shooters"
import Shop from "/app/components/Main/Shop"
import ShooterCTA from "/app/components/Universal/ShooterCTA"
import useDevice from "/app/lib/useDevice"
import { useViewportSize } from "@mantine/hooks"

import { device } from "app/lib/useDevice"
import formatSlug from "app/lib/formatSlug"
async function getData() {
  // URLs to fetch from
  const apiBaseURL = 'http://38.242.151.80:1340/api/';
  const toFetch = [
    {name: "blogs", furl: "blogs?populate=*"},
    {name: "blogoveKategorie", furl: "blogove-kategories?populate=*"},
    {name: "nasiClenove", furl: "clenove-klubu?populate=deep"},
    {name: "souteze", furl: "zavody?populate=deep"},
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

export default async function Web() {
  var { blogs, blogoveKategorie, nasiClenove, souteze } = await getData();
  nasiClenove = nasiClenove.map(clen => {return {id: clen.id, ...clen.attributes}}).filter(clen => {return clen.nasi_strelci === true})
  nasiClenove = nasiClenove?.map((shooter, index)=> {
    const name = shooter?.jmeno + " " + shooter?.prijmeni
    const newShooter = { img: "http://38.242.151.80:1340" + shooter?.photo?.data?.attributes.url,
    name: name,
    position: "člen " + shooter?.css_prukaz,
    categories: shooter?.discipliny?.data?.map(disciplina => {return disciplina?.attributes?.name}),
    tel: shooter?.multiple_tel,
      mail: shooter?.multiple_mail1,
      href: "/pro-cleny/profil/" + formatSlug(name + " " + shooter?.id)
     }
     return newShooter
  })
  return (
    <main>
      <Hero />
      <About device={device} />
      <Competitions device={device} souteze={souteze} />
      <News device={device} blogs={blogs} />
      <Shooters device={device} nasiClenove={nasiClenove} />
      <Shop device={device} />
      <ShooterCTA device={device} />
    </main>
  )
}
