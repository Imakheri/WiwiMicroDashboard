import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import BarChart from './components/BarChart';
import Table from './components/Table';
import PieChart2 from './components/PieNodes';

const  App = () => {
  return <div>
          <Header />
            <Switch>
              <Route exact from='/' render={props => <Home {...props} />} />
              <Route exact path='/all' render={props => <Table {...props} />}/>
              <Route exact path='/hours' render={props => <BarChart {...props} />}/>
              <Route exact path='/nodes' render={props => <PieChart2 {...props} />}/>
            </Switch>
        </div>
}

export default App;
