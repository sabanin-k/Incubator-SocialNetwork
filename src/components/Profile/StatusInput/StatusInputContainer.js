import { connect } from "react-redux"
import { compose } from "redux"
import { getAuthUserId } from "../../../store/selectors/authSelector"
import { getStatus, getUserId } from "../../../store/selectors/userProfileSelector"
import { updateStatusThunk } from "../../../store/reducers/userProfileReducer"
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