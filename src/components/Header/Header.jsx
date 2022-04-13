import React from 'react';
import Logged from './Logged/Logged';
import UnLogged from './UnLogged/UnLogged';

const Header = ({data, logoutThunk}) => {
    const {isLogged, login} = data
    return isLogged
        ? <Logged login={login} logoutThunk={logoutThunk}/>
        : <UnLogged />
}

export default Header;