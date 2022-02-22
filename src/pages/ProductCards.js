import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { BackButton } from './BackButton'
import axios from 'axios'
import Pagination from '../components/Pagination'

export const ProductCards = () => {
    const [page, setPage] = useState(1);

    const [data, setData] = useState()
    let listQuantity = 48

    let secondValue = page * listQuantity
    let firstValue = secondValue - listQuantity

    useEffect(() => {
        axios.get('https://www.freetogame.com/api/games')
            .then(({ data }) => {
                setData(data)
            })
            .catch((err) => {
                console.log("er -->", err);
            })
    }, [])

    var url = 'https://api.currentsapi.services/v1/search?' +
        'keywords=Amazon&language=en&' +
        'apiKey=API_KEY';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            console.log(response);
        })


    return (
        <div>
            <BackButton />
            {
                data ?
                    <div className='card-wrapper'>
                        {
                            data?.slice(firstValue, secondValue)?.map((value, index) => (
                                <div key={index} className='card-item'>
                                    <ProductCard
                                        data={value}
                                        bottomCardType={"like"}
                                        textColor='green'
                                    // favIcon
                                    // saveIcon
                                    // bellIcon
                                    // sponsored
                                    // info={'red'}
                                    // info2={'blue'}
                                    // info3

                                    />

                                </div>
                            ))
                        }
                    </div>
                    : <h3>Loading...</h3>
            }
            <div>
                <Pagination totalData={data?.length} setPage={setPage} page={page} listQuantity={listQuantity} />
            </div>
        </div>
    )
}
