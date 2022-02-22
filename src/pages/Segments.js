import React, { useState } from 'react'
import { Segment } from '../components/Segment'
import { BackButton } from './BackButton'

export const Segments = () => {
    const data = [
        { id: 1, title: "Value-1" },
        { id: 2, title: "Value-2 value Value" },
        { id: 3, title: "Value-3" },
    ]

    const [select, setSelect] = useState()

    return (
        <div>
            <BackButton />
            <Segment data={data} setSelect={setSelect} />
            <p> {select} </p>
        </div>
    )
}
