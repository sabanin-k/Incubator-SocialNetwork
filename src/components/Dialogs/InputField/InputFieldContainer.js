import { connect } from "react-redux";
import { writeMessage } from "../../State/dialogsReducer";
import InputField from "./InputField";

export default connect(null, { writeMessage })(InputField)