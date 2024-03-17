import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../../../components/Universal/SectionHeader";
import ShooterCard from "../../../components/Universal/ShooterCard";
export default function Treneri({id, device, treneri}){

    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Trenéři" subtitle=""></SectionHeader>
           
               <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {treneri?.map((shooter, index) => <ShooterCard color={"#FEE6E6"} bacolor={"red"} ic={"red"} key={index} {...shooter} device={device} />)}
               </SimpleGrid>

        </section>
    )
}