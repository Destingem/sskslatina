import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import ShooterCard from "../../components/Universal/ShooterCard";
import NewsCard from "../../components/Universal/NewsCard";
export default function NewsForMembers({id, device,}){
    const news = [
        {
            name: "Sportovní střelba ze vzduchové pušky",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg"
        },
        {
            name: "Sportovní střelba z malorážní pušky",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg"
        },
        {
            name: "Sportovní střelba z kuše",
            date: "2022-09-01",
            categories: [{name: "Vybavení", href: "/blog/vybaveni"}, {name: "Elektronické terče", href: "/blog/elektronicke-terce"}],
            desc: "V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici. V rámci programu nová zelená cesta k úsporám máme možnost získat až 5 dalších elektronických terčů na naší střelnici.",
            href: "/blog/nakup-elektronickych-tercu",
            img: "/images/terce.jpg"
        },
    ]
    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Tréninkové podklady" subtitle="" btnLink={"/blog/kategorie/pro-cleny"} btnText={"všechny tréninkové podklady"}></SectionHeader>
            <SimpleGrid cols={device !== "m" ? 3 : 1} gap={20}>
            {news?.map((competition, index) => {

                return(
                    <NewsCard {...competition} key={index} device={device} color="rgb(230, 253, 253)"  id={competition.id} />
                )
            })}
            </SimpleGrid>
            </section>
    )
}