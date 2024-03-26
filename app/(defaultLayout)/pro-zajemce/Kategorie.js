"use client"
import { Container, Grid, px, ScrollAreaAutosize, SimpleGrid, Skeleton, Stack, Text, useMantineTheme } from '@mantine/core';
import SectionHeader from "../../components/Universal/SectionHeader";
import { device } from 'app/lib/useDevice';
function CategoryCard({span, nazev, kategorie, color}){

    return(
        <Grid.Col span={span}>
            <div style={{display: "flex", flexDirection: "column", gap: "2vh", backgroundColor: color ? color : "#F1FDE6", alignItems: "center", padding: "2vh 1vw", height: "100%", justifyContent: "center"}}>
                <Text size='xl' fw={600}>{nazev}</Text>
               {kategorie ?  <Text size='lg' ta={"center"}>{kategorie}</Text> : ""}
            </div>
        </Grid.Col>
    )
}
function NavCard({span, nazev, kategorie}){

    return(
        <Grid.Col span={span}>
            <div style={{display: "flex", flexDirection: "column", gap: "2vh", borderRight: "5px solid #519F00", alignItems: "center", padding: "2vh 2vw", height: "100%", justifyContent: "center"}}>
                <Text size='xl' fw={600}>{nazev}</Text>
             
            </div>
        </Grid.Col>
    )
}
export default function Kategorie({ id}){
    const theme = useMantineTheme();
   if(device == "m"){
    return(
        <section id={id} style={{}}>
       
       <SectionHeader mainText="Kategorie závodníků" subtitle=""></SectionHeader>
       <ScrollAreaAutosize style={{maxWidth: "100vw"}}>
       <Grid style={{minWidth: "200vw"}}>
       <Grid.Col span={12}>
        <Grid align="stretch">
        <NavCard span={2} nazev={"Věk"} kategorie={""} />
        <NavCard span={2} nazev={"12 let"}/>
        <NavCard span={2} nazev={"14 let"} />
        <NavCard span={2} nazev={"18 let"} />
        <NavCard span={2} nazev={"21 let"} />
        <NavCard span={2} nazev={"99+ let"}  />
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Vzduchová puška"} kategorie={""} />
        <CategoryCard span={2} nazev={"VzPU 30 L"} kategorie={"mladší žáci do 12 let"} />
        <CategoryCard span={2} nazev={"VzPU 30 L"} kategorie={"starší žáci do 14 let"} />
        <CategoryCard span={2} nazev={"VzPU 40"} kategorie={"dorost (do 18)"} />
        <CategoryCard span={2} nazev={"VzPU 60"} kategorie={"junioři (do 21)"} />
        <CategoryCard span={2} nazev={"VzPU 60"} kategorie={"dospělí (do 99+)"} />
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Malorážní puška"} kategorie={"vleže"} />
        <CategoryCard span={6} nazev={"SM 60"} kategorie={"žáci a dorost"} />
        <CategoryCard span={4} nazev={"LM 60"} kategorie={"junioři, dospělí"} />
      
       
    
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Malorážní puška"} kategorie={"3x20"} />
        <CategoryCard span={6} nazev={"SM 3x20"} kategorie={"žáci a dorost"} />
        <CategoryCard span={4} nazev={"LM 3x20"} kategorie={"junioři, dospělí"} />
      
       
    
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Sportovní kuše"} kategorie={"ve stoje"} />
        <CategoryCard span={9} nazev={"U23"} kategorie={"do 23 let"} />
        <CategoryCard span={1} nazev={"M / W"} kategorie={"muži a ženy"} />
      
       
    
        </Grid>
        </Grid.Col>
       </Grid>
       </ScrollAreaAutosize>

    </section>
    )
   } else{
     return(
        <section id={id} style={{maxWidth: "100%"}}>
        <SectionHeader mainText="Kategorie závodníků" subtitle=""></SectionHeader>
       <Grid>
       <Grid.Col span={12}>
        <Grid align="stretch">
        <NavCard span={2} nazev={"Věk"} kategorie={""} />
        <NavCard span={2} nazev={"12 let"}/>
        <NavCard span={2} nazev={"14 let"} />
        <NavCard span={2} nazev={"18 let"} />
        <NavCard span={2} nazev={"21 let"} />
        <NavCard span={2} nazev={"99+ let"}  />
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Vzduchová puška"} kategorie={""} />
        <CategoryCard span={2} nazev={"VzPU 30 L"} kategorie={"mladší žáci do 12 let"} />
        <CategoryCard span={2} nazev={"VzPU 30 L"} kategorie={"starší žáci do 14 let"} />
        <CategoryCard span={2} nazev={"VzPU 40"} kategorie={"dorost (do 18)"} />
        <CategoryCard span={2} nazev={"VzPU 60"} kategorie={"junioři (do 21)"} />
        <CategoryCard span={2} nazev={"VzPU 60"} kategorie={"dospělí (do 99+)"} />
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Malorážní puška"} kategorie={"vleže"} />
        <CategoryCard span={6} nazev={"SM 60"} kategorie={"žáci a dorost"} />
        <CategoryCard span={4} nazev={"LM 60"} kategorie={"junioři, dospělí"} />
      
       
    
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Malorážní puška"} kategorie={"3x20"} />
        <CategoryCard span={6} nazev={"SM 3x20"} kategorie={"žáci a dorost"} />
        <CategoryCard span={4} nazev={"LM 3x20"} kategorie={"junioři, dospělí"} />
      
       
    
        </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
        <Grid align="stretch">
        <CategoryCard color={"#D6F9B3"} span={2} nazev={"Sportovní kuše"} kategorie={"ve stoje"} />
        <CategoryCard span={9} nazev={"U23"} kategorie={"do 23 let"} />
        <CategoryCard span={1} nazev={"M / W"} kategorie={"muži a ženy"} />
      
       
    
        </Grid>
        </Grid.Col>
       </Grid>

    </section>
    )
   }
}









