"use client"
import { Input, InputLabel, ScrollAreaAutosize, SegmentedControl, Select, SimpleGrid, Text } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import ShooterCard from "../../components/Universal/ShooterCard";
import { useState } from "react";
import formatSlug from "../../lib/formatSlug"
var _ = require('lodash');
export default function Profiles({id, device, oldProfiles, mainLabel, mainText}){
  
  let profiles = oldProfiles?.map((shooter, index)=> {
    const name = shooter?.jmeno + " " + shooter?.prijmeni
    const newShooter = { img: "http://38.242.151.80:1340" + shooter?.photo?.data?.attributes.url,
    name: name,
    position: "člen " + shooter?.css_prukaz,
    categories: shooter?.discipliny?.data?.map(disciplina => {return disciplina?.attributes?.name}),
    tel: shooter?.multiple_tel,
      mail: shooter?.multiple_mail1,
      href: "/pro-cleny/profil/" + formatSlug(name + " " + shooter?.id)
     }
     return newShooter
  })
    var unordered = _.cloneDeep(profiles)
    const [data, setData ]= useState(unordered)
    const sortOptions = [
        { label: 'Výchozí řazení', value: 'basic' },
        { label: 'Od A do Z', value: 'AZ' },
        { label: 'Od Z do A', value: 'ZA' },
   
      ]
      function handleSearch(e){
        console.log(e)
         if(e.target.value.length > 0){
            setData(prevData => {return prevData.filter(shooter => shooter?.name?.toLowerCase().includes(e?.target.value?.toLowerCase()))})
         } else {
                setData(unordered)
                handleSortChange(value)
         }
        setInputValue(e.value)
      }
    const [value, setValue] = useState(sortOptions[0].value);
    const [inputValue, setInputValue] = useState('');
    function handleSortChange(v){
        
      
        if(v === "basic"){
            setData(unordered)
        }
        if(v === "AZ") setData(prevData => {return prevData.sort((a, b) => a.name.localeCompare(b.name))})
        if(v === "ZA") setData(prevData => {return prevData.sort((a, b) => b.name.localeCompare(a.name))})
        setValue(v)
        console.log(unordered)
    }
    if(device == "m"){
      return(
        
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText={mainLabel ? mainLabel : "Střelecké profily"} subtitle="">{mainText ? mainText : "Vaše střelecké profily vám zobrazí výsledky na nedávných závodech a další statistiky"}</SectionHeader>
            <div style={{display: "flex", flexDirection: "column", marginBottom: "2vh", gap: "2vh"}}>
            <Input.Wrapper label="Hledat" description="Vyhledejte střelecký profil" style={{minWidth: "50%"}} >
            <Input value={inputValue} onChange={handleSearch} />
            </Input.Wrapper>
               
                <Input.Wrapper label="Seřadit dle" description="Vyberte podle čeho chcete seřadit střelecké profily" >
                <SegmentedControl
      value={value}
      onChange={handleSortChange}
      data={sortOptions}
    />
                </Input.Wrapper>
            </div>
             <ScrollAreaAutosize style={{maxHeight: "70vh"}}>
             <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {data?.map((shooter, index) => <ShooterCard   ic={"#12b886"} key={index} {...shooter} device={device} />)}
               </SimpleGrid>
             </ScrollAreaAutosize>
                {!data || data?.length === 0 && <Text size="xl" style={{textAlign: "center", marginTop: "2vh"}}>Nenalezen žádný střelecký profil</Text>}
        </section>
    )
    } else{
      return(
        
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText={mainLabel ? mainLabel : "Střelecké profily"} subtitle="">{mainText ? mainText : "Vaše střelecké profily vám zobrazí výsledky na nedávných závodech a další statistiky"}</SectionHeader>
            <div style={{display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2vh"}}>
            <Input.Wrapper label="Hledat" description="Vyhledejte střelecký profil" style={{minWidth: "50%"}} >
            <Input value={inputValue} onChange={handleSearch} />
            </Input.Wrapper>
               
                <Input.Wrapper label="Seřadit dle" description="Vyberte podle čeho chcete seřadit střelecké profily" >
                <SegmentedControl
      value={value}
      onChange={handleSortChange}
      data={sortOptions}
    />
                </Input.Wrapper>
            </div>
             <ScrollAreaAutosize style={{maxHeight: "100vh"}}>
             <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {data?.map((shooter, index) => <ShooterCard   ic={"#12b886"} key={index} {...shooter} device={device} />)}
               </SimpleGrid>
             </ScrollAreaAutosize>
                {!data || data?.length === 0 && <Text size="xl" style={{textAlign: "center", marginTop: "2vh"}}>Nenalezen žádný střelecký profil</Text>}
        </section>
    )
    }
}