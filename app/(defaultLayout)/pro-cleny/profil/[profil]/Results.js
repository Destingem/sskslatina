import SectionHeader from "../../../../components/Universal/SectionHeader";
export default function Results({id, device, }){

    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Výsledky" subtitle="Aktuální výsledky střelce v různých disciplínách"></SectionHeader>
           </section>
    )
}