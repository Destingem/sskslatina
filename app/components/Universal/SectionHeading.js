import { Text, Title, rem } from "@mantine/core";

export default function SectionHeading({title, subtitle, c, order, size, children, ...props}){

    return(
        <div style={{display: "flex", flexDirection: "column", gap: "0.25vh"}}>
        <Text c="#434343" size={rem(20)}>{subtitle}</Text>
            <Title c={"#B40C04"} order={2} size={rem(48)}>{children}</Title>
        </div>
    )
}