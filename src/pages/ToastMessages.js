import React, { useState } from 'react'
import { Button } from '../components/Button'
import { ToastMessage } from '../components/ToastMessage'
import { BackButton } from './BackButton'
import { ReactComponent as Error } from '../assets/icons/error.svg'
import { ReactComponent as Success } from '../assets/icons/success.svg'
import { ReactComponent as Warning } from '../assets/icons/warning.svg'
import { ReactComponent as MEror } from '../assets/icons/alert-error.svg'
import { ReactComponent as MSuccess } from '../assets/icons/alert-success.svg'
import { ReactComponent as MWarning } from '../assets/icons/alert-warning.svg'
import { ReactComponent as MInfo } from '../assets/icons/alert-info.svg'

export const ToastMessages = () => {
    const [list, setList] = useState([])

    const toats = (value) => {
        let toast
        switch (value) {
            case 'error':
                toast = { id: list.length + 1, model: 'single', type: 'error', icon: <Error></Error>, mIcon: <MEror></MEror>, text: 'Bir sorun oluştu. Single ! ', description: 'Açıklama' }
                break;
            case 'errorMulti':
                toast = { id: list.length + 1, model: 'multi', type: 'error', icon: <Error></Error>, mIcon: <MEror></MEror>, text: 'Bir sorun oluştu. Multi ! ', description: 'Açıklama', link: 'https://www.tesodev.com/', linkName: 'Tesodev' }
                break;
            case 'info':
                toast = { id: list.length + 1, model: 'single', type: 'info', icon: <Error></Error>, mIcon: <MInfo></MInfo>, text: 'Bir sorun oluştu. Single ! ', description: 'Açıklama' }
                break;
            case 'infoMulti':
                toast = { id: list.length + 1, model: 'multi', type: 'info', icon: <Error></Error>, mIcon: <MInfo></MInfo>, text: 'Bir sorun oluştu. Multi ! ', description: 'Açıklama', link: 'https://www.tesodev.com/', linkName: 'Tesodev' }
                break;
            case 'success':
                toast = { id: list.length + 1, model: 'single', type: 'success', icon: <Success></Success>, mIcon: <MSuccess></MSuccess>, text: 'Bir sorun oluştu. Single ! ', description: 'Açıklama' }
                break;
            case 'successMulti':
                toast = { id: list.length + 1, model: 'multi', type: 'success', icon: <Success></Success>, mIcon: <MSuccess></MSuccess>, text: 'Bir sorun oluştu. Multi ! ', description: 'Açıklama', link: 'https://www.tesodev.com/', linkName: 'Tesodev' }
                break;
            case 'warning':
                toast = { id: list.length + 1, model: 'single', type: 'warning', icon: <Warning></Warning>, mIcon: <MWarning></MWarning>, text: 'Bir sorun oluştu. Single ! ', description: 'Açıklama' }
                break;
            case 'warningMulti':
                toast = { id: list.length + 1, model: 'multi', type: 'warning', icon: <Warning></Warning>, mIcon: <MWarning></MWarning>, text: 'Bir sorun oluştu. Multi ! ', description: 'Açıklama', link: 'https://www.tesodev.com/', linkName: 'Tesodev' }
                break;

            default:
                toast = []

        }
        setList([...list, toast])
    }

    return (
        <div>
            <BackButton />
            <h1>Primary</h1>
            <div className='bodyDiv'>
                <div><Button color="danger" text='Single Error Toast' onClick={() => toats('error')}></Button></div>
                <div><Button color="danger" text='Multi Error Toast' onClick={() => toats('errorMulti')}></Button></div>
                <div><Button color="tertiary" text='Single Info Toast' onClick={() => toats('info')}></Button></div>
                <div><Button color="tertiary" text='Multi Info Toast' onClick={() => toats('infoMulti')}></Button></div>
            </div>
            <h1>Success - Warning</h1>
            <div className='bodyDiv'>
                <div><Button color="success" text='Single Success Toast' onClick={() => toats('success')}></Button></div>
                <div><Button color="success" text='Multi Success Toast' onClick={() => toats('successMulti')}></Button></div>
                <div><Button color="primary" text='Single Warning Toast' onClick={() => toats('warning')}></Button></div>
                <div><Button color="primary" text='Multi Warning Toast' onClick={() => toats('warningMulti')}></Button></div>
            </div>

            <ToastMessage list={list} setList={setList}></ToastMessage>
        </div>
    )
} 