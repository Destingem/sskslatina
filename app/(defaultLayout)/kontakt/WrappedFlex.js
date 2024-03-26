"use client";

export default function WrappefFlex({children, device}){

    return(
        <div style={device !== "m" ? {display: "flex", justifyContent: "space-between", alignItems: "center"} : {display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column"}}>
            {children}
        </div>
    )
}