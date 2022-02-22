import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const SideTab = ({ data }) => {
    return (
        <div className='sideTab-main'>
            {
                data && data?.map((value, index) => (
                    <>
                        <Link key={index} className='sideTab-div' to={`${value?.link ? value?.link : '/'}`}>
                            <div className='sideTab-title' >
                                {value?.title}
                            </div>
                        </Link>
                    </>
                ))
            }
        </div>
    )
}
