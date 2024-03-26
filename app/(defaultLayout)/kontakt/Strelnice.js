"use client";

import { Avatar, Badge, Text, Title } from "@mantine/core";
import { device } from "app/lib/useDevice";
import { IoMdMail, IoMdPhoneLandscape, IoMdPhonePortrait } from "react-icons/io";

function DisBadge({boolean, nazev}){
    return(
        <div style={{display: "flex", gap: "0.5vw", margin: "2vh 0"}}>
        <Badge color={boolean ? "teal" : "red"} size="lg" style={{padding: "1vh 1vw"}}>{nazev}</Badge>
        <Text fw={700} c={"dark"}>{boolean ? "lze střílet" : "nelze střílet"}</Text>
      </div>
    )
}

export default function Strelnice({ strelnice }) {
  if(device == "m"){
    return (
      <section>
        {strelnice.map(({ id, attributes }) => (
          <div key={id} style={{ border: '1px solid #ccc', maxWidth: "100vw", overflow: "hidden", margin: "2vh 0" }}>
           <div style={{display: "flex", flexDirection: "column"}}>
           
           <div style={{padding: "2vh 5vw 2vh 2vw"}}>
           <Title order={3} size={"2.25rem"}>{attributes.nazev}</Title>
           <Text style={{margin: "1vh 0"}}>{attributes.popis}</Text>
           <p>Adresa: {attributes.adresa}</p>
          <div style={{margin: "1vh 0"}}>
          <Text size="xl" c={"#B40C04"} fw={600}>Povolené disciplíny</Text>
          <DisBadge boolean={attributes.vzduchovka} nazev="Vzduchovka" />
              <DisBadge boolean={attributes.malorazka} nazev="Malorazka" />
              <DisBadge boolean={attributes.kuse} nazev="Kuse" />
          </div>
           
            <Text size="xl" c={"#B40C04"} fw={600}>{attributes?.spravce_strelnice.length > 1 ? "Správci střelnice" : "Správce střelnice"}</Text>
            <div style={{display: "flex", gap: "1vw"}}>
              {attributes.spravce_strelnice.map(spravce => (
               <div key={spravce?.id} style={{backgroundColor: "#F1FDE6", padding: "2vh 1vw"}}>
            
               <Text size="xl">{spravce?.jmeno + " " + spravce?.prijmeni}</Text>
                  <Text component="em">{spravce?.pozice}</Text>
                  <div style={{display: "flex", alignItems: "center", gap: "0.5vw", marginTop: "1vh"}}>
                  <Avatar color="teal"><IoMdMail /></Avatar>
                  <Text component="a" href={"mailto:" + spravce?.mail}>{spravce?.mail}</Text>
                  </div>
                  <div style={{display: "flex", alignItems: "center", gap: "0.5vw", marginTop: "1vh"}}>
                  <Avatar color="teal"><IoMdPhonePortrait /></Avatar>
                  <Text component="a" href={"mailto:" + spravce?.tel}>{spravce?.tel}</Text>
                  </div>
               </div>
              ))}
            </div>
            {attributes.fotka && attributes.fotka.data && (
              <div>
              
                <Text size="xl" c={"#B40C04"} fw={600}>Galerie</Text>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
              {attributes.galerie.data.map(gal => (
                <img key={gal.id} src={"http://38.242.151.80:1340" + gal.attributes.url} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
              ))}
            </div>
              </div>
            )}
            
          
           </div>
          <div>
          <div dangerouslySetInnerHTML={{ __html: attributes.map_iframe }} style={{minWidth: "40%"}}/>
          <img src={"http://38.242.151.80:1340" + attributes.fotka.data.attributes.url} alt="Fotografie střelnice" style={{ maxWidth: '100%', height: 'auto' }} />
         
          </div>
           </div>
         
          </div>
        ))}
      </section>
    );
  } else {
    return (
      <section>
        {strelnice.map(({ id, attributes }) => (
          <div key={id} style={{ border: '1px solid #ccc' }}>
           <div style={{display: "flex"}}>
           
           <div style={{padding: "2vh 5vw 2vh 2vw"}}>
           <Title order={3} size={"2.5rem"}>{attributes.nazev}</Title>
           <p style={{margin: "1vh 0"}}>{attributes.popis}</p>
           <p>Adresa: {attributes.adresa}</p>
          <div style={{margin: "1vh 0"}}>
          <Text size="xl" c={"#B40C04"} fw={600}>Povolené disciplíny</Text>
          <DisBadge boolean={attributes.vzduchovka} nazev="Vzduchovka" />
              <DisBadge boolean={attributes.malorazka} nazev="Malorazka" />
              <DisBadge boolean={attributes.kuse} nazev="Kuse" />
          </div>
           
            <Text size="xl" c={"#B40C04"} fw={600}>{attributes?.spravce_strelnice.length > 1 ? "Správci střelnice" : "Správce střelnice"}</Text>
            <div style={{display: "flex", gap: "1vw"}}>
              {attributes.spravce_strelnice.map(spravce => (
               <div key={spravce?.id} style={{backgroundColor: "#F1FDE6", padding: "2vh 1vw"}}>
            
               <Text size="xl">{spravce?.jmeno + " " + spravce?.prijmeni}</Text>
                  <Text component="em">{spravce?.pozice}</Text>
                  <div style={{display: "flex", alignItems: "center", gap: "0.5vw", marginTop: "1vh"}}>
                  <Avatar color="teal"><IoMdMail /></Avatar>
                  <Text component="a" href={"mailto:" + spravce?.mail}>{spravce?.mail}</Text>
                  </div>
                  <div style={{display: "flex", alignItems: "center", gap: "0.5vw", marginTop: "1vh"}}>
                  <Avatar color="teal"><IoMdPhonePortrait /></Avatar>
                  <Text component="a" href={"mailto:" + spravce?.tel}>{spravce?.tel}</Text>
                  </div>
               </div>
              ))}
            </div>
            {attributes.fotka && attributes.fotka.data && (
              <div>
              
                <Text size="xl" c={"#B40C04"} fw={600}>Galerie</Text>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
              {attributes.galerie.data.map(gal => (
                <img key={gal.id} src={"http://38.242.151.80:1340" + gal.attributes.url} alt="" style={{ maxWidth: '200px', height: 'auto' }} />
              ))}
            </div>
              </div>
            )}
            
          
           </div>
          <div>
          <div dangerouslySetInnerHTML={{ __html: attributes.map_iframe }} style={{minWidth: "40%"}}/>
          <img src={"http://38.242.151.80:1340" + attributes.fotka.data.attributes.url} alt="Fotografie střelnice" style={{ maxWidth: '100%', height: 'auto' }} />
         
          </div>
           </div>
         
          </div>
        ))}
      </section>
    );
  }
}
