import { Avatar, Badge, Text } from "@mantine/core"
import Link from "next/link"
import { FaPhone } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
export default function ShooterCard({ img, name, position, categories, href, device, color, bacolor, tel, mail, ic }) {
  return (
    <div
      style={
        device !== "m"
          ? {
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              backgroundColor: color ? color : "#F1FDE6",
              padding: "3vh 1vw",
            }
          : {
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              backgroundColor: color ? color : "#F1FDE6",
              padding: "3vh 5vw",
            }
      }
    >
      <Avatar size={"xl"} src={img} alt={name} />
      <div>
        <Text size="xl">{name}</Text>
        <Text component="em">{position}</Text>
      </div>
      <div style={{ display: "flex", gap: "1vw", flexWrap: "wrap" }}>
        {categories?.map((category, index) => (
          <Badge
            size="lg"
            color={bacolor ? bacolor : "teal"}
            style={device !== "m" ? {} : { marginTop: "1vh" }}
            key={index}
          >
            {category}
          </Badge>
        ))}
      </div>
      {tel || mail ? (
        <div style={{ minHeight: "fit-content", display: "flex", flexDirection: "column", gap: "1vh" }}>
          {tel && Array.isArray(mail) &&  tel?.map((phone, index)=> {
            return(
            <Text key={index} size="md" style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
              <FaPhone size={"1.25rem"} color={ic ? ic : "#15aabf"} />
              <a href={`tel:${phone.tel}`}>{phone.tel}</a>
            </Text>
          )
          })}
          {mail && Array.isArray(mail) && mail?.map((email, index)=> {
            return(
            <Text key={index} size="md" style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
              <IoMdMail size={"1.25rem"} color={ic ? ic : "#15aabf"} />
              <a href={`mailto:${email.mail}`}>{email.mail}</a>
            </Text>
          )
          })}
        </div>
      ) : (
        ""
      )}
    
      <Link href={href ? href : "#"} style={{ marginTop: "auto", paddingTop: "2vh" }}>
        <svg width="75" height="23" viewBox="0 0 75 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M63.7543 22.1932L61.2827 19.7322L67.7706 13.255H0.75V9.65412H67.7706L61.2827 3.16619L63.7543 0.715909L74.4929 11.4545L63.7543 22.1932Z"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  )
}
