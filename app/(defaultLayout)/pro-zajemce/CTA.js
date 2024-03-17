import ShooterCTA from "../../components/Universal/ShooterCTA";
import SectionHeader from "../../components/Universal/SectionHeader";
export default function CTA({device, id}){
    return(
        <section id={id} style={{maxWidth: "100%"}}>
        <ShooterCTA device={device}/>
       
          

    </section>
    )
}