import { HashRouter, Route, Routes } from 'react-router-dom';
import React, { FC, lazy, Suspense, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer.tsx';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './components/common/Preloader/Preloader';
import FriendsContainer from './components/Friends/FriendsContainer';
import { initialApp } from './store/reducers/appReducer';
import { TGlobalState } from './store/reduxStore';
import './App.css';
import Page404 from './components/common/404/Page404';

const NewsContainer = lazy(() => import('./components/News/NewsContainer'));
const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'));

const App: FC<TProps> = ({ initialized, initialApp }) => {

  useEffect(() => {
    initialApp()
  })

  if (!initialized) return <Preloader />

  return (
    <HashRouter>
      <div className="App">
        <HeaderContainer />
        <NavigationContainer />
        <div className='App__main'>
          <Routes>
            <Route path='/*' element={<Page404 />} />
            <Route path='/profile/' element={<Profile key='me' />} />
            <Route path='/dialogs' element={<Suspense fallback={<Preloader />}> <Dialogs /> </Suspense>} />
            <Route path='/news' element={ <Suspense fallback={<Preloader />}> <NewsContainer /> </Suspense>} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/users/*' element={<Profile />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/friends' element={<FriendsContainer />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

const mapStateToProps = (state: TGlobalState) => ({
  initialized: state.app.initialized
})

export default compose<React.Component>(
  connect<TStateProps, TDispatchProps>(mapStateToProps, { initialApp })
)(App);

type TStateProps = { initialized: boolean }
type TDispatchProps = { initialApp: () => void }
type TProps = TStateProps & TDispatchProps