import React, { useEffect, useState } from 'react'
import { Input } from '../components/Input'
import { BackButton } from './BackButton'
import { ReactComponent as LockPassword } from '../assets/icons/lock-password.svg'
import { ReactComponent as TR } from '../assets/icons/tr.svg'
import { ReactComponent as Info } from '../assets/icons/info.svg'

import axios from 'axios'

export const Inputs = () => {

    const [state, setState] = useState()
    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries/codes')
            .then(({ data }) => {
                setState(data?.data)
            })
    }, [])

    const tooltipArray = [
        { text: 'Numara', isValid: inputValue?.match(/\d/i) },
        { text: 'Büyük harf', isValid: inputValue?.match(/[A-Z]/) },
        { text: '3 karakter', isValid: inputValue?.trim().length >= 3 },
        { text: '6 karakter', isValid: inputValue?.trim().length >= 6 },
    ]

    return (
        <div>
            <BackButton />
            <h1>Input</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'search'} placeHolder="placeHolder" size={'large'} required={true}></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'search'} placeHolder="placeHolder" size={'default'} required={true}></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'search'} placeHolder="placeHolder" size={'small'} required={true}></Input>
            </div>
            <h1>Disabled</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} size={'large'} placeHolder="placeHolder" disabled={true}></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} size={'default'} placeHolder="placeHolder" disabled={true}></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} size={'small'} placeHolder="placeHolder" disabled={true}></Input>
            </div>
            <h1>Icon</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'search'} placeHolder="placeHolder" size={'large'} icon={<LockPassword></LockPassword>} required={true} ></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'search'} placeHolder="placeHolder" size={'default'} required={true} icon={<LockPassword></LockPassword>} ></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'search'} placeHolder="placeHolder" size={'small'} required={true} icon={<LockPassword></LockPassword>}></Input>
            </div>
            <h1>GSM</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} data={state} placeHolder="placeHolder" icon={<TR></TR>} type={'phone'} size={'large'} required={true} ></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} data={state} placeHolder="placeHolder" icon={<TR></TR>} type={'phone'} size={'default'} required={true}  ></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} data={state} placeHolder="placeHolder" icon={<TR></TR>} type={'phone'} size={'small'} required={true} ></Input>
            </div>
            <h1>Label + Helper Text</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" helperText="helperText"></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" labelAling='right' helperText="helperText"></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" helperText="helperText" helperAling="right"></Input>
            </div>
            <h1>Helper Text + Icon</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" helperText="helperText" helperIcon={<Info></Info>} ></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" labelAling='right' helperText="helperText" helperIcon={<Info></Info>} helperAling="right"></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" leastValue={3} helperText="en az 3 değer giriniz." helperIcon={<Info></Info>} ></Input>
            </div>
            <h1>Helper Text + mostValue</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" mostValue={10} helperText="10 karakteri geçmeyiniz !" ></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" mostValue={5} helperText="5 karakteri geçmeyiniz !" ></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} placeHolder="placeHolder" type={'search'} size={'large'} required={true} label="Label" mostValue={140} helperText="140 karakteri geçmeyiniz !" ></Input>
            </div>
            <h1>Tooltip</h1>
            <div className='bodyDiv'>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'tooltip'} placeHolder="placeHolder" size={'large'} tooltipArray={tooltipArray}></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'tooltip'} placeHolder="placeHolder" size={'large'} tooltipArray={tooltipArray}></Input>
                <Input inputValue={inputValue} setInputValue={setInputValue} type={'tooltip'} placeHolder="placeHolder" size={'large'} tooltipArray={tooltipArray}></Input>
            </div>
        </div>

    )
}
