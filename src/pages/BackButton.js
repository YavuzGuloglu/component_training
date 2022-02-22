import React from 'react'
import { Button } from '../components/Button'
import { ReactComponent as BackArrow } from '../assets/icons/back-arrow.svg'
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
    const history = useHistory()

    return (
        <>
            <Button color="link-primary" text='Back' icon={<BackArrow />} size='large' onClick={() => history.push('/')}></Button>
        </>
    )
}
