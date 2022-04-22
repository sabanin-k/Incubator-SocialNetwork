import React, { FC } from 'react';
import Logged from './Logged/Logged';
import UnLogged from './UnLogged/UnLogged';

const Header: FC<TProps> = ({data, logoutThunk}) => {
    const {isLogged, login} = data
    return isLogged
        ? <Logged login={login} logoutThunk={logoutThunk}/>
        : <UnLogged />
}

export default Header;


type TProps = {
    data: {
        isLogged: boolean
        login: string
    }
    logoutThunk: () => void
}
