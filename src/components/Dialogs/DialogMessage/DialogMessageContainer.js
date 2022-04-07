import { connect } from "react-redux";
import DialogMessage from "./DialogMessage";
import { deleteMessage } from "../../State/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages
    }
}

export default connect(mapStateToProps, { deleteMessage })(DialogMessage)
