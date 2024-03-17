import { Tabs, Text } from "@mantine/core";
import SectionHeader from "app/components/Universal/SectionHeader";
import Image from "next/image";


export default function Historie({id}){

    var history = [
        {
            label: "1990 - Založení klubu",
            icon: "",
            text: <Text size="lg" lh={"175%"}>Pellentesque massa venenatis leo proin elit. <br /> Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean. 

            Rutrum adipiscing risus vel interdum euismod dui morbi eget platea. Lectus arcu blandit volutpat egestas et id.</Text>,
            image: "/images/universal/kyvalka.jpg",
            value: "1990"
        },
        {
            label: "1996 - Úspěchy na MČR",
            icon: "",
            text: <Text size="lg" lh={"175%"}>Pellentesque massa venenatis leo proin elit. <br /> Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean. 

            Rutrum adipiscing risus vel interdum euismod dui morbi eget platea. Lectus arcu blandit volutpat egestas et id.</Text>,
            
            value: "1996"
        },
        {
            label: "2019 - Nová střelnice",
            icon: "",
            text: <Text size="lg" lh={"175%"}>Pellentesque massa venenatis leo proin elit. <br /> Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean. 
            
            Rutrum adipiscing risus vel interdum euismod dui morbi eget platea. Lectus arcu blandit volutpat egestas et id.</Text>,
            image: "/images/universal/teamPhoto.jpeg",
            value: "2019"
        }
    ]
    return(
        <section id={id}>
          <SectionHeader mainText="Historie" subtitle="Historie našeho klubu"></SectionHeader>
          <Tabs color="red" defaultValue={history[0]?.value}>
      <Tabs.List>
 {history?.map((item, index)=> {
        return(
            <Tabs.Tab key={index} value={item.value} leftSection={item.icon} >
            <Text>{item.label}</Text>
        </Tabs.Tab>
        )
 })}
      </Tabs.List>

   {history?.map((item, index)=> {
        return(
            <Tabs.Panel key={index} value={item.value} style={{padding: "2vh 1vw", display: "flex"}} >
      <div style={{maxWidth: "60%"}}>
      {item.text}
      </div>
      {item?.image && <div style={{position: "relative", height: "100%", width: "50%", height: "50vh"}}>
      <Image style={{objectFit: "cover"}} fill src={item.image} alt="Air rifle" />
      </div>}
        </Tabs.Panel>
        )

   })}
    </Tabs>
          </section>
    )
}
/*
       <Tabs.Tab value="gallery" leftSection={""}>
          1990 - Založení klubu
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={""}>
          1996 - První úspěchy
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={""}>
          2000 - Výstavba střelnice
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={""}>
          2009 - Růst klubu
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={""}>
          2019 - Nová střelnice
        </Tabs.Tab>
*/

/*
   <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
*/