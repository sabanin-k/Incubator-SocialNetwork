import { connect } from "react-redux"
import { compose } from "redux"
import { getAuthUserId } from "../../State/Selectors/authSelector"
import { getStatus, getUserId } from "../../State/Selectors/userProfileSelector"
import { updateStatusThunk } from "../../State/userProfileReducer"
import StatusInput from "./StatusInput"

const StatusInputContainer = (props) => {
    return <StatusInput
        status={props.status}
        userId={props.userId}
        authUserId={props.authUserId}
        updateStatus={props.updateStatusThunk}
    />
}

const mapStateToProps = (state) => ({
    status: getStatus(state),
    userId: getUserId(state),
    authUserId: getAuthUserId(state)
})

export default compose(
    connect(mapStateToProps, { updateStatusThunk })
)(StatusInputContainer)