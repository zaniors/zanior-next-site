import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import routes from './router/index';
import 'normalize.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/detail">detail</Link>
        </li>
        <li>
          <Link to="/resume">resume</Link>
        </li>
        <li>
          <Link to="/comments">comments</Link>
        </li>
      </ul> */}

      <Switch>
        {
          routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={props => (
                <route.component>
                  {
                    <Switch>
                      {
                        route.routes && route.routes.map((subRoute, i) => (
                          <Route
                            key={i}
                            path={subRoute.path}
                            render={props => (
                              <subRoute.component />
                            )} >
                          </Route>
                        ))
                      }
                    </Switch>
                  }
                </route.component>
              )}
            />
          ))
        }
      </Switch>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);
