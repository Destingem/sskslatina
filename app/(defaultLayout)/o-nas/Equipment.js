
import { Text } from "@mantine/core";
import SectionHeader from "../../components/Universal/SectionHeader";

export default function Equipment({id, device}) {

    return(
        <section id={id} style={device !== "m" ? {maxWidth: "50%"} : {}}>
        <SectionHeader mainText="Vybavení a zázemí" subtitle=""></SectionHeader>
        <Text size="xl" lh={"200%"}>
        Pellentesque massa venenatis leo proin elit. Facilisi consectetur magna viverra dolor faucibus venenatis magna amet arcu. Integer varius tincidunt et nunc mi ipsum at pellentesque. Cras iaculis in est elit. Sit purus vel eu aenean.
        </Text>
        </section>
    )
}