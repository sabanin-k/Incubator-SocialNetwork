import React from 'react';
import PostSection from './PostSection/PostSection';
import InputContainer from './PostSection/InputField/InputContainer';
import UserProfileContainer from './UserProfile/UserProfileContainer';
import style from './Profile.module.css';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return <div className={style.content}>
        <div className={style.userProfile}>
            <UserProfileContainer />
        </div>
        <div className={style.posts}>
            <InputContainer />
            <PostSection />
        </div>
        <Outlet />
    </div>
}

export default Profile;