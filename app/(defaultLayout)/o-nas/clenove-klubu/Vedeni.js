import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../../../components/Universal/SectionHeader";
import ShooterCard from "../../../components/Universal/ShooterCard";
export default function Vedeni({id, device, vedeni}){

    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Vedení klubu" subtitle=""></SectionHeader>
           
               <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {vedeni?.map((shooter, index) => <ShooterCard color={"#E6FDFD"} bacolor={"cyan"} key={index} {...shooter} device={device} />)}
               </SimpleGrid>

        </section>
    )
}