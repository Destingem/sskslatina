"use client"

export default function Wrapped({children, device}) {
    return(
        <main style={device !== "m" ? {display: "flex", justifyContent: "space-between"} : {display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
            {children}
        </main>
    )
}