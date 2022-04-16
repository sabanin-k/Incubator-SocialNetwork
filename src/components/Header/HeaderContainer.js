import { connect } from "react-redux";
import { logoutThunk } from "../../store/reducers/authReducer.ts";
import { getAuthData } from "../../store/selectors/authSelector";
import Header from "./Header";

const mapStateToProps = (state) => ({
    data: getAuthData(state)
})

export default connect(mapStateToProps, { logoutThunk })(Header)