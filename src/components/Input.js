import React, { useState } from 'react'
import '../styles/input/input.scss'
import { ReactComponent as IconError } from '../assets/icons/error.svg'
import { ReactComponent as IconCheck } from '../assets/icons/check.svg'

export const Input = ({ inputValue, setInputValue, size, icon, required, disabled, type, data, placeHolder, label, labelAling, helperIcon, helperText, helperAling, leastValue, mostValue, tooltipArray }) => {
    const [selectedCountry, setSelectedCountry] = useState()

    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, "");
        if (phoneNumber?.length < 4) return phoneNumber;
        if (phoneNumber?.length < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
    }
    const [error, setError] = useState({})
    const [tooltip, setTooltip] = useState()

    const handleInput = (e) => {
        if (type === 'phone') {
            const formattedPhoneNumber = formatPhoneNumber(e.target.value);
            setInputValue(formattedPhoneNumber);
        } else if (type === 'tooltip') {
            setTooltip(true)
            if (e.target.value.length < 1)
                setTooltip(false)
            setInputValue(e.target.value);
        } else {
            setInputValue(e.target.value);
        }
        if (leastValue || mostValue) {
            if (leastValue - 1 >= e.target.value.length) {
                error.leastError = true
            }
            else { error.leastError = false }

            if (mostValue < e.target.value.length) {
                error.mostError = true
            }
            else { error.mostError = false }
            setInputValue(e.target.value);
        }
    };

    return (
        <div className='input'>
            {label && <div className={`label ${labelAling ? labelAling : ''}`}> <label>{label}</label></div>}

            {
                type === 'phone' ?
                    <>
                        {
                            selectedCountry?.code === 'TR' ?
                                <span className={`Icon country-select ${size}`}>{icon}</span>
                                :
                                <span className={`Icon ${size} country-select`}>{selectedCountry?.code}</span>
                        }
                        <select className={`phone-select ${size}`} onChange={(e) => setSelectedCountry(...data.filter(x => x.code === e.target.value))}>
                            {
                                data?.map((value, index) => (
                                    <option key={index} value={value?.code} dial_code={value?.dial_code}>{value?.name}</option>
                                ))
                            }
                        </select>
                    </>
                    :
                    icon &&
                    <span className={`Icon ${size}`} >{icon}</span>
            }
            {selectedCountry?.dial_code && <span className={`country-code-select  ${size}`} >{selectedCountry?.dial_code}</span>}
            <input
                type={'search'}
                className={`${disabled ? 'disabled-input' : `default-input`} ${type === 'phone' ? `phone-input ${selectedCountry?.dial_code && 'phone-code'}` : icon && ' pl'} ${size}`}
                placeholder={type === 'phone' ? `(___) ___ __ __` : `${placeHolder}`}
                required={required}
                value={inputValue}
                disabled={disabled}
                onChange={(e) => handleInput(e)} />
            {
                tooltip &&
                <>
                    <div className="arrow-left"></div>
                    <div className='hint-tooltip'>
                        {
                            tooltipArray?.map((x, i) => (
                                <div key={i} className='text-tooltip'>
                                    {
                                        x.isValid ?
                                            <IconCheck></IconCheck> : <div className="Oval"> </div>
                                    }
                                    <div className={`text-tooltip ${x.isValid ? 'text-solved' : ''}`}> {x.text} </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
            {
                (helperText || helperIcon) &&
                <div className={`helper-div ${helperAling ? helperAling : ''}`}>
                    <div className={`helper-div flex ${mostValue ? 'most-value' : ''}`}>
                        {
                            helperText &&
                            <label className={`helperText ${(error?.leastError || error?.mostError) ? 'error-text' : ''}`}>{helperText}</label>
                        }
                        {
                            mostValue &&
                            <label className={`helperText ${(error?.leastError || error?.mostError) ? 'error-text' : ''}`}>{inputValue?.length ? mostValue - inputValue?.length : 0}/{mostValue}</label>
                        }
                        {helperIcon && <span className={`helperIcon`}>{(error?.leastError || error?.mostError) ? <IconError></IconError> : helperIcon} </span>}
                    </div>
                </div>
            }
        </div>
    )
}