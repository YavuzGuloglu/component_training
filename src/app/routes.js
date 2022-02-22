import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { Tabs } from '../pages/Tabs'
import { Buttons } from '../pages/Buttons'
import { Segments } from '../pages/Segments'
import { ToastMessages } from '../pages/ToastMessages'
import { Inputs } from '../pages/Inputs'
import { DrawerModals } from '../pages/DrawerModals'
import { SelectInputs } from '../pages/SelectInputs'
import { Tables } from '../pages/Tables'
import { ProductCards } from '../pages/ProductCards'

export default function routes(params) {
    return (
        <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/buttons" exact component={Buttons}></Route>
            <Route path="/tabs" exact component={Tabs}></Route>
            <Route path="/segments" exact component={Segments}></Route>
            <Route path='/toastMessages' exact component={ToastMessages}></Route>
            <Route path="/inputs" exact component={Inputs}></Route>
            <Route path="/drawers" exact component={DrawerModals}></Route>
            <Route path="/selectInputs" exact component={SelectInputs}></Route>
            <Route path="/tables" exact component={Tables}></Route>
            <Route path="/productCards" exact component={ProductCards}></Route>
        </Switch>
    )
}