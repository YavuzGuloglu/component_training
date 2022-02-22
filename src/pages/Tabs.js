import React, { useState } from 'react'
import { Tab } from '../components/Tab'
import { BackButton } from './BackButton'

export const Tabs = () => {
    const [selected, setSelected] = useState()

    const data = [
        { id: 1, title: "Tab-1" },
        { id: 2, title: "Tab-2" },
        { id: 3, title: "Tab-3" },
        { id: 4, title: "Tab-4", bubbleCount: 6 },
        { id: 5, title: "Tab-5", bubbleCount: 4 },
    ]
    return (
        <div>
            <BackButton />
            <Tab data={data} selected={selected} setSelected={setSelected}></Tab>
            <p>{selected && `Chosen ${selected}`}</p>
        </div>
    )
}
