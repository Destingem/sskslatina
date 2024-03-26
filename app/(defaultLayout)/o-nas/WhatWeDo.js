import { Text, Title } from "@mantine/core";
import SectionHeader from "app/components/Universal/SectionHeader";
import Link from "next/link";

export default function WhatWeDo({id, device}){
function SubTitle({children}){

    return(
        <Title size={"2rem"} c={"#545454"} order={3} lh={"200%"}>{children}</Title>
    )
}
    return(
        <section id={id} style={device !== "m" ? {maxWidth: "50%"} : {}}>
          <SectionHeader mainText="Co děláme" subtitle="Jaké disciplíny střílíme, kdo jsou naši střelci..."></SectionHeader>
          <Text size="lg" lh={"175%"}>Pellentesque massa venenatis leo proin elit. <br /> Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean. 
          
        
          Rutrum adipiscing risus vel interdum euismod dui morbi eget platea. Lectus arcu blandit volutpat egestas et id.</Text>
          <SubTitle>Trénujeme</SubTitle>
          <Text>
            Trénujeme mládež i dospělé ve sportovní střelbě ze vzduchové a malorážní pušky + sportovní kuše.
          </Text>
          <SubTitle>Pořádáme</SubTitle>
          <Text>
            Působíme pod <Link href={"www.css.cz"}>Českým střeleckým svazem</Link> a účastníme se soutěží na všech úrovních.
            Zárověň pořádáme vlastní soutěže.
          </Text>
          <SubTitle>Disciplíny</SubTitle>
        </section>
    )
}