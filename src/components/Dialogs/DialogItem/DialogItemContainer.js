import { connect } from "react-redux";
import DialogItem from "./DialogItem";

const mapStateToProps = (state) => {
    return {
        friends: state.dialogsPage.friends
    }
}

const DialogItemContainer = connect(mapStateToProps, null)(DialogItem);

export default DialogItemContainer;