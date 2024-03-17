import { BsFillPeopleFill } from "react-icons/bs";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmojiEvents, MdEventNote } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { IoIosPaper } from "react-icons/io";
export const header = {

    desktop: [
        {label: "Domů", path: "/"},
        {label: "O nás", path: "/o-nas", items: [
            {label: "Členové klubu", path: "/o-nas/clenove-klubu", icon: BsFillPeopleFill, desc: "Kdo se stará o naše střelce"},
            {label: "Naši střelci", path: "/o-nas/nasi-strelci", icon: BsFillPeopleFill, desc: "Kdo reprezentuje náš klub"},
        ]},
        {label: "Pro členy", path: "/pro-cleny", items: [
            {label: "Informace", path: "/pro-cleny/informace", icon: FaInfoCircle, desc: "Informace pro naše členy"},
            {label: "Profil", path: "/pro-cleny/profil", icon: IoPersonSharp, desc: "Profily našich střelců"},
            {label: "Tréninkové podklady", path: "/pro-cleny/treninkove-podklady", icon: SiGoogledocs, desc: "Tréninkové podklady"},

        ]},
        {label: "Pro zájemce", path: "/pro-zajemce"},
        {label: "Naše soutěže", path: "/souteze", items: [
            {label: "Nadchazející soutěže", path: "/souteze", icon: MdEventNote, desc: "Informace a reghistrace do našich soutěží"},
            {label: "Výsledky soutěží", path: "/souteze/vysledky", icon: MdEmojiEvents, desc: "Výsledky našich soutěží"},
        ]},
        {label: "Blog", path: "/blog", items: [
            {label: "Všechny příspěvky", path: "/blog1", icon: IoIosPaper, desc: ""},
            {label: "Všechny kategorie", path: "/blog2", icon: BiSolidCategory, desc: ""},
            {label: "Blog 3", path: "/blog3", icon: GoDotFill, desc: ""},
        ]},
        {label: "Eshop", path: "/eshop", items: [
            {label: "Všechny produkty", path: "/eshop1", icon: FaShoppingCart, desc: ""},
            {label: "Všechny kategorie", path: "/eshop2", icon: BiSolidCategory, desc: ""},
            {label: "Eshop 3", path: "/eshop3", icon: "p", desc: ""},
        ]},
        {label: "Kontakt", path: "/kontakt"},
    ],
    mobile: {},
}

export const footer = {

    desktop: [
    
        {label: "O nás", path: "/o-nas", items: [
            {label: "Členové klubu", path: "/o-nas/clenove-klubu"},
            {label: "Naši střelci", path: "/o-nas/nasi-strelci"},
        ]},
        {label: "Pro Členy", path: "/pro-cleny", items: [
            {label: "Informace", path: "/pro-cleny/informace"},
            {label: "Profil", path: "/pro-cleny/profil"},
            {label: "Tréninkové podklady", path: "/pro-cleny/treninkove-podklady"},

        ]},
    
        {label: "Naše soutěže", path: "/souteze", items: [
            {label: "Nadchazející soutěže", path: "/souteze"},
            {label: "Výsledky soutěží", path: "/souteze/vysledky"},
        ]},
        {label: "Blog", path: "/blog", items: [
            {label: "Všechny příspěvky", path: "/blog1"},
            {label: "Všechny kategorie", path: "/blog2"},
            {label: "Blog 3", path: "/blog3"},
        ]},
        {label: "Eshop", path: "/eshop", items: [
            {label: "Všechny produkty", path: "/eshop1"},
            {label: "Všechny kategorie", path: "/eshop2"},
            {label: "Eshop 3", path: "/eshop3"},
        ]},
        
    ],
    mobile: {},
}