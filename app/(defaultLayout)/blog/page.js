"use client"
import { SimpleGrid } from '@mantine/core'
import HeroSection from '/app/components/Universal/HeroSection.js'
import NewsCard from "../../components/Universal/NewsCard"
import { useViewportSize } from '@mantine/hooks'
import useDevice from 'app/lib/useDevice'
import SectionHeader from 'app/components/Universal/SectionHeader'
import { Carousel } from '@mantine/carousel'
export const meta = {}

export default function Blog(p){
    const news = [
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Ze závodů"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Provozní informace"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Tréninkové podklady"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Ze závodů"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Provozní informace"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Tréninkové podklady"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Ze závodů"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Provozní informace"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Tréninkové podklady"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Ze závodů"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Provozní informace"
        },
        {
            name: "Nákup elektronických terčů",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg",
            category: "Tréninkové podklady"
        },
    ]
    let newsCategories = []
    for(let item in news){
        let i = news[item]
        if(i?.category && !newsCategories.find(nc => nc?.name == i?.category)){
            newsCategories.push({name: i?.category, items: []})
        }
        if(i?.category){
            let index = newsCategories?.findIndex(category => category.name == i?.category)
            newsCategories[index].items.push(i)
        }
    }
    console.log(newsCategories)
    const {width} = useViewportSize();
    const device = useDevice(width)
    return(
        <main>
            <HeroSection name="Blog" >
            Najdete zde soutěží pořádaných SSK Slatina Brno. Registrovat se můžete jednoduše po rozkliknutí soutěže.b
            </HeroSection>
            <div style={{padding: "4vh 5vw", display: "flex", flexDirection: "column", gap: "5vh"}}>
         {newsCategories?.map((category, index)=> {

            return(
               <div key={index}>
               <SectionHeader subtitle={""} mainText={category?.name} btnText={"Všechny příspěvky v kategorii " + category?.name} btnLink={"/zavody"}></SectionHeader>
               <Carousel slideSize="33%"  align="start" slideGap="md" controlSize={33} loop withIndicators>
            {category?.items?.map((competition, index) => {

                return(
                    <Carousel.Slide key={index}>
                    <NewsCard {...competition} key={index} device={device} />
                    </Carousel.Slide>
                )
            })}
            </Carousel>
               </div>
            )
         })}
            <SimpleGrid cols={device !== "m" ? 3 : 1} gap={20}>
            {news?.map((competition, index) => {

                return(
                    <NewsCard {...competition} key={index} device={device} />
                )
            })}
            </SimpleGrid>
            </div>
        </main>
    )
}