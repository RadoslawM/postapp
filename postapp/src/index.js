import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 





import Home from './Home';
import Contact from './Contact';


ReactDOM.render(
<BrowserRouter>
<Switch>
<Route path exact='/' component={Home} />
<Route path exact='/post/:id' component={Home} />
<Route path='/Contact' component={Contact} />
</Switch>
</BrowserRouter>,
document.getElementById('root')
);



