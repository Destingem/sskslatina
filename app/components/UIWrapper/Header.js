"use client";
import useDevice from "/app/lib/useDevice.js";
import {
    Anchor,
    Box,
    Burger,
    Button,
    
    
    Center,
   
    Collapse,
    Divider,
    Drawer,
    Flex,
    Grid,
    Group,
    HoverCard,
    rem,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
  } from '@mantine/core';

  import { useDisclosure, useViewportSize } from '@mantine/hooks';
  import {BsFillPeopleFill} from "react-icons/bs";
  import {
    IconBook,
    IconChartPie3,
    IconChevronDown,
    IconCode,
    IconCoin,
    IconFingerprint,
    IconNotification,
  } from '@tabler/icons-react';
  import classes from "/styles/Header.module.css";
  import Logo from "/public/images/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import {header} from "/app/data/navData.js";

  
  export default function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
   
    function closeWithDelay(){
      setTimeout(() => {
        closeDrawer()
      }, 500);
    }
   
    const theme = useMantineTheme(); 
  
  const mainLinks = header?.desktop?.map(({label, path, items}, index) => {

    if(!items){
      return(
        <Link href={path} key={path + label} className={classes.link} style={{whiteSpace: "nowrap"}}>
                  {label}
                </Link>
                )
    }
    const links = items.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title} style={{}}>
     <Link href={item.path}>
     <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.label}
            </Text>
            <Text size="xs" c="dimmed">
              {item.desc}
            </Text>
          </div>
        </Group>
     </Link>
      </UnstyledButton>
    ));
    return(
      <HoverCard key={label + path} width={600} position="bottom" zIndex={10000} radius="md" shadow="md" withinPortal>
      <HoverCard.Target>
        <Link href={path} className={classes.link}>
          <Center inline>
            <Box component="span" mr={5} style={{whiteSpace: "nowrap"}}>
              {label}
            </Box>
            <IconChevronDown
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </Center>
        </Link>
      </HoverCard.Target>

      <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
        <Group justify="space-between" px="md">
          <Text fw={500}>{label}</Text>
          <Link style={{fontSize: "0.75rem", fontWeight: "600", color: "indigo"}} href={path} fz="xs">
            zobrazit {label}
          </Link>
        </Group>

        <Divider my="sm" />

        <SimpleGrid cols={2} spacing={0}>
          {links}
        </SimpleGrid>

        {/*
        <div className={classes.dropdownFooter}>
          <Group justify="space-between">
            <div>
              <Text fw={500} fz="sm">
                Get started
              </Text>
              <Text size="xs" c="dimmed">
                Their food sources have decreased, and their numbers
              </Text>
            </div>
            <Button variant="default">Get started</Button>
          </Group>
        </div> */}
      </HoverCard.Dropdown>
    </HoverCard>
    )
  });

//mobile links

const mobileLinks = header?.desktop?.map(({label, path, items}, index) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  if(!items){
    return(
      <Link href={path} key={path + label} className={classes.link} onClick={closeWithDelay} style={{whiteSpace: "nowrap"}}>
                {label}
              </Link>
              )
  }
  const links = items.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
   <Link href={item?.path} onClick={closeWithDelay}>
   <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.label}
          </Text>
          <Text size="xs" c="dimmed">
            {item.desc}
          </Text>
        </div>
      </Group>
   </Link>
    </UnstyledButton>
  ));
  return(
    <>
      <UnstyledButton className={classes.link} onClick={toggleLinks}>
    <Center inline>
      <Box component="span" mr={5}>
        {label}
      </Box>
      <IconChevronDown
        style={{ width: rem(16), height: rem(16) }}
        color={theme.colors.blue[6]}
      />
    </Center>
  </UnstyledButton>
  <Collapse in={linksOpened}>{links}</Collapse>
    </>
  )
});

  const device = useDevice(); // value can be "m", "t", "l"

  
    return (
      <Box pb={10} style={{zIndex: "2000", position: "sticky", top: 0,}}>
        <header className={classes.header} style={{ backdropFilter: "blur(16px)"}}>
          <Grid justify="center"  h="100%" align="center">
         <Grid.Col span={3}>
         <Link href="/" style={{display: "flex", justifyContent: "left", alignItems: "center", gap: "1vw", }}>
            <Image src={Logo} alt="Mantine logo" style={device !== "m" ? {objectFit: "contain", maxHeight: "5vh", maxWidth: "10%"} : {objectFit: "contain", maxHeight: "5vh",}} />
            <div>
              <Text style={{whiteSpace: "nowrap"}} fw={700}>SSK Slatina Brno</Text>
              <Text style={{whiteSpace: "nowrap"}} size="sm">Sportovně střelecký klub</Text>
            </div>
            </Link>
         </Grid.Col>
              {/* Desktop device */}
              { device !== "m" && <Grid.Col span={6}  style={{ padding: "0"}}>
           <div style={{display: "flex",alignItems: "center", justifyContent: "center", height: "100%"}}>{mainLinks}</div>
       
            
          
              </Grid.Col>}
  {/* Desktop device */}
<Grid.Col span={device == "m" ? 8 : 3} style={{alignItems: "center", display: "flex"}}>
<Group visibleFrom="sm" style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
<Link href="/souteze">
                
                <Button variant="default">Registrace závodníků</Button>
              </Link>
              <Link href="/eshop">
                
                <Button type="s" variant="filled" color={"indigo"}>Eshop</Button>
              </Link>
             
            </Group>
  
            <Burger style={{marginLeft: "auto", marginRight: "0vw", display: "flex", marginTop:"1vh"}} opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
</Grid.Col>
          </Grid>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="SSK Slatina Brno"
          hiddenFrom="sm"
          zIndex={100000}
          style={{zIndex: "100000"}}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            {mobileLinks}
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
            <Link href="/eshop">
                
                <Button variant="filled" c={"blue"}>Eshop</Button>
              </Link>
           
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }