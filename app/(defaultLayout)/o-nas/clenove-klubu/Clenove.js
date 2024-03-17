import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../../../components/Universal/SectionHeader";
import ShooterCard from "../../../components/Universal/ShooterCard";
export default function Clenove({id, device, clenove}){

    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Členové" subtitle=""></SectionHeader>
           
               <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {clenove?.map((shooter, index) => <ShooterCard   ic={"#12b886"} key={index} {...shooter} device={device} />)}
               </SimpleGrid>

        </section>
    )
}