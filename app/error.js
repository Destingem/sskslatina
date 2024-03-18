"use client"

import { Button, Card, Grid, SimpleGrid, Text, ThemeIcon } from "@mantine/core"
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { CgArrowLongRight } from "react-icons/cg";
import { useEffect, useState } from "react";



const links = [
    {
        name: "Hlavní stránka",
        href: "/",
        text: "Hlavní stránka",
        Icon: IoHome,
        color: "cyan.7",
        backgroundColor: "cyan.0"
    },
    {
        name: "Blog",
        href: "/blog",
        text: "Hlavní stránka",
        Icon: IoHome,
        color: "green.7",
        backgroundColor: "green.0"
    },
    {
        name: "Eshop",
        href: "/eshop",
        text: "Hlavní stránka",
        Icon: IoHome,
        color: "red.7",
        backgroundColor: "red.0"
    },
]
function Card404({name, href, Icon, color, backgroundColor, text}){
    return(
       <Link href={href}>
        <Card shadow="xs" padding="xl" radius="md" className="flex flex-col  align-center aspect-[5/3] pl-15 justify-between" bg={backgroundColor} >
       <div className="flex justify-between align-middle">
       <ThemeIcon size="4rem" color={color} variant="filled" radius="xl" className="text-4xl">
            <Icon />
        </ThemeIcon>
        <CgArrowLongRight size="4rem" className="" style={{color: color}} />
       </div>
      <div>
      <Text size="xl" className="text-left font-semibold text-2xl">
            {name}
        </Text>
        <Text>
            {text}
        </Text>
      </div>
            </Card>
       </Link>
    )
}
const cards = links.map((link, i) => <Card404 key={i} {...link} />)
export default function Error({error, reset}){
const [errorDisplay, setErrorDisplay] = useState("")

useEffect(()=> {
    console.log(error)
    setErrorDisplay(error.message)
}, [error])
    return(
        <div className="flex flex-col justify-center align-center mx-auto py-28 h-screen px-28">
            <Text size={"8rem"} fw={800} className="text-center" c="gray.3">
                500
            </Text>
            <Text c="gray.8" component="h1" size={"3rem"} fw={500} className="text-center mt-10">
                Chyba na naší straně
            </Text>
            <Text c="gray.5" component="h1" size={"1.5rem"} fw={500} className="text-center mt-10">
                {errorDisplay}
            </Text>
            <Button style={{alignSelf: "center", marginTop: "5vh"}} size="xl" radius="xl" variant="filled"  c="cyan" bg="cyan.1" onClick={()=> {reset()}}>Zkuste to znovu</Button>
            <SimpleGrid cols={3} className="" style={{maxHeight: "30vh", padding: "5vh 10vw"}}>
                {cards}
            </SimpleGrid>
        </div>
    )
}