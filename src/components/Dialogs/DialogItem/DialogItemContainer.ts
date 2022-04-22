import { connect } from "react-redux";
import { TGlobalState } from "../../../store/reduxStore";
import DialogItem from "./DialogItem";

const mapStateToProps = (state: TGlobalState) => {
    return {
        friends: state.dialogsPage.friends
    }
}

export default connect(mapStateToProps)(DialogItem);