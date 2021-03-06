import React, { useEffect, useState } from 'react'
import '../styles/pagination/pagination.scss'

export default function Pagination({ totalData, setPage, page, listQuantity }) {

    const [pageNumbers, setPageNumbers] = useState([])
    const [pageList, setPageList] = useState()

    useEffect(() => {
        if (totalData) {
            setPageNumbers(Array.from(Array(Math.ceil(totalData / listQuantity))?.keys()))
        }
    }, [totalData])
    const paginate = (pageNumber) => {
        if (pageNumber === '...') {
            setPage(prev => page < pageNumbers?.length ? prev + 1 : 1)
        } else {

            setPage(pageNumber);
        }
    }

    useEffect(() => {

        let newPage = pageNumbers.map(x => x + 1)
        let data = [...newPage]
        let firstToLast = newPage.slice(newPage.length - 3)[0]

        if (newPage.length < 7) {
            data = newPage
        } else if (page < 4) {
            data = [...newPage.slice(0, 3), '...', ...newPage.slice(newPage.length - 3)]
        } else if (page <= newPage.length) {
            data = [...newPage.slice(page >= firstToLast ? firstToLast - 4 : page - 3, page >= firstToLast ? firstToLast - 1 : page), '...', ...newPage.slice(newPage.length - 3)]
        }
        setPageList(data)
    }, [page, pageNumbers])

    return (
        <>
            {
                totalData > 0 &&
                <div className="pagination-position">
                    <div className="pagination-item" onClick={() => page > 1 && paginate(page - 1)} > {`<`} </div>
                    {
                        pageList?.map(number => (
                            <div key={number} className={page === number ? 'pagination-item active' : number === '...' ? 'pagination-item-dots' : 'pagination-item'} onClick={() => paginate(number)}>
                                {number}
                            </div>
                        ))
                    }
                    <div className="pagination-item" onClick={() => page < pageNumbers?.length && paginate(page + 1)}> {`>`}  </div>
                </div >
            }

        </>
    )
}