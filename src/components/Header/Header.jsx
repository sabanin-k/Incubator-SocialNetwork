import React from 'react';
import Logged from './Logged/Logged';
import UnLogged from './UnLogged/UnLogged';

const Header = (props) => {
    return props.isLogged ? <Logged {...props}/> : <UnLogged />
}

export default Header;