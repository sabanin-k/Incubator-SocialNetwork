import React, { Component } from "react";
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/images/user.png";
import StatusInputContainer from "../StatusInput/StatusInputContainer";
import s from "./UserProfile.module.css";

class UserProfile extends Component {
    handleStatusInput = () => {
        return <StatusInputContainer userId={this.props.userProfile.userId}/>
    }

    render() {
        if (!this.props.userProfile) { return <Preloader /> }
        return (
            <div className={s.wrapper}>
                <div className={s.photoWrapper}>
                    <img src={this.props.userProfile.photos.large || userImage} alt={this.props.fullName} width='200px' />
                </div>
                <div className={s.about}>
                    <h2>{this.props.userProfile.fullName}</h2>
                    <div className={s.status}>
                        {/* {props.userProfile.fullName === 'sabanin_k' && <StatusInputContainer />} */}
                        {this.handleStatusInput()}
                    </div>
                    <div className={s.idDiv}>
                        <span className={s.idSpan}>ID</span>
                        <span>{this.props.userProfile.userId}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;