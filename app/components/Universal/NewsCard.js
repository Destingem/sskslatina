import { ActionIcon, Badge, Button, ButtonGroup, Chip, Group, Text, Title, Tooltip } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { MdLocationOn, MdDateRange } from "react-icons/md"

export default function NewsCard({ device, name, categories, date, desc, href, img, color }) {
  const router = useRouter()
  function redirect() {
    router.push(href)
  }
  
  const dateFrom = new Date(date?.from).toLocaleDateString("cs-CZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const dateTo = new Date(date?.to).toLocaleDateString("cs-CZ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  if (device == "m") {
    return (
     <div>
       <div style={{ backgroundColor: color ? color : "#FEE6E6", padding: "2vh 5vw 1vh 5vw" }}>
       <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "column" }}
          name="Name and Categories"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10vw" }}>
            <Title order={2} size={26}>
              {name}
            </Title>
            <Link href={href}>
              <svg width="75" height="23" viewBox="0 0 75 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M63.7543 22.1932L61.2827 19.7322L67.7706 13.255H0.75V9.65412H67.7706L61.2827 3.16619L63.7543 0.715909L74.4929 11.4545L63.7543 22.1932Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>

          <div style={{ display: "flex",  marginTop: "2vh", width: "100%", gap: "4vw", flexWrap: "wrap" }}>
            {categories?.map((category, index) => {
              let borderRadius = ""
              if (index == 0) {
                borderRadius = "0 6rem 6rem 0"
              } else if (index == categories.length - 1) {
                borderRadius = "6rem 0 0 6rem"
              }
              return (
               <Link key={category.href} href={category.href}>
               <Badge size="lg" key={index} color="teal" style={{ borderRadius: borderRadius }}>
                  {category.name}
                </Badge>
               </Link>
              )
            })}
          </div>
        </div>
        <div style={{marginTop: "2vh", marginBottom: "2vh"}}>
       <Text p={"0 0.5vw"} lh={"175%"} size="xl" fw={400}>
            {desc}
          </Text>
       </div>
       </div>
     <Link href={href}>
     <Button
      type="s"
              size="xl"
              variant="filled"
              color="green"
              radius="0"
              style={{width: "100%"}}
     >Číst dále</Button>
     </Link>
     </div>
    )
  } else {
    return (
      <div>
        <div style={{ backgroundColor: color ? color : "#FEE6E6", padding: "2vh 1vw 1vh 1vw" }}>
       <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          name="Name and Categories"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <Title order={2} size={24}>
              {name}
            </Title>
            <div style={{ display: "flex", gap: "0.5vw" }}>
              {categories?.map((category, index) => {
                let borderRadius = ""
                if (index == 0) {
                  borderRadius = "0 6rem 6rem 0"
                } else if (index == categories.length - 1) {
                  borderRadius = "6rem 0 0 6rem"
                }
                return (
                  <Link key={category.href} href={category.href}>
                  <Badge key={index} color="teal" style={{ borderRadius: borderRadius }}>
                    {category?.name}
                  </Badge>
                  </Link>
                )
              })}
            </div>
          </div>

          <Link href={href}>
            <svg width="75" height="23" viewBox="0 0 75 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M63.7543 22.1932L61.2827 19.7322L67.7706 13.255H0.75V9.65412H67.7706L61.2827 3.16619L63.7543 0.715909L74.4929 11.4545L63.7543 22.1932Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div style={{marginTop: "2vh", marginBottom: "2vh"}}>
        <Text p={"0 0.5vw"} lh={"175%"} size="xl" fw={400}>
            {desc}
          </Text>
          
        </div>
      
      </div>
      <Link href={href}>
     <Button
      type="s"
              size="xl"
              variant="filled"
              color="green"
              radius="0"
              style={{width: "100%"}}
     >Číst dále</Button>
     </Link>
      </div>
    )
  }
}
