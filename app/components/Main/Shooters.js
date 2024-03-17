import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../Universal/SectionHeader";
import ShooterCard from "../Universal/ShooterCard";

const shooters = [
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "Předseda", categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"], href: "/o-nas/strelci/petr-novak"},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "Předseda", categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"], href: "/o-nas/strelci/petr-novak"},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "Předseda", categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"], href: "/o-nas/strelci/petr-novak"},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "Předseda", categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"], href: "/o-nas/strelci/petr-novak"},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "Předseda", categories: ["VzPi 40", "VzPu 40", "VzPi 60", "VzPu 60"], href: "/o-nas/strelci/petr-novak"},
    
]
export default function Shooters({device}){

    return(
        <section style={{padding: "2vh 5vw"}}>
               <SectionHeader subtitle={"Kdo nás reprezentuje"} mainText="Naši střelci" btnText={"Všichni střelci"} btnLink={"/o-nas/strelci"}></SectionHeader>
               <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {shooters?.map((shooter, index) => <ShooterCard key={index} {...shooter} device={device} />)}
               </SimpleGrid>
        </section>
    )
}