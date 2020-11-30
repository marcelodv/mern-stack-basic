import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// Imports ADMIN
import Dashboard from './pages/admin/dashboard'

import Products from './pages/admin/products'
import ProductsUpdate from './pages/admin/products/products.update'
import ProductsCreate from './pages/admin/products/products.create'

import Users from './pages/admin/users'
import UsersUpdate from './pages/admin/users/users.update'
import UsersCreate from './pages/admin/users/users.create'


// Imports CLIENT
import Home from './pages/client/home'
import Painel from './pages/client/painel'
import ProductDetails from './pages/client/products/products.details'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Client Routes */}
                <Route path="/" exact component={Home}/>
                <Route path="/products/:idProduct" exact component={ProductDetails}/>

                {/* Admin Routes */}
                <Route path="/admin" exact component={Dashboard}/>

                <Route path="/admin/products" exact component={Products}/>
                <Route path="/admin/products/create" exact component={ProductsCreate}/>
                <Route path="/admin/products/update/:idProduct" exact component={ProductsUpdate}/>

                <Route path="/admin/users" exact component={Users}/>
                <Route path="/admin/users/create" exact component={UsersCreate}/>
                <Route path="/admin/users/update/:idUsers" exact component={UsersUpdate}/>
            </Switch>
        </BrowserRouter>
    )
}