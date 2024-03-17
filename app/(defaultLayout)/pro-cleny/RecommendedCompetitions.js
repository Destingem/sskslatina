
import SectionHeader from "../../components/Universal/SectionHeader";

import { useState } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  Button,
  ScrollAreaAutosize,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './TableSort.module.css';
import zavody from '../../../public/dummyData/processed_file.json';
import Link from "next/link";

var competitionData = JSON.parse(JSON.stringify(zavody).replace("�", ""));
competitionData.splice(0, 1);
function Th({ children, reversed, sorted, onSort } ){

  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(competitionData, search) {
  const query = search.toLowerCase().trim();
  return competitionData.filter((item) =>
    keys(competitionData[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  competitionData,
  payload
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(competitionData, payload.search);
  }

  return filterData(
    [...competitionData].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    name: 'Athena Weissnat',
    company: 'Little - Rippin',
    email: 'Elouise.Prohaska@yahoo.com',
  },
  {
    name: 'Deangelo Runolfsson',
    company: 'Greenfelder - Krajcik',
    email: 'Kadin_Trantow87@yahoo.com',
  },

];

export default function RecommendedCompetitions({id, profiles, device}) {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(competitionData);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(competitionData, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(competitionData, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.URL}>
      <Table.Td style={{fontSize: "1.5rem"}}>{row?.NAZEV}</Table.Td>
      <Table.Td>{row?.KATEGORIE}</Table.Td>
      <Table.Td>{row["DATUM OD"]}</Table.Td>
      <Table.Td>{row["DATUM DO"]}</Table.Td>
      <Table.Td>{row.PORADATEL}</Table.Td>
      <Table.Td>{row.DISCIPLINY}</Table.Td>
      <Table.Td>{row["KLUB CISLO"]}</Table.Td>
      <Table.Td>{row.MESTO}</Table.Td>
      <Table.Td>{row["REGISTRACE DO"]}</Table.Td>
      <Table.Td><Link href={row.URL}><Button type="s" >Detail</Button></Link></Table.Td>
    </Table.Tr>
  ));

  return (
    <section id={id} style={{maxWidth: "100%"}}>
    <SectionHeader mainText="Doporučené závody" subtitle="Závody, kterých byste se měli zúčastnit"></SectionHeader>
    <ScrollAreaAutosize style={{maxHeight: "90vh"}}>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={search}
        style={{position: "sticky", top: "1%", backgroundColor: "#fff",  zIndex: 1000}}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="auto">
        <Table.Tbody style={{position: "sticky", top: "8%", backgroundColor: "#fff", zIndex: 1000}}>
          <Table.Tr>
            <Th
              sorted={sortBy === 'NAZEV'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('NAZEV')}
              style={{whitespace: "nowrap"}}
            >
              Název
            </Th>
            <Th
              sorted={sortBy === 'KATEGORIE'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('KATEGORIE')}
            >
             Kategorie
            </Th>
            <Th
              sorted={sortBy === 'DATUM OD'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('DATUM OD')}
              
            >
              Datum od
            </Th>
            <Th
              sorted={sortBy === 'DATUM DO'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('DATUM DO')}
            >
             Datum do
            </Th>
            <Th
              sorted={sortBy === 'PORADATEL'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('PORADATEL')}
            >
             Pořadatel
            </Th>
            <Th
             sorted={sortBy === 'DISCIPLINY'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('DISCIPLINY')}
            >
             Disciplíny
            </Th>
            <Th
              sorted={sortBy === "KLUB CISLO"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("KLUB CISLO")}
            >
             Číslo klubu
            </Th>
            <Th
              sorted={sortBy === 'MESTO'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('MESTO')}
            >
             Město
            </Th>
            <Th
              sorted={sortBy === 'REGISTRACE DO'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('REGISTRACE DO')}
            >
             Registrace do
            </Th>
            <Th>
              Detail
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(competitionData[0]).length}>
                <Text fw={500} ta="center">
                  Nebyl nalezen žádný závod
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollAreaAutosize>
    </section>
  );
}