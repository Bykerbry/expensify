import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage' 
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header' 

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact={true} component={ExpenseDashboardPage} />
            <Route path="/add" exact={true} component={AddExpensePage} />
            <Route path="/edit/:id" exact={true} component={EditExpensePage} />
            <Route path="/help" exact={true} component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter