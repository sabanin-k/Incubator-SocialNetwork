import { Component } from "react";
import { connect } from "react-redux";
import { getAuthThunk, logoutThunk } from "../State/authReducer";
import { getAuthData } from "../State/Selectors/authSelector";
import Header from "./Header";


class HeaderContainer extends Component {
    render() {
        return <Header {...this.props.data}
            getAuthThunk={this.props.getAuthThunk}
            logoutThunk={logoutThunk} />
    }
}

const mapStateToProps = (state) => ({
    data: getAuthData(state)
})

export default connect(mapStateToProps, { getAuthThunk, logoutThunk })(HeaderContainer)