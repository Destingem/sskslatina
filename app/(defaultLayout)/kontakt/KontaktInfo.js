import { Text } from "@mantine/core"

let contactInfos = [
    {
        label: "telefon",
        text: "+420 123 456 789",
        value: "tel:+420123456789",
    },
    {
        label: "email",
        text: "info@sskslatina.cz",
        value: "mailto:info@sskslatina.cz",
    },
    {
        label: "datová schránka",
        text: "123456789",
        value: "https://www.datoveschranky.info/skslatina",
    },
    {
        label: "adresa",
        text: "Cejl 20, Brno-Zábrdovice, 602 00",
        value: "https://goo.gl/maps/3Q9Y1o9n8JjQxN2V9",
    }
]
export default function KontaktInfo(){

    return(
        <section>
            <div style={{display: "flex", gap: "2vw", flexDirection: "column"}}>
                {contactInfos.map((info, index) => {
                    return(
                        <div key={index} style={{display: "flex" , flexDirection: "column"}}>
                            <Text size="xl" c={"#B40C04"} fw={600}>{info.label}</Text>
                            <a href={info.value} style={{textDecoration: "none"}}>
                                <Text size="1.5rem" c={"#2F2F2F"} fw={600}>{info.text}</Text>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}