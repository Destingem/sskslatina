import { Text, Title, TextInput, Button, Image, ButtonGroup } from '@mantine/core';
import image from '/public/images/universal/shooters.jpeg';
import classes from "/styles/ShooterCTA.module.css";
import { useRouter } from 'next/navigation';

export default function ShooterCTA({device}) {
    const router = useRouter()
    function redirect(href) {
      router.push(href)
    }
   if(device !== "m"){
    return (
        <div className={classes.wrapper} style={{maxHeight: "52vh",margin: "5vh 10vw", backgroundColor: "#F1FDE6", padding: "0", display: "flex", justifyContent: "space-between", overflow: "hidden"}}>
          <div className={classes.body} style={{padding: "5vh 5vw"}}>
            <Title className={classes.title} style={{fontSize: "4rem", color: "#545454"}}>Zaujala vás sportovní střelba?</Title>
            <Text fw={500}  mb={5} style={{fontSize: "2rem"}}>
              Přijďte si ji vyzkoušet!
            </Text>
            <Text  c="dimmed" size="xl">
              Pokud se chcete dozvědět více o sportovní střelbě a vyzkoušet si ji, neváhejte nás kontaktovat.
            </Text>
    
            <div className={classes.controls}>
             <ButtonGroup>
                <Button onClick={()=> {redirect("/pro-zajemce")}} variant="filled" color="teal" radius="xl" size='xl' type='s' style={{marginTop: "3vh"}}>Více o sportovní střelbě</Button>
                <Button onClick={()=> {redirect("/kontakt")}} variant="outline" color="teal" radius="xl" size='xl' style={{marginTop: "3vh"}}>Kontaktujte nás</Button>
             </ButtonGroup>
            </div>
          </div>
          <Image w={"auto"} fit="fill" src={image.src} className={classes.image} />
        </div>
      );
   } else{
    return (
        <div className={classes.wrapper} style={{margin: "5vh 3vw 0 3vw", backgroundColor: "#F1FDE6", padding: "0",  overflow: "hidden"}}>
          <div className={classes.body} style={{padding: "0 5vw", maxWidth: "90vw"}}>
            <Title  style={{fontSize: "3rem", color: "#545454"}}>Zaujala vás sportovní střelba?</Title>
            <Text fw={500}  mb={5} style={{fontSize: "2rem"}}>
              Přijďte si ji vyzkoušet!
            </Text>
            <Text  c="dimmed" size="xl">
              Pokud se chcete dozvědět více o sportovní střelbě a vyzkoušet si ji, neváhejte nás kontaktovat.
            </Text>
    
            <div className={classes.controls} style={{display: "flex", flexDirection: "column", marginBottom: "2vh"}}>
             
                <Button onClick={()=> {redirect("/pro-zajemce")}} variant="filled" color="teal" radius="xl" size='xl' type='s' style={{marginTop: "0vh"}}>Více o sportovní střelbě</Button>
                <Button onClick={()=> {redirect("/kontakt")}} variant="outline" color="teal" radius="xl" size='xl' style={{marginTop: "1vh"}}>Kontaktujte nás</Button>
            
            </div>
          </div>
          <Image w={"auto"} fit="fill" src={image.src} className={classes.image} />
        </div>
      );
   }
}

