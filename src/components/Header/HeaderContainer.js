import { Component } from "react";
import { connect } from "react-redux";
import { logoutThunk } from "../../store/reducers/authReducer";
import { getAuthData } from "../../store/selectors/authSelector";
import Header from "./Header";


class HeaderContainer extends Component {
    render() {
        return <Header {...this.props.data}
            logoutThunk={this.props.logoutThunk} />
    }
}

const mapStateToProps = (state) => ({
    data: getAuthData(state)
})

export default connect(mapStateToProps, { logoutThunk })(HeaderContainer)