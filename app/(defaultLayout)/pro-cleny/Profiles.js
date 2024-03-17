"use client"
import { Input, InputLabel, ScrollAreaAutosize, SegmentedControl, Select, SimpleGrid, Text } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";
import ShooterCard from "../../components/Universal/ShooterCard";
import { useState } from "react";
var _ = require('lodash');
export default function Profiles({id, device, profiles}){
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
    return(
        
        <section id={id} style={{maxWidth: "100%"}}>
            <SectionHeader mainText="Střelecké profily" subtitle="">Vaše střelecké profily vám zobrazí výsledky na nedávných závodech a další statistiky</SectionHeader>
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
             <ScrollAreaAutosize style={{maxHeight: "70vh"}}>
             <SimpleGrid cols={device === "m" ? 1 : 5} spacing="lg">
                {data?.map((shooter, index) => <ShooterCard   ic={"#12b886"} key={index} {...shooter} device={device} />)}
               </SimpleGrid>
             </ScrollAreaAutosize>
                {data.length === 0 && <Text size="xl" style={{textAlign: "center", marginTop: "2vh"}}>Nenalezen žádný střelecký profil</Text>}
        </section>
    )
}