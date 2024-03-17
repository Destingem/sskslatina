import SectionHeader from "../../../../components/Universal/SectionHeader";
export default function Stats({id, device, }){

    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Statistiky" subtitle="Statistiky výkonnosti střelce v různých disciplínách"></SectionHeader>
           </section>
    )
}