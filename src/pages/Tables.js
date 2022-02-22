import React, { useState } from 'react'
import { Table } from '../components/Table'
import Data from '../app/data/TableData.json'
import { Button } from '../components/Button'
import { DrawerModal } from '../components/DrawerModal'
import { Input } from '../components/Input'

export const Tables = () => {
    const [show, setShow] = useState(false)
    const [text, setText] = useState()
    const [text2, setText2] = useState()

    const tableHeader = [
        {
            name: "campaignId",
            title: "Kampanya ID",
            render: (value) => (
                <span className="table-content-campaignId">{value ? value : "-"}</span>
            ),
        },
        {
            name: "discountName",
            title: "İndirim adı",
            render: (value) => <span>{value ? value : "-"}</span>,
        },
        {
            name: "affectedListingCount",
            title: "Etkilenen Liste Sayısı",
            render: (value) => <span>{value ? value : "-"}</span>,
        },
        {
            name: "includedMerchants",
            title: "Mağaza",
            render: (value) => <span>{value[0]?.legalName}</span>,
        },
        {
            name: "includedSkus",
            title: "Hedef",
            render: (value) => <span>{value ? value : "-"}</span>,
        },
        {
            name: "status",
            title: "Durum",
            render: (value) => (
                <div className={value !== 0 ? 'status-div yellow' : 'status-div red'}>
                    {value !== 0 ? 'Aktif' : 'Pasif'}
                </div>
            ),
        },
        {
            name: "startDate",
            title: "Başlangıç Tarihi",
            render: (value) => <span>{new Date(value).toLocaleString()}</span>,
        },
        {
            name: "endDate",
            title: "Bitiş Tarihi",
            render: (value) => <span>{new Date(value).toLocaleString()}</span>,
        },
    ];


    const handleSave = () => {
        alert(text + ' ' + text2)
    }

    return (
        <div>
            <Table data={Data} tableHeader={tableHeader} pageTitle={'İndirim Listesi'} listQuantity={2} search>
                <Button color={'primary'} text='İndirim Oluştur' onClick={() => setShow(!show)} size={'default'}></Button>
            </Table>

            <div>
                <DrawerModal size={'medium'} title="Başlık title" modalSize={'30%'} show={show} setShow={setShow} footerAling={'right'} handleSave={handleSave} backgroundClose >
                    <br></br>
                    <Input type={'search'} label={'Text'} placeHolder={'Placeholder'} inputValue={text} setInputValue={setText} required={true}></Input>
                    <br></br>
                    <Input type={'search'} label={'Text 2'} placeHolder={'Placeholder'} inputValue={text2} setInputValue={setText2} required={true}></Input>
                </DrawerModal>
            </div>
        </div>
    )
}
