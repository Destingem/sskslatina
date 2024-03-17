import { Accordion, Container, Title } from '@mantine/core';
import SectionHeader from "../../components/Universal/SectionHeader";
let classes = {}

const FAQitems = [
    {
        question: "Z čeho střílíte?",
        answer: "Střílíme z malorážních pušek, vzduchových pušek a kuší."
    },
    {
        question: "Kde trénujete?",
        answer: "Střelbu ze vzduchové pušky trénujeme na střelnici RSCM Brno, střelbu z malorážní pušky na střelnici v Kuřimi. Více o střelnicích najdete zde."
    },
    {
        question: "Jak často trénujete?",
        answer: "Trénujeme pravidelně alespoň 2x týdně. Více informací o trénincích najdete zde."
    },
    {
        question: "Kdy máte otevřeno?",
        answer: "Naši členové trénují v úterý, středy a čtvrtky cca od 12 do 18 hodin. Více informací o trénincích najdete zde."
    },
]

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export default function FAQ({id}) {
  return (
    <section id={id} size="xl" style={{width: "100%"}}>
      <SectionHeader mainText="FAQ" subtitle="Často kladené dotazy"></SectionHeader>

      <Accordion variant="separated">
    {FAQitems?.map(({question, answer}, index)=> {

        return(
            <Accordion.Item className={classes.item} value={index + "A"} key={index}>
          <Accordion.Control>{question}</Accordion.Control>
          <Accordion.Panel>{answer}</Accordion.Panel>
        </Accordion.Item>
        )
    })}

    
      </Accordion>
    </section>
  );
}