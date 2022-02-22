import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { ReactComponent as DownArrow } from '../assets/icons/down-arrow.svg'
import '../styles/selectInput/selectInput.scss'

export const SelectInput = ({ data, listSize }) => {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState()
    const [list, setList] = useState()
    const [newList, setNewList] = useState([])
    const [checkedState, setCheckedState] = useState([]);

    const ref = useRef()

    useEffect(() => {
        let filter = data.filter(x => x.text?.toLowerCase().includes(value?.toLowerCase())).slice(0, 50)
        setList(value ? filter : data && data?.slice(0, 50));
    }, [value, data])

    const handleChecked = (e) => {
        let checked = checkedState.some(x => x.key === e.key)
        if (checked) {
            setCheckedState(checkedState?.filter((x) => x.key !== e.key))
        } else {
            setCheckedState([...checkedState, { ...e, check2: true }])
        }
    }

    useEffect(() => {
        let a = []
        if (list) {
            a?.push(...checkedState, ...list)
        }
        setNewList(a)
    }, [checkedState, list])

    let checkList = newList?.filter(b => b.check2 === true).reverse()[0]

    return (
        <div className='out-div'>
            <div className={`select-div ${show && 'show-border'}`} onClick={() => setShow(!show)}>
                <div className='selected-value'>{checkedState?.length > 0 ? checkedState.map((x, i) => i === (checkedState.length - 1) ? x.value : x.value + ', ') : 'Kategori seçiniz'}</div>
                {checkedState?.length > 0 && <div className='selected-list-badge'><div className='oval'>{checkedState?.length}</div></div>}
                <div className='open-icon' ><DownArrow /></div>
            </div>
            {
                show &&
                <div className='selected-div' style={{ height: !!ref?.current?.getBoundingClientRect().height ? (ref?.current?.getBoundingClientRect().height + 13) * listSize : 55 * listSize }}>
                    <div className='searched-div'>
                        <Search className='search-icon'></Search>
                        <input type='search' className='input-div' placeHolder='Filtrele' onChange={e => setValue(e.target.value)}></input>
                    </div>
                    {!!checkedState?.length > 0 && <span className='selected-text'>Seçililer</span>}

                    {
                        newList && newList?.map((x, i) => (
                            <div key={i} id='mydiv' className={`list-div ${checkList?.key === x?.key && x.check2 && 'borderBottom'}`} ref={ref}>
                                <label className='checbox-label'>
                                    <input type="checkbox" id={x.key} value={x.value} className='checkbox-div' checked={checkedState.some(c => c.key === x.key)} onChange={(e) => handleChecked(x)} />
                                    <span>{x.text}</span>
                                </label>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}
