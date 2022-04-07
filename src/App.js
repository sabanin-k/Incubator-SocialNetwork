import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Dialogs from './components/Dialogs/Dialogs';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/MusicSection/Music';
import Navigation from './components/Navigation/Navigation';
import NewsContainer from './components/News/NewsContainer';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/SettingsSection/Settings';
import LoginContainer from './components/Login/LoginContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialApp } from './components/State/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import './App.css';

function App({ initialized, initialApp }) {

  useEffect(() => {
    initialApp()
  })

  if (!initialized) return <Preloader />

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Navigation />
        <div className='App__main'>
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/profile/' element={<Profile key='me' />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<NewsContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/users/*' element={<Profile key='user' />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initialApp })
)(App);
