import React, { useEffect, useState } from 'react'
import '../styles/drawer/drawer.scss'
import { ReactComponent as CircleClose } from '../assets/icons/circle-close.svg'
import { Button } from './Button';


export const DrawerModal = ({ size, show, setShow, title, footerAling, body, backgroundClose, footer }) => {

    const [showTitle, setShowTitle] = useState()

    const handleScroll = (e) => {
        let scrollTop = e.target.scrollTop
        if (scrollTop > 2) {
            setShowTitle(true)
        } else {
            setShowTitle(false)
        }
    }

    return (
        <>
            {show &&
                <>
                    <div className={`${show && 'background'}`} onClick={() => backgroundClose && setShow(!show)}></div>
                    <div className={`drawer ${size} ${show ? 'slide-in' : 'slide-out'}`}>
                        <div className={`drawer-title ${showTitle && 'scroll-title'}`}>
                            <div className='circle-close' onClick={() => setShow(!show)}>
                                <CircleClose></CircleClose>
                            </div>
                            {showTitle && <div className={`title ${showTitle && 'show-title'}`}> {title} </div>}
                        </div>
                        <div className='drawer-body' onScroll={handleScroll}>
                            {!showTitle && <div className='title'>{title}</div>}
                            {body}
                        </div>
                        <div className={`drawer-footer ${footerAling}`}>
                            {footer}
                        </div>
                    </div>
                </>
            }
        </>
    )
}
