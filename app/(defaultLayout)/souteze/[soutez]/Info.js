"use client"
import { Avatar, Group, Text, Title } from "@mantine/core"
import formatSlug from "app/lib/formatSlug";
import generateCalendarLink from "app/lib/generateCalendarLink";
import Link from "next/link"

function InfoCard({name, Icon, value, href, btnText}){

    return(
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1vh"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "1.5vh", maxWidth: "65%"}}>
                <Group>
                <Avatar color="teal" variant="light" type="s" radius="6rem" size="lg" style={{fontSize: "1.5rem"}}><Icon /></Avatar>
                    <Title order={3}>{name}</Title>
                    
                </Group>
                <Text component="p" size="xl">{value}</Text>
            </div>
           {href &&  <Link href={href} target="_blank">
            
            <Text tt={"uppercase"} c={"#B40C04"} size="lg" fw={700}>
              {btnText}
            </Text>
            </Link>}
        </div>
    )
}

function Info({ zavod, device }) {
  console.log(zavod)
    const {
      attributes: {
        nazev,
        popis,
        termin_od,
        termin_do,
        registrace_do,
        strelnice: { data: strelniceData },
        member,
        disciplina,
      },
    } = zavod;
    const href = "/souteze/" + formatSlug(nazev + "-" + zavod?.id)
    let calendarLink = generateCalendarLink({name: nazev, date: {from: termin_od, to: termin_do}, location: { url: strelniceData.attributes.mapa, name: strelniceData.attributes.nazev, adress: strelniceData.attributes.mapa}, desc: popis, href})
    return (
      <div style={device !== "m" ? {maxWidth: "35%", display: "flex", flexDirection: "column", gap: "2vh"} : {maxWidth: "100%", display: "flex", flexDirection: "column", gap: "2vh"}}>
     
        {/* Event Period */}
        <InfoCard
          name="Termín"
          Icon={() => <i>📅</i>} // Replace with your actual Icon component
          value={`Od ${new Date(termin_od).toLocaleDateString()} do ${new Date(termin_do).toLocaleDateString()}`}
          href={calendarLink}
          btnText="Přidat do kalendáře"
        />
  
        {/* Registration Deadline */}
        <InfoCard
          name="Registrace do"
          Icon={() => <i>⏳</i>} // Replace with your actual Icon component
          value={new Date(registrace_do).toLocaleDateString()}
       
        />
  
        {/* Shooting Range */}
        {strelniceData.attributes && (
          <InfoCard
            name="Střelnice"
            Icon={() => <i>🎯</i>} // Replace with your actual Icon component
            value={`${strelniceData.attributes.nazev}, ${strelniceData.attributes.adresa}`}
            href={strelniceData.attributes.mapa}
            btnText="Zobrazit na mapě"
          />
        )}
  
        {/* Director and Main Referee */}
        {member.filter(({ pozice }) => pozice === "reditel_zavodu" || pozice === "hlavni_rozhodci").map((role) => (
          <InfoCard
            key={role.id}
            name={role.pozice === "reditel_zavodu" ? "Director" : "Main Referee"}
            Icon={() => <i>👤</i>} // Replace with your actual Icon component
            value={`${role.clen_klubu.data.attributes.jmeno} ${role.clen_klubu.data.attributes.prijmeni}`}
            href={`/contact/${role.clen_klubu.data.id}`}
            btnText="Contact Info"
          />
        ))}
  
        {/* Other Staff */}
        {member.filter(({ pozice }) => !["reditel_zavodu", "hlavni_rozhodci", "PHK"].includes(pozice)).map((staff) => (
          <InfoCard
            key={staff.id}
            name="Staff Member"
            Icon={() => <i>👥</i>} // Replace with your actual Icon component
            value={`${staff.clen_klubu.data.attributes.jmeno} ${staff.clen_klubu.data.attributes.prijmeni} (${staff.jina_pozice || 'Staff'})`}
            href={`/staff/${staff.clen_klubu.data.id}`}
            btnText="More Info"
          />
        ))}
      </div>
    );
  }
  
  export default Info;
/*

  {disciplina.map((disc) => (
    <InfoCard
      key={disc.id}
      name="Discipline"
      Icon={() => <i>🏅</i>} // Replace with your actual Icon component
      value={`${disc.disciplina.data.attributes.name} - ${disc.cena} CZK`}
      href="/disciplines"
      btnText="View Discipline"
    />
  ))}
*/