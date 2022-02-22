import React from 'react'
import '../styles/tab/tab.scss'

export const Tab = ({ data, selected, setSelected }) => {

    const handleClick = (value) => {
        setSelected(value)
    }

    return (
        <div className='tab-main'>
            {
                data && data?.map((value, index) => (
                    <>
                        <div className={value?.id === selected ? 'tab-div-active' : 'tab-div'} onClick={() => handleClick(value?.id)}>
                            {value?.title}
                            {
                                value?.bubbleCount &&
                                <div className='tab-bubble'>
                                    {value?.bubbleCount}
                                </div>
                            }
                        </div>
                    </>
                ))
            }
        </div>
    )
}
