import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import ExpenseDashboardPage from '../components/Home';
import Header from '../components/Header';
import HelpExpensePage from '../components/HelpExpense';
import NotFoundPage from '../components/NotFound';


const AppRouter = () => (
<BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter;