import React from 'react'
import { SelectInput } from '../components/SelectInput'
import { BackButton } from './BackButton'
import category from '../app/data/CategoryTree.json'

export const SelectInputs = () => {
    let newData = []
    let text = "";

    const dataControl = (item, text) => {
        item?.forEach((data) => {
            newCategoryData(data, text + " > " + data.name);
        });
    }

    const newCategoryData = (data, text) => {
        if (data.children) {
            dataControl(data.children, text);
        } else {
            newData.push({
                key: data.id,
                value: data.name,
                text: `${text}[${data.id}]`.slice(2),
            });
        }
    }

    dataControl(category, text)

    return (
        <div>
            <BackButton />
            <SelectInput data={newData} listSize={8}></SelectInput>
        </div>
    )
}
