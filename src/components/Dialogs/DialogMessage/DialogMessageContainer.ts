import { connect } from "react-redux";
import DialogMessage from "./DialogMessage";
import { deleteMessage } from "../../../store/reducers/dialogsReducer";
import { TGlobalState } from "../../../store/reduxStore";

const mapStateToProps = (state: TGlobalState) => {
    return {
        messages: state.dialogsPage.messages
    }
}

export default connect(mapStateToProps, { deleteMessage })(DialogMessage)
