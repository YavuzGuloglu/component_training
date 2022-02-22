import React, { createRef, useEffect, useRef, useState } from 'react'
import '../styles/segment/segment.scss'

export const Segment = ({ data, size, fluid, setSelect }) => {

    const [selected, setSelected] = useState()
    const elementRef = useRef()
    const [elRefs, setElRefs] = useState([]);
    const [slct, setSlct] = useState()

    const handClick = (value) => {
        setSelect(value?.title ? value?.title : '')
    }

    useEffect(() => {
        setElRefs(elRefs => (
            Array(data?.length).fill().map((_, i) => elRefs[i] || createRef())
        ));
    }, [data?.length]);

    useEffect(() => {
        setSlct(elRefs[selected ? selected : 0]?.current?.getBoundingClientRect())
    }, [elRefs, selected])

    return (
        <div>
            <div className={`seg-div ${fluid === true && 'fluid'}`} ref={elementRef}>
                {
                    data && data?.map((value, index) => (
                        <>
                            <div key={index} className={`seg-button ${size}`} onClick={() => { handClick(value); setSelected(index) }} ref={elRefs[index]}>
                                <span className='seg-text'>{value?.title}</span>
                            </div>
                        </>)
                    )
                }
                <div className={`seg-button active ${size}`}
                    style={{
                        width: `calc(${slct?.width}px )`,
                        transform: `translateX(${slct?.x - elementRef?.current?.getBoundingClientRect()?.x - 3}px)`,
                    }}>
                </div>
            </div>
        </div >
    )
}


