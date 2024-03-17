import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../Universal/SectionHeader";
import { useViewportSize } from "@mantine/hooks";
import useDevice from "../../lib/useDevice";
import NewsCard from "../Universal/NewsCard";

const news = [
    {
        name: "Nákup elektronických terčů",
        date: "2022-09-01",
        categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
        desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
        href: "/blog/nakup-elektronickych-tercu",
        img: "/images/terce.jpg"
    },
    {
        name: "Nákup elektronických terčů",
        date: "2022-09-01",
        categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
        desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
        href: "/blog/nakup-elektronickych-tercu",
        img: "/images/terce.jpg"
    },
    {
        name: "Nákup elektronických terčů",
        date: "2022-09-01",
        categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
        desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
        href: "/blog/nakup-elektronickych-tercu",
        img: "/images/terce.jpg"
    },
]

export default function News(){
    const {width} = useViewportSize();
    const device = useDevice(width)
    return(
        <section style={{padding: "2vh 5vw"}}>
         <SectionHeader subtitle={""} mainText="Aktuality" btnText={"Všechny příspěvky"} btnLink={"/zavody"}>Blog a provozní informace</SectionHeader>
         <SimpleGrid cols={device !== "m" ? 3 : 1} gap={20}>
            {news?.map((competition, index) => {

                return(
                    <NewsCard {...competition} key={index} device={device} />
                )
            })}
            </SimpleGrid>
        </section>
    )
}