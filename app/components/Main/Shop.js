"use client"
import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../Universal/SectionHeader";
import ItemCard from "../Universal/ItemCard";

const goods = [
    {img: "/images/home/kabat.jpeg", name: "Klubová mikina", price: "500 Kč", href: "/eshop/polo-tricko", desc: "Klubová mikina s logem střeleckého klubu"},
    {img: "/images/home/kabat.jpeg", name: "Klubová mikina", price: "500 Kč", href: "/eshop/polo-tricko", desc: "Klubová mikina s logem střeleckého klubu"},
    {img: "/images/home/kabat.jpeg", name: "Klubová mikina", price: "500 Kč", href: "/eshop/polo-tricko", desc: "Klubová mikina s logem střeleckého klubu"},
    {img: "/images/home/kabat.jpeg", name: "Klubová mikina", price: "500 Kč", href: "/eshop/polo-tricko", desc: "Klubová mikina s logem střeleckého klubu"},
    {img: "/images/home/kabat.jpeg", name: "Klubová mikina", price: "500 Kč", href: "/eshop/polo-tricko", desc: "Klubová mikina s logem střeleckého klubu"},
]

export default function Shop({device}){

    return(
        <section style={{padding: "2vh 5vw"}}>
            <SectionHeader subtitle={"Novinky z našeho eshopu"} mainText="Eshop" btnText={"Všechny položky"} btnLink={"/eshop"}></SectionHeader> 
            <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {goods?.map((shooter, index) => <ItemCard key={index} {...shooter} device={device} />)}
               </SimpleGrid>
        </section>
    )
}