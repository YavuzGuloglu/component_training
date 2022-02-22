import React from 'react'
import { SideTab } from '../components/SideTab'

export const MainPage = () => {
    const data = [
        { title: "Buttons", link: '/buttons' },
        { title: "Tabs", link: '/tabs' },
        { title: "Segments", link: '/segments' },
        { title: "ToastMessages", link: '/toastMessages' },
        { title: "Input", link: '/inputs' },
        { title: "DrawerModal", link: '/drawers' },
        { title: "SelectInput", link: '/selectInputs' },
        { title: "Table", link: '/tables' },
        { title: "ProductCard", link: '/productCards' },
        { title: "HelpCenter", link: '/helpCenter' },
    ]

    return (
        <div>
            <SideTab data={data} />
        </div>
    )
}
