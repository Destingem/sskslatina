import { ActionIcon, Badge, Button, ButtonGroup, Chip, Group, Text, Title, Tooltip } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { MdLocationOn, MdDateRange } from "react-icons/md"

export default function CompetitionCard({ device, name, categories, location, date, desc, href }) {
  const router = useRouter()
  function redirect() {
    router.push(href)
  }
  let calendarLink = () => {
    const dateFormat = (dateStr) => dateStr.replace(/-/g, "") + "T000000Z"

    let calLink = "https://www.google.com/calendar/render?action=TEMPLATE"

    calLink += "&text=" + encodeURIComponent(name)
    calLink += "&dates=" + dateFormat(date?.from)
    calLink += "/" + dateFormat(date?.to)
    calLink +=
      "&details=" + encodeURIComponent(desc + " \nPodrobnosti o závodu najdete na: " + "www.sskslatina.cz" + href)
    calLink += "&location=" + encodeURIComponent(location?.name + ", " + location?.adress + "\n Mapa: " + location?.url)

    return calLink
  }
  calendarLink = calendarLink()
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
         <div style={{ backgroundColor: "#F5F5F5", padding: "2vh 5vw 1vh 5vw" }}>
        <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "column" }}
          name="Name and Categories"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10vw" }}>
            <Title order={2} size={32}>
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
                <Badge size="lg" key={index} color="teal" style={{ borderRadius: borderRadius }}>
                  {category}
                </Badge>
              )
            })}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", padding: "2vh 0", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25vw" }}>
              <ActionIcon size="xl" color="red" variant="transparent" style={{ fontSize: "2.25rem" }}>
                <MdLocationOn />
              </ActionIcon>
              <Text size="lg" fw={500}>
                {location?.name + ", " + location?.adress}
              </Text>
            </div>
            <Link href={location?.url}>
              {" "}
              <Text c={"#B40C04"} size="lg" fw={700}>
                MAPA
              </Text>
            </Link>
          </div>
          {/* Kalendář */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25vw" }}>
              <ActionIcon size="xl" color="red" variant="transparent" style={{ fontSize: "2.25rem" }}>
                <MdDateRange />
              </ActionIcon>
              <Text size="lg" fw={500}>
                {dateFrom + " - " + dateTo}
              </Text>
            </div>
            <Link href={calendarLink}>
              {" "}
              <Text c={"#B40C04"} size="lg" fw={700}>
                KALENDÁŘ
              </Text>
            </Link>
          </div>
          <Text p={"0 0.5vw"} lh={"175%"} size="xl" fw={400}>
            {desc}
          </Text>
          
        </div>
      
      </div>
      <ButtonGroup style={{width: "100%"}}>
            <Button
              onClick={() => {
                redirect("a" + href + "#registrace")
              }}
              type="s"
              size="xl"
              variant="filled"
              color="green"
              radius="0"
              style={{width: "100%"}}
            >
              Registrace
            </Button>
            <Button
              onClick={() => {
                redirect(href)
              }}
              type="s"
              size="xl"
              variant="outline"
              color="green"
              radius="0"
              style={{width: "100%"}}
            >
              Více
            </Button>
          </ButtonGroup>
     </div>
    )
  } else {
    return (
      <div style={{ backgroundColor: "#F5F5F5", padding: "2vh 1vw 1vh 1vw" }}>
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
                  <Badge key={index} color="teal" style={{ borderRadius: borderRadius }}>
                    {category}
                  </Badge>
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

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", padding: "2vh 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25vw" }}>
              <ActionIcon size="xl" color="red" variant="transparent" style={{ fontSize: "2.25rem" }}>
                <MdLocationOn />
              </ActionIcon>
              <Text size="lg" fw={500}>
                {location?.name + ", " + location?.adress}
              </Text>
            </div>
            <Link href={location?.url}>
              {" "}
              <Text c={"#B40C04"} size="lg" fw={700}>
                MAPA
              </Text>
            </Link>
          </div>
          {/* Kalendář */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25vw" }}>
              <ActionIcon size="xl" color="red" variant="transparent" style={{ fontSize: "2.25rem" }}>
                <MdDateRange />
              </ActionIcon>
              <Text size="lg" fw={500}>
                {dateFrom + " - " + dateTo}
              </Text>
            </div>
            <Link href={calendarLink}>
              {" "}
              <Text c={"#B40C04"} size="lg" fw={700}>
                KALENDÁŘ
              </Text>
            </Link>
          </div>
          <Text p={"0 0.5vw"} lh={"175%"} size="xl" fw={400}>
            {desc}
          </Text>
          <ButtonGroup>
            <Button
              onClick={() => {
                redirect("a" + href + "#registrace")
              }}
              type="s"
              size="lg"
              variant="filled"
              color="green"
              radius="xs"
            >
              Registrace
            </Button>
            <Button
              onClick={() => {
                redirect(href)
              }}
              type="s"
              size="lg"
              variant="outline"
              color="green"
              radius="sm"
            >
              Více o závodu{" "}
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}
