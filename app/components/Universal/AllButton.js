import { Text, rem } from "@mantine/core";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function AllButton({href, children, ...props}) {
    return(
        <Link href={href} {...props}>
        <div style={{display: "flex", gap: "2vw", alignItems: "center"}}>
            <Text size="lg" fw={600}>{children}</Text>
        <HiArrowLongRight style={{fontSize: rem(42), color: "#808080"}} />
        </div>
        </Link>
    )
}