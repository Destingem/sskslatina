import SectionHeader from "../../../components/Universal/SectionHeader"
import parseMarkDown from "../../../lib/markdownHtml"
export default function Popis({ltext}){
   if(ltext){
    const { metadata, htmlContent } = parseMarkDown(ltext);
    return(
        <section>
            <SectionHeader mainText="O soutěži" subtitle="Popis soutěže" />
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </section>
    )
   }
}