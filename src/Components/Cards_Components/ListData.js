import React from 'react'

import Down from '@material-ui/icons/ArrowDropDown';
import Up from '@material-ui/icons/ArrowDropUp';

const data = [
    {
        title: "ALL",
        path: "/all",
        up: <Up />,
        down: <Down />,
    },

    {
        title: "OFFICE STATIONARY",
        path: "#",
        up: <Up />,
        down: <Down />,

        subMenu: [
            {
                title: "Badges",
                path: "/badges"
            },
            {
                title: "Business Card",
                path: "/business_Card"
            },
            {
                title: "Letterhead",
                path: "/letterhead"
            },
            {
                title: "Envelopes",
                path: "/envelopes"
            },
            {
                title: "Pen",
                path: "/pen"
            },
            {
                title: "Badges",
                path: "/badges"
            },
            {
                title: "PVC/RFID Cards",
                path: "/pvc"
            },
            {
                title: "File Folders",
                path: "/file_folders"
            },
            {
                title: "Notebook",
                path: "/notebook"
            },
            {
                title: "Tissue Boxes",
                path: "/tissue_boxes"
            },
        ]
    },

    {
        title: "WEDDINGS",
        path: "#",
        up: <Up />,
        down: <Down />,

        subMenu: [
            {
                title: "Wedding Cards",
                path: "/wedding_cards"
            },
            {
                title: "Favour/Bidd Box",
                path: "/favour"
            },
            {
                title: "Wedding Cards with Envelops",
                path: "/Wedding_with_envelops"
            },
            {
                title: "Ribbons",
                path: "/ribbons"
            },
        ]
    },

    {
        title: "CLOTHING BAGS & BOXES",
        path: "#",
        up: <Up />,
        down: <Down />,

        subMenu: [
            {
                title: "T-Shirts",
                path: "/tshirts"
            },
            {
                title: "Caps",
                path: "/caps"
            },
            {
                title: "Shopping Bags",
                path: "/shopping_bags"
            },
            {
                title: "Goodie Bags",
                path: "/goodie_bags"
            },
        ]
    },

    {
        title: "PROMOTIONAL ITEMS",
        path: "#",
        up: <Up />,
        down: <Down />,

        subMenu: [
            {
                title: "USB",
                path: "/usb"
            },
            {
                title: "Mugs",
                path: "/mugs"
            },
            {
                title: "Key Chains",
                path: "/key_chains"
            },
            {
                title: "Pen",
                path: "/pen"
            },
        ]
    },

    {
        title: "BUSINESS CARDS",
        path: "/business_cards",
        up: <Up />,
        down: <Down />,
    },

    {
        title: "MARKETING MATERIAL",
        path: "#",
        up: <Up />,
        down: <Down />,

        subMenu: [
            {
                title: "Flyers",
                path: "/flyers"
            },
            {
                title: "Brochure",
                path: "/brochure"
            },
            {
                title: "Flex Standee",
                path: "/Flex_standee"
            },
            {
                title: "Certificates",
                path: "/certificates"
            },
        ]
    },

    {
        title: "BUNDLES",
        path: "#",
        up: <Up />,
        down: <Down />,

        subMenu: [
            {
                title: "Stationary Bundle",
                path: "/stationary_bundle"
            },
            {
                title: "Wedding Bundle",
                path: "/wedding_bundle"
            },
            {
                title: "Baby Shower Bundle",
                path: "/Baby Shower Bundle"
            },
        ]
    },


]


export {data};