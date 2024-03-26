"use client"

import SectionHeader from "app/components/Universal/SectionHeader"
import Link from "next/link"

export default function Categories({blogoveKategorie, device}){
console.log(blogoveKategorie)
let categories = blogoveKategorie.map((category, index) => {
    return {id: category?.id, ...category.attributes}
})
console.log(categories)
    return(
        <section style={device !== "m" ? {padding: "4vh 5vw",} : {padding: "2vh 5vw",}}>
        <SectionHeader mainText="Kategorie" >Vyberte si kategorii, která vás zajímá</SectionHeader>
    <div style={device !== "m" ? {display: "flex", flexWrap: "wrap"} : {display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
        {categories?.map((category, index)=> {

            return(
                <Link href={"/blog/kategorie/" + category?.value + "-" + category?.id} key={index} style={{width: device !== "m" ? "33%" : "100%", padding: "2vh", }}>
                    <div style={{backgroundColor: "#F1FDE6",  padding: "2vh", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                     <div>
                     <h3 style={{color: "#2d2d2d", fontSize: "1.5rem", fontWeight: "bold"}}>{category?.nazev}</h3>
                        <p style={{color: "#808080", fontSize: "1rem"}}>{category?.popis}</p>
                     </div>
                        <svg width="75" height="23" viewBox="0 0 75 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M63.7543 22.1932L61.2827 19.7322L67.7706 13.255H0.75V9.65412H67.7706L61.2827 3.16619L63.7543 0.715909L74.4929 11.4545L63.7543 22.1932Z"
                fill="black"
              />
            </svg>
                    </div>
                </Link>
            )
        })}
    </div>
        </section>
    )

}