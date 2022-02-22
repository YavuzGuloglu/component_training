import React, { useState } from 'react'
import { Button } from '../components/Button'
import { DrawerModal } from '../components/DrawerModal'
import { BackButton } from './BackButton'
import { Input } from '../components/Input'
import '../styles/input/input.scss'

export const DrawerModals = () => {

    const [show, setShow] = useState(false)
    const [text, setText] = useState()
    const [text2, setText2] = useState()

    const handleSave = () => {
        alert(text + ' ' + text2)
    }

    const footer = () => {
        return (
            <>
                <div className='button-right'>
                    <Button color="danger" size={'large'} onClick={() => setShow(!show)} text='Close'></Button>
                </div>
                <div>
                    <Button color={'success'} size={'large'} text='Save' onClick={() => handleSave()}></Button>
                </div>
            </>
        )
    }

    let array = 20
    const body = () => {
        return (
            <>
                <br></br>
                <Input type={'search'} label={'Text'} placeHolder={'Placeholder'} inputValue={text} setInputValue={setText} required={true}></Input>
                <br></br>
                <Input type={'search'} label={'Text 2'} placeHolder={'Placeholder'} inputValue={text2} setInputValue={setText2} required={true}></Input>
                {
                    Array.from(Array(array)?.keys())?.map(x => (
                        <div className='bodyDiv'> {x + 1}</div>
                    ))
                }
            </>
        )
    }

    return (
        <div>
            <BackButton />
            <div>
                <Button size={'large'} text='Click !' color='primary' onClick={() => setShow(!show)}></Button>
            </div>
            <DrawerModal size={'medium'} title="Başlık title" modalSize={'30%'} show={show} setShow={setShow} footerAling={'right'} handleSave={handleSave} backgroundClose footer={footer()} body={body()} />
        </div>
    )
}
