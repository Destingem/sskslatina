import { BsFillPeopleFill } from "react-icons/bs";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmojiEvents, MdEventNote } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";
export const header = {

    desktop: [
        {label: "Domů", path: "/"},
        {label: "O nás", path: "/o-nas", items: [
          {label: "O nás", path: "/o-nas", icon: BsFillPeopleFill, desc: "Kdo se stará o naše střelce"},
            {label: "Členové klubu", path: "/o-nas/clenove-klubu", icon: BsFillPeopleFill, desc: "Kdo se stará o naše střelce"},
            {label: "Naši střelci", path: "/o-nas/nasi-strelci", icon: BsFillPeopleFill, desc: "Kdo reprezentuje náš klub"},
        ]},
        {label: "Pro členy", path: "/pro-cleny", items: [
          {label: "Pro členy", path: "/pro-cleny", icon: IoPersonSharp, desc: "Profily našich střelců"},
            {label: "Profil", path: "/pro-cleny/profil", icon: IoPersonSharp, desc: "Profily našich střelců"},
           

        ]},
        {label: "Pro zájemce", path: "/pro-zajemce"},
        {label: "Naše soutěže", path: "/souteze", items: [
          {label: "Naše soutěže", path: "/souteze",icon: MdEventNote, desc: "Informace a registrace do našich soutěží"},
            {label: "Nadchazející soutěže", path: "/souteze/nadchazejici", icon: MdEventNote, desc: "Informace a reghistrace do našich soutěží"},
            {label: "Výsledky soutěží", path: "/souteze/vysledky", icon: MdEmojiEvents, desc: "Výsledky našich soutěží"},
        ]},
        {label: "Blog", path: "/blog", },
        {label: "Eshop", path: "/eshop", items: [
          {label: "Eshop", path: "/eshop", icon: FaShoppingCart, desc: "Náš obchod s potřebami pro střelce"},
            {label: "Všechny produkty", path: "/eshop1", icon: FaShoppingCart, desc: ""},
            {label: "Všechny kategorie", path: "/eshop2", icon: BiSolidCategory, desc: ""},
            {label: "Eshop 3", path: "/eshop3", icon: "p", desc: ""},
        ]},
        {label: "Kontakt", path: "/kontakt"},
    ],
    mobile: {},
}

export const footer = {

    desktop: [
    
        {label: "O nás", path: "/o-nas", items: [
            {label: "Členové klubu", path: "/o-nas/clenove-klubu"},
            {label: "Naši střelci", path: "/o-nas/nasi-strelci"},
        ]},
        {label: "Pro Členy", path: "/pro-cleny", items: [
            {label: "Informace", path: "/pro-cleny/informace"},
            {label: "Profil", path: "/pro-cleny/profil"},
            {label: "Tréninkové podklady", path: "/pro-cleny/treninkove-podklady"},

        ]},
    
        {label: "Naše soutěže", path: "/souteze", items: [
            {label: "Nadchazející soutěže", path: "/souteze"},
            {label: "Výsledky soutěží", path: "/souteze/vysledky"},
        ]},
        {label: "Blog", path: "/blog", items: [
            {label: "Všechny příspěvky", path: "/blog1"},
            {label: "Všechny kategorie", path: "/blog2"},
            {label: "Blog 3", path: "/blog3"},
        ]},
        {label: "Eshop", path: "/eshop", items: [
            {label: "Všechny produkty", path: "/eshop1"},
            {label: "Všechny kategorie", path: "/eshop2"},
            {label: "Eshop 3", path: "/eshop3"},
        ]},
        
    ],
    mobile: {},
}


/**
 * 
 * async function getData() {
    // URLs to fetch from
    const apiBaseURL = 'http://38.242.151.80:1340/api/';
    const toFetch = [
    
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
export async function  header(){
var {blogoveKategorie} = await getData()
let blogoveKategorie2 = await blogoveKategorie?.map(cat => {
    let cata = cat?.attributes
    return {label: cata?.nazev, path: "/blog/" + cata?.value, desc: cata?.popis, icon: BiSolidCategory}
})
await blogoveKategorie2
console.log(blogoveKategorie2)
    return(
 */