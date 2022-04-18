import React from 'react';
import PostSection from './PostSection/PostSection';
import InputContainer from './PostSection/InputField/InputContainer';
import UserProfileContainer from './UserProfile/UserProfileContainer';
import style from './Profile.module.css';

const Profile = () => {
    return <div className={style.content}>
        <div className={style.userProfile}>
            <UserProfileContainer />
        </div>
        <div className={style.posts}>
            <InputContainer />
            <PostSection />
        </div>
    </div>
}

export default Profile;