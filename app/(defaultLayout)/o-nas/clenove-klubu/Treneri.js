"use client"
import { SimpleGrid } from "@mantine/core";
import SectionHeader from "../../../components/Universal/SectionHeader";
import ShooterCard from "../../../components/Universal/ShooterCard";
export default function Treneri({id, device, treneri}){

    return(
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Trenéři" subtitle=""></SectionHeader>
           
               <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {treneri?.map((shooter, index) => {
                    const newShooter = { img: "http://38.242.151.80:1340" + shooter?.photo?.data?.attributes.url,
          name: shooter?.jmeno + " " + shooter?.prijmeni,
          position: shooter?.pozice_trener,
          tel: shooter?.multiple_tel,
            mail: shooter?.multiple_mail1,
            href: "/pro-cleny/profil/" + shooter?.id
           }
                    return(
                        <ShooterCard color={"#FEE6E6"} bacolor={"red"} ic={"red"} key={index} {...newShooter} device={device} />
                    )
                })}
               </SimpleGrid>

        </section>
    )
}
/*
 const newShooter = { img: "http://38.242.151.80:1340" + shooter?.photo?.data?.attributes.url,
          name: shooter?.jmeno + " " + shooter?.prijmeni,
          position: shooter?.pozice_vedeni,
          tel: shooter?.multiple_tel,
            mail: shooter?.multiple_mail1,
            href: "/pro-cleny/profil/" + shooter?.css_prukaz
           }
*/