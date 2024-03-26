"use client"

export default function SidloMapa({device}){

    return(
        <iframe
        title="Mapa klubu SSK Slatina Brno"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.1988828044628!2d16.6187346!3d49.196786599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294527afb2ef9%3A0xeb113385a562342e!2sSSK%20Slatina%20Brno!5e0!3m2!1scs!2scz!4v1710933200057!5m2!1scs!2scz"
           width="100%"
           height="450"
           style={device !== "m" ? { border: 0, maxWidth: "50%"} : { border: 0, marginTop: "3vh" }}
           allowfullscreen=""
           loading="lazy"
           referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
    )
}