import React, { useCallback, useEffect, useState } from 'react'
import '../styles/toastMessage/toastMessage.scss'
import { ReactComponent as Dismiss } from '../assets/icons/dismiss.svg'

export const ToastMessage = ({ list, setList }) => {

    const [stop, setStop] = useState(false)

    const deleteToast = (Id) => {
        const newList = list?.filter(x => x.id !== Id)
        setList(newList)
    }

    const deleteToast2 = useCallback(Id => {
        let newList
        if (Id?.length) {
            Id?.map(y => newList = list?.filter(x => x.id !== y))
        }
        setList(newList)
    }, [list, setList]);

    useEffect(() => {
        let listSingle = []
        let listMulti = []

        list?.map((val) => {
            if (val?.model === 'multi') {
                listMulti.push(val)
            } else {
                listSingle.push(val)
            }
        })

        const interval = setInterval(() => {
            let stp = listSingle?.filter(y => y.id !== stop)?.map(y => y)
            if (stp.length) {
                // deleteToast(listSingle[0].id);
                deleteToast2(stp?.map((val) => val?.id));
            }
        }, 1000);

        const interval2 = setInterval(() => {
            let stp = listMulti?.filter(y => y.id !== stop)?.map(y => y)
            if (stp.length) {
                //  deleteToast(listMulti[0].id);
                deleteToast2(stp?.map((val) => val?.id));
            }
        }, 7000);

        return () => {
            clearInterval(interval);
            clearInterval(interval2)
        }
    }, [list, stop]);

    return (
        <div className='toast-container' >
            {
                list?.map((data, index) => (
                    <div key={index} className={`toast ${data?.type}`} onMouseEnter={() => setStop(data?.id)} onMouseLeave={() => setStop(false)}>
                        <div className='front-toast'></div>
                        <div className={`col-toast-text ${data?.model}`}>
                            <div>
                                <div className='icon-toast' >
                                    <div className='icon-toast'>
                                        {
                                            window.innerWidth < 980 ?
                                                data?.mIcon
                                                :
                                                data?.icon
                                        }
                                    </div>
                                    <div>
                                        <div className='text-toast'>{data?.text ? data?.text : 'Bir sorun oluştu.'}</div>
                                        {
                                            data?.model === 'multi' &&
                                            <div className='description-toast'>
                                                {data?.description ? data?.description : 'Description'}
                                            </div>
                                        }
                                        {
                                            data?.link &&
                                            <div className='link-div'>
                                                <a className='link-toast' target='_blank' href={`${data?.link}`}> {data?.linkName ? data?.linkName : data?.link}</a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='close-toast' onClick={() => deleteToast(data?.id)}><Dismiss /></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}