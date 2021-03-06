import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({children}) => {
    const { currentUser } = useAuth();

    return (
        <Route>
            {currentUser ? children : <Redirect to='/login'/>}
        </Route>
    )
}

export default PrivateRoute
