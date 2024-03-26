"use client";

import { Badge, Title } from '@mantine/core';

export default function Kategorie({ disciplina }) {
  return (
    <div style={{minWidth: "30vw", display: "flex", flexDirection: "column"}}>
      <h2>Disciplíny</h2>
      {disciplina.map((disc, discIndex) => (
        <div key={disc.id} style={{ marginBottom: '1rem', width: "100%" }}>
          <div style={{ backgroundColor: '#D6F9B3', padding: '0.5rem', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Title order={3} style={{  }}>{disc.disciplina.data.attributes.name}</Title>
            <p style={{ margin: '0 0.5rem' }}>{disc.cena} CZK</p>
          </div>
          <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2vh', marginBottom: "2vh"}}>
            {disc.kategories.data.map((kat, katIndex) => {
              let borderRadius = "";
              if (katIndex === 0) {
                borderRadius = "0 6rem 6rem 0";
              } else if (katIndex === disc.kategories.data.length - 1) {
                borderRadius = "6rem 0 0 6rem";
              }
              return (
                <Badge size='xl' key={kat.id} color="teal" style={{ borderRadius: borderRadius, padding: '0 1vw' }}>
                  {kat.attributes.nazev}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
