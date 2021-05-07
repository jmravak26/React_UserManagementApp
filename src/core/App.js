
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import UserList from './user/UserList';

const userRoute = '/users'

export default function App() {
  const [ loginToken, login ] = useState(window.sessionStorage.getItem('loginToken'))
  const _history = useHistory()
  
  useEffect(() => {
    if(loginToken && _history.location.pathname !== userRoute) _history.push(userRoute)
  }, [ loginToken ])

  return (
      <div className='app'>
        <header>
          {loginToken && <>
            <button className='button' children='Logout' onClick={() => {
              login(null)
              window.sessionStorage.clear()
            }}/>
          </>}
        </header>
        <content>
          {loginToken ? <>
            <Switch>
              <Route path={userRoute} exact={false}>
                <UserList />
              </Route>
          </Switch>
          </> : <>
            <Login
              onLogin={() => {
                const _loginToken = '2jWJ3wejawj2jsdjasda'
                window.sessionStorage.setItem('loginToken', _loginToken)
                login(_loginToken)
              }}
            />
          </>}
          
        </content>
        <footer>

        </footer>
    </div>
  );
}