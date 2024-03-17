import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import WinnerCard from "./WinnerCard";
import { Carousel } from '@mantine/carousel';
const shooters = [
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
    {img: "/images/shooters/1.jpg", name: "Petr Novák", position: "", categories: [{place: 1, desc: "MČR kuše"}, {place: 3, desc: "MČR VzPu 40"}, {place: 2, desc: "MČR SM 60 Muži"}], href: "/o-nas/strelci/petr-novak", desc: "Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean."},
    
]
export default function OurShooter({id, device}) {
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="Naši úspěšní střelci" subtitle=""></SectionHeader>
<Carousel slideSize="25%"  align="start" slideGap="md" controlSize={33} loop withIndicators>
                {shooters?.map((shooter, index) => <Carousel.Slide key={index}><WinnerCard key={index} {...shooter} device={device} /></Carousel.Slide>)}
               </Carousel>
        </section>
    )
}