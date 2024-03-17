"use client";
import { ActionIcon, Container, Group, rem, Text } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import classes from "/styles/Footer.module.css";
import {footer} from "/app/data/navData.js";
import Logo from "/public/images/logo.png"
import Image from 'next/image';
import Link from 'next/link';
const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

export default function Footer() {
  const groups = footer?.desktop?.map((group) => {
    const links = group?.items?.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.path}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.label}>
        <Text className={classes.title}>{group.label}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1vw"}}>
            <Image src={Logo} alt="Mantine logo" style={{objectFit: "contain", maxHeight: "10vh", maxWidth: "20%"}} />
            <div>
              <Text fw={700}>SSK Slatina Brno</Text>
              <Text size="sm">Sportovně střelecký klub</Text>
            </div>
            </div>
          <Text size="sm" c="dimmed" className={classes.description}>
          Jsme jihomoravský sportovně střelecký klub. Střílíme ze sportovních vzduchových a malorážních pušek pod Českým střeleckým svazem.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
       <Link href={"www.bytedev.cz"}>
       <Text c="dimmed" size="sm">
          © 2024 Byte development
        </Text>
       </Link>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
        <Link href={"www.facebook.com/sskslatinabrno0162"}>
        <ActionIcon size="xl" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Link>
        
          <Link href={"www.instagram.com/sskslatina/"}>
          <ActionIcon size="xl" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </Link>
         
          
        </Group>
      </Container>
    </footer>
  );
}