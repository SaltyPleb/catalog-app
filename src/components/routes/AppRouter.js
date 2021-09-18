import React from 'react'
import { Switch, router, redirect } from 'react-router-dom'

const AppRouter = () => {
    const isAuth = false;
    return (
        <Switch>
            {authRoutes}  
        </Switch>
    )
}

export default AppRouter
