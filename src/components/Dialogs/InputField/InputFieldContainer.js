import { connect } from "react-redux";
import { writeMessage } from "../../../store/reducers/dialogsReducer.ts";
import InputField from "./InputField";

export default connect(null, { writeMessage })(InputField)