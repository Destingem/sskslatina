import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import ShooterCard from "../../components/Universal/ShooterCard";
import NewsCard from "../../components/Universal/NewsCard";
export default function NewsForMembers({id, device,}){
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
    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Aktuality" subtitle="" btnLink={"/blog/kategorie/pro-cleny"} btnText={"všechny aktuality pro členy"}></SectionHeader>
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