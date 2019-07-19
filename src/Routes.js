import React from 'react';
import './index.css';
import { Route, 
          BrowserRouter as Router, 
          Switch 
        } from 'react-router-dom'
import NotFound from './views/NotFound'
import Login from './views/Login'
import ArticlesShow from './views/articles/ArticlesShow'
import ArticlesNew from './views/articles/ArticlesNew'
import ArticlesIndex from './views/articles/ArticlesIndex'
import ArticlesEdit from './views/articles/ArticlesEdit'
import NavBar from './components/NavBar.js'



export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ArticlesIndex} />
            <Route path="/login" component={Login} />
            <Route exact path="/articles" component={ArticlesIndex} />
            <Route path="/articles/new" component={ArticlesNew} />
            <Route exact path="/articles/:id" component={ArticlesShow} />
            <Route path="/articles/:id/edit" component={ArticlesEdit} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}