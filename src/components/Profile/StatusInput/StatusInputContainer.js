import { connect } from "react-redux"
import { compose } from "redux"
import { getAuthUserId } from "../../State/Selectors/authSelector"
import { getStatus } from "../../State/Selectors/userProfileSelector"
import { updateStatusThunk, getStatusThunk } from "../../State/userProfileReducer"
import StatusInput from "./StatusInput"

const StatusInputContainer = (props) => {
    return <StatusInput
        status={props.status}
        getStatus={props.getStatusThunk}
        updateStatus={props.updateStatusThunk}
        userId={props.userId} // откуда здесь props.userId я вообще хз, в пропсах его быть не должно
        authUserId={props.authUserId}/>
}

const mapStateToProps = (state) => ({
    status: getStatus(state),
    // userId: state.userProfilePage.userProfile.userId,
    authUserId: getAuthUserId(state)
})

export default compose(
    connect(mapStateToProps, { updateStatusThunk , getStatusThunk })
)(StatusInputContainer)