import { Button, Text } from "@mantine/core";
import UIWrapper from "app/components/UIWrapper/UIWrapper";

import Link from "next/link";


export default function Onas(p){

    return(
       <UIWrapper>
         <main>
          <section style={{minHeight: "35vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "2vh", padding: "10vh 2vw 2vh 2vw"}}>
            <Text size='3rem'>Eshop zatím není zprovozněn :(</Text>
            <Text size='lg'>Web SSK Slatina Brno slouží nejen jako maturitní projekt, ale bude produkčně nasazen. Eshop je funkcionalita, která je ještě třeba dořešit s klientem.</Text>
           <Link href={"/"} style={{marginTop: "auto"}}> <Button type='s' radius={"xl"} size='xl' >zpět domů</Button></Link>
          </section>
        </main>
       </UIWrapper>
      )
}