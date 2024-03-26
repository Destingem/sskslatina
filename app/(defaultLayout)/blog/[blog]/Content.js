"use client"
import parseMarkDown from "app/lib/markdownHtml"
import SectionHeader from "app/components/Universal/SectionHeader"
import { Carousel } from "@mantine/carousel"
import { ActionIcon, Card, Group, Image, Text, rem } from "@mantine/core"
import { Button } from "components/Button/Button"
import { MdArrowRight } from "react-icons/md"
import { HiArrowLongRight } from "react-icons/hi2"
export default function Content({ blog, device }) {
  console.log(blog)
  const { metadata, htmlContent } = parseMarkDown(blog?.attributes?.text)
  if (device == "m") {
    return (
      <div style={{ margin: "5vh 0", display: "flex", flexDirection: "column", gap: "4vh" }}>
        <section>
          <Carousel slideSize={"100%"} height={"50vh"} loop>
            {blog?.attributes?.galerie?.data?.map((photo, index) => {
              return (
                <Carousel.Slide key={index}>
                  <Image
                    src={"http://38.242.151.80:1340" + photo?.attributes?.url}
                    alt={photo?.attributes?.name}
                    fit="cover"
                  />
                </Carousel.Slide>
              )
            })}
          </Carousel>
        </section>
        <section>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </section>
        <section>
          <SectionHeader mainText="Soubory ke stažení" subtitle="Soubory" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5h" }}>
            {blog?.attributes?.soubory?.data.map((file) => (
              <div
                key={file.id}
                shadow="sm"
                padding="lg"
                style={{
                  backgroundColor: "#F1FDE6",
                  padding: "2vh 4vw",
                  display: "flex",
                  gap: "2vw",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Text weight={500} style={{ marginTop: 10 }}>
                    {file.attributes.name}
                  </Text>
                  <Text size="sm" style={{ color: "dimgray", marginBottom: 10 }}>{`Size: ${(
                    file.attributes.size / 1024
                  ).toFixed(2)} MB`}</Text>
                </div>
                <Group position="right">
                  <ActionIcon
                    radius={"xl"}
                    size={"xl"}
                    color="teal"
                    type="a"
                    component="a"
                    href={"http://38.242.151.80:1340" + file.attributes.url}
                    download
                  >
                    <HiArrowLongRight style={{ fontSize: rem(32) }} />
                  </ActionIcon>
                </Group>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <div style={{ margin: "5vh 0", display: "flex", flexDirection: "column", gap: "4vh" }}>
        <section>
          <Carousel slideSize={"66%"} height={"50vh"} loop>
            {blog?.attributes?.galerie?.data?.map((photo, index) => {
              return (
                <Carousel.Slide key={index}>
                  <Image
                    src={"http://38.242.151.80:1340" + photo?.attributes?.url}
                    alt={photo?.attributes?.name}
                    fit="cover"
                  />
                </Carousel.Slide>
              )
            })}
          </Carousel>
        </section>
        <section>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </section>
        <section>
          <SectionHeader mainText="Soubory ke stažení" subtitle="Soubory" />
          <div style={{ display: "flex" }}>
            {blog?.attributes?.soubory?.data.map((file) => (
              <div
                key={file.id}
                shadow="sm"
                padding="lg"
                style={{ maxWidth: 340, backgroundColor: "#F1FDE6", padding: "2vh 2vw", display: "flex", gap: "2vw" }}
              >
                <div>
                  <Text weight={500} style={{ marginTop: 10 }}>
                    {file.attributes.name}
                  </Text>
                  <Text size="sm" style={{ color: "dimgray", marginBottom: 10 }}>{`Size: ${(
                    file.attributes.size / 1024
                  ).toFixed(2)} MB`}</Text>
                </div>
                <Group position="right">
                  <ActionIcon
                    radius={"xl"}
                    size={"xl"}
                    color="teal"
                    type="a"
                    component="a"
                    href={"http://38.242.151.80:1340" + file.attributes.url}
                    download
                  >
                    <HiArrowLongRight style={{ fontSize: rem(32) }} />
                  </ActionIcon>
                </Group>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
}

/**
 import SectionHeader from "../../../components/Universal/SectionHeader"
import parseMarkDown from "../../../lib/markdownHtml"
export default function Popis({ltext}){
   if(ltext){
    const { metadata, htmlContent } = parseMarkDown(ltext);
    return(
        <section>
            <SectionHeader mainText="O soutěži" subtitle="Popis soutěže" />
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </section>
    )
   }
}
 */
