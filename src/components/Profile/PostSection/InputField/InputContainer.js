import { addPost } from '../../../State/profileReducer'
import { connect } from "react-redux";
import Input from "./Input";

export default connect(null, { addPost })(Input)
