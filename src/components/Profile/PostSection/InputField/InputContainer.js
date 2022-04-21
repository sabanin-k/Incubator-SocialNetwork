import { actionCreators } from '../../../../store/reducers/profileReducer.ts'
import { connect } from "react-redux";
import Input from "./Input";

export default connect(null, { addPost: actionCreators.addPost })(Input)
