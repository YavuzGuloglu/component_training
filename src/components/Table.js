import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../styles/table/table.scss'
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { BackButton } from '../pages/BackButton'
import Pagination from './Pagination'
const createHeaders = (headers) => {
    return headers.map((item) => ({
        ...item,
        ref: useRef()
    }));
};
export const Table = ({ data, tableHeader, pageTitle, search, children, listQuantity }) => {
    const [value, setValue] = useState()
    const [list, setList] = useState()
    const [totalData, setTotalData] = useState()
    const [page, setPage] = useState(1);
    const [checkedState, setCheckedState] = useState([]);
    const columns = createHeaders(tableHeader);

    let secondValue = page * listQuantity
    let firstValue = secondValue - listQuantity

    const handleChecked = (e) => {
        let checked = checkedState.some(x => x.checkedKey === e.id)
        if (checked) {
            setCheckedState(checkedState?.filter((x) => x.checkedKey !== e.id))
        } else {
            setCheckedState([...checkedState, { checkedList: e.discountName, checkedKey: e.id }])
        }
    }

    useEffect(() => {
        if (value) {
            let lengthValue = data?.discounts.filter((x, index) => (
                x?.id?.toLowerCase().includes(value?.toLowerCase()) ||
                x?.discountName?.toLowerCase().includes(value?.toLowerCase()) ||
                x?.includedMerchants[0]?.name?.toLowerCase().includes(value?.toLowerCase())))
            setList(lengthValue?.slice(firstValue, secondValue))
            setTotalData(lengthValue?.length)
        } else {
            setList(data?.discounts?.slice(firstValue, secondValue))
            setTotalData(data?.discounts?.length)
        }
        setAllChecked(false)
    }, [value, data, page])

    const [allChecked, setAllChecked] = useState(false)

    const handleAllChecked = (e) => {
        setAllChecked(!allChecked)
        let data = []
        if (e.target.checked) {
            list?.forEach(element => {
                data.push({ checkedList: element.discountName, checkedKey: element.id })
            });
            setCheckedState([...checkedState, ...data])
        } else {
            setCheckedState([])
        }
    }

    // ------- RESİZE --------

    const [activeIndex, setActiveIndex] = useState(null);
    const tableElement = useRef()

    const minCellWidth = 120;

    const mouseDown = (index) => {
        setActiveIndex(index);
    };

    const mouseMove = useCallback(
        (e) => {
            const gridColumns = columns.map((col, i) => {
                if (i === activeIndex) {
                    const width = e.clientX - col.ref.current.offsetLeft;

                    if (width >= minCellWidth) {
                        return `${width}px`;
                    }
                }
                return `${col.ref.current.offsetWidth}px`;
            });
            tableElement.current.style.gridTemplateColumns = `${gridColumns.join(" ")}`;
        },
        [activeIndex, columns, minCellWidth]
    );

    const removeListeners = useCallback(() => {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", removeListeners);
    }, [mouseMove]);

    const mouseUp = useCallback(() => {
        setActiveIndex(null);
        removeListeners();
    }, [setActiveIndex, removeListeners]);

    useEffect(() => {
        if (activeIndex !== null) {
            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("mouseup", mouseUp);
        }

        return () => {
            removeListeners();
        };
    }, [activeIndex, mouseMove, mouseUp, removeListeners]);

    const ref = useRef()
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <>
            <BackButton />
            <div className='top-div'>
                <div> <h3>{pageTitle}</h3></div>
                <div className='d-flex'>
                    {search &&
                        <div>
                            <div className='icon-search'><Search></Search> </div>
                            <input type='search' className='search-div' placeHolder='Filtrele' onChange={e => setValue(e.target.value)}></input>
                        </div>
                    }
                    {children && <div className='margin-left'>{children} </div>}
                </div>
            </div>
            <div className='scroll-flex'>
                <div className='scroll-arrow' onClick={() => scroll(-100)}>{"<"}</div>
                <div className='scroll-arrow' onClick={() => scroll(100)}>{">"}</div>
            </div>

            <div className="table-wrapper" ref={ref}>
                <table className="table" ref={tableElement} >
                    <thead>
                        <tr>
                            {
                                columns.map((item, index) => (
                                    <th className={list?.length === 0 ? 'value-null' : index === 0 && 'd-flex'} ref={item.ref} key={index}>
                                        {index === 0 && (
                                            <input
                                                type="checkbox"
                                                id={item?.id}
                                                value={item?.discountName}
                                                className='checkbox-input'
                                                checked={allChecked}
                                                onChange={(e) => handleAllChecked(e)} />
                                        )}
                                        {item?.title}
                                        <div
                                            style={{ height: tableElement?.current?.offsetHeight }}
                                            onMouseDown={() => mouseDown(index)}
                                            className={`resize-handle ${activeIndex === index ? 'active' : 'idle'}`}
                                        />
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((item, index) => (
                                <tr key={index} onClick={() => handleChecked(item)}>
                                    {
                                        tableHeader.map((col, i) => (
                                            <td key={col.key} className={checkedState.some(c => c.checkedKey === item.id) && 'selected-table'}>
                                                {i === 0 && (
                                                    <input
                                                        type="checkbox"
                                                        id={item?.id}
                                                        value={item?.discountName}
                                                        className='checkbox-input'
                                                        checked={checkedState.some(c => c.checkedKey === item.id)}
                                                        onChange={(e) => handleChecked(item)} />
                                                )}
                                                {col.render ? (
                                                    <span>{col.render(item[col.name])}</span>
                                                ) : (
                                                    <span>{item[col.name]}</span>
                                                )}
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='table-footer'>
                <div><b>{data?.discounts?.length}</b> indirimden <b>{firstValue + 1} - {secondValue > data?.discounts?.length ? data?.discounts?.length : secondValue}</b> arasını görüntülüyorsunuz.</div>
                <div>
                    <Pagination totalData={totalData} setPage={setPage} page={page} listQuantity={listQuantity} />
                </div>
            </div>
        </>
    )
}
