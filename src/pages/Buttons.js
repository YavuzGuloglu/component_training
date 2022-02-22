import React from 'react'
import { Button } from '../components/Button'
import { ReactComponent as AddCircle } from '../assets/icons/add-circle.svg'
import { ReactComponent as Selectbox } from '../assets/icons/selectbox.svg'
import { BackButton } from './BackButton'

export const Buttons = () => {

    const clickEvent = () => {
        alert("Clicked !")
        console.log("Clicked !")
    }

    const mouseEnter = () => {
        console.log("mouseEnter !")
    }

    const mouseLeave = () => {
        console.log("mouseLeave !")
    }
    return (
        <div>
            <BackButton />
            <h1>Primary</h1>
            <div className='bodyDiv'>
                <div> <Button color="primary" size='large' onClick={() => clickEvent()} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}></Button> </div>
                <div> <Button color="primary" size='default'></Button></div>
                <div> <Button color="primary" size='small'></Button></div>
                <div> <Button color="primary" size='tiny'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div><Button color="primary" text='Disabled' size='large' disabled='true'></Button></div>
                <div><Button color="primary" text='Disabled' size='default' disabled='true'></Button></div>
                <div><Button color="primary" text='Disabled' size='small' disabled='true'></Button></div>
                <div><Button color="primary" text='Disabled' size='tiny' disabled='true'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="primary" size='large' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="primary" size='default' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="primary" size='small' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="primary" size='tiny' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div><Button color="primary" text='Disabled' size='large' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="primary" text='Disabled' size='default' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="primary" text='Disabled' size='small' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="primary" text='Disabled' size='tiny' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div><Button color="primary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='large'></Button></div>
                <div> <Button color="primary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='default'></Button></div>
                <div><Button color="primary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='small'></Button></div>
                <div> <Button color="primary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='tiny'></Button></div>
            </div>

            <h1>Secondary</h1>
            <div className='bodyDiv'>
                <div><Button color="secondary" size='large'></Button></div>
                <div><Button color="secondary" size='default'></Button></div>
                <div><Button color="secondary" size='small'></Button></div>
                <div><Button color="secondary" size='tiny'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="secondary" text='Disabled' size='large' disabled='true'></Button></div>
                <div> <Button color="secondary" text='Disabled' size='default' disabled='true'></Button></div>
                <div> <Button color="secondary" text='Disabled' size='small' disabled='true'></Button></div>
                <div> <Button color="secondary" text='Disabled' size='tiny' disabled='true'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="secondary" size='large' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="secondary" size='default' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="secondary" size='small' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="secondary" size='tiny' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="secondary" text='Disabled' size='large' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="secondary" text='Disabled' size='default' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="secondary" text='Disabled' size='small' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="secondary" text='Disabled' size='tiny' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="secondary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='large'></Button></div>
                <div> <Button color="secondary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='default'></Button></div>
                <div> <Button color="secondary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='small'></Button></div>
                <div> <Button color="secondary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='tiny'></Button></div>
            </div>

            <h1>Tertiary</h1>
            <div className='bodyDiv'>
                <div> <Button color="tertiary" size='large'></Button></div>
                <div> <Button color="tertiary" size='default'></Button></div>
                <div> <Button color="tertiary" size='small'></Button></div>
                <div> <Button color="tertiary" size='tiny'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="tertiary" text='Disabled' size='large' disabled='true'></Button></div>
                <div> <Button color="tertiary" text='Disabled' size='default' disabled='true'></Button></div>
                <div> <Button color="tertiary" text='Disabled' size='small' disabled='true'></Button></div>
                <div> <Button color="tertiary" text='Disabled' size='tiny' disabled='true'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="tertiary" size='large' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="tertiary" size='default' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="tertiary" size='small' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="tertiary" size='tiny' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="tertiary" text='Disabled' size='large' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="tertiary" text='Disabled' size='default' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="tertiary" text='Disabled' size='small' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="tertiary" text='Disabled' size='tiny' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="tertiary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='large'></Button></div>
                <div> <Button color="tertiary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='default'></Button></div>
                <div> <Button color="tertiary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='small'></Button></div>
                <div> <Button color="tertiary" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='tiny'></Button></div>
            </div>

            <h1>Ghost</h1>
            <div className='bodyDiv'>
                <div> <Button color="ghost" size='large'></Button></div>
                <div> <Button color="ghost" size='default'></Button></div>
                <div> <Button color="ghost" size='small'></Button></div>
                <div> <Button color="ghost" size='tiny'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="ghost" text='Disabled' size='large' disabled='true'></Button></div>
                <div> <Button color="ghost" text='Disabled' size='default' disabled='true'></Button></div>
                <div> <Button color="ghost" text='Disabled' size='small' disabled='true'></Button></div>
                <div> <Button color="ghost" text='Disabled' size='tiny' disabled='true'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="ghost" size='large' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div>  <Button color="ghost" size='default' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="ghost" size='small' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="ghost" size='tiny' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="ghost" text='Disabled' size='large' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="ghost" text='Disabled' size='default' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="ghost" text='Disabled' size='small' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="ghost" text='Disabled' size='tiny' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="ghost" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='large'></Button></div>
                <div> <Button color="ghost" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='default'></Button></div>
                <div> <Button color="ghost" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='small'></Button></div>
                <div> <Button color="ghost" icon={<Selectbox />} text='Icon-Button' iconPosition="right" size='tiny'></Button></div>
            </div>

            <h1>Link</h1>
            <div className='bodyDiv'>
                <div><Button color="link-primary" text='Link Button' size='large' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-primary" text='Link Button' size='default' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-primary" text='Link Button' size='small' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="link-primary" text='Link Button' size='tiny' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="link-primary" text='Link Button' size='large' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="link-primary" text='Link Button' size='default' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="link-primary" text='Link Button' size='small' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="link-primary" text='Link Button' size='tiny' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>

            <h1>Ghost Left Link</h1>
            <div className='bodyDiv'>
                <div><Button color="link-ghost" text='Link Button' size='large' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-ghost" text='Link Button' size='default' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-ghost" text='Link Button' size='small' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-ghost" text='Link Button' size='tiny' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div><Button color="link-ghost" text='Link Button' size='large' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-ghost" text='Link Button' size='default' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-ghost" text='Link Button' size='small' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div><Button color="link-ghost" text='Link Button' size='tiny' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>

            <h1>Ghost Right Link</h1>
            <div className='bodyDiv'>

                <div> <Button color="link-ghost" text='Link Button' size='large' icon={<AddCircle />} iconPosition="right"></Button></div>
                <div> <Button color="link-ghost" text='Link Button' size='default' icon={<AddCircle />} iconPosition="right"></Button></div>
                <div> <Button color="link-ghost" text='Link Button' size='small' icon={<AddCircle />} iconPosition="right"></Button></div>
                <div><Button color="link-ghost" text='Link Button' size='tiny' icon={<AddCircle />} iconPosition="right"></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="link-ghost" text='Link Button' size='large' disabled='true' icon={<AddCircle />} iconPosition="left"></Button> </div>
                <div> <Button color="link-ghost" text='Link Button' size='default' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="link-ghost" text='Link Button' size='small' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
                <div> <Button color="link-ghost" text='Link Button' size='tiny' disabled='true' icon={<AddCircle />} iconPosition="left"></Button></div>
            </div>

            <h1>Danger</h1>
            <div className='bodyDiv'>
                <div><Button color="danger" size='large'></Button></div>
                <div><Button color="danger" size='default'></Button></div>
                <div><Button color="danger" size='small'></Button></div>
                <div><Button color="danger" size='tiny'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div>  <Button color="danger" text='Disabled' size='large' disabled='true'></Button></div>
                <div>  <Button color="danger" text='Disabled' size='default' disabled='true'></Button></div>
                <div>  <Button color="danger" text='Disabled' size='small' disabled='true'></Button></div>
                <div> <Button color="danger" text='Disabled' size='tiny' disabled='true'></Button></div>
            </div>

            <h1>Success</h1>
            <div className='bodyDiv'>
                <div> <Button color="success" size='large'></Button></div>
                <div> <Button color="success" size='default'></Button></div>
                <div> <Button color="success" size='small'></Button></div>
                <div> <Button color="success" size='tiny'></Button></div>
            </div>
            <div className='bodyDiv'>
                <div> <Button color="success" text='Disabled' size='large' disabled='true'></Button></div>
                <div>  <Button color="success" text='Disabled' size='default' disabled='true'></Button></div>
                <div> <Button color="success" text='Disabled' size='small' disabled='true'></Button></div>
                <div> <Button color="success" text='Disabled' size='tiny' disabled='true'></Button></div>
            </div>

        </div>
    )
}
