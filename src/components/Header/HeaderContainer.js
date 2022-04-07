import { Component } from "react";
import { connect } from "react-redux";
import { logoutThunk } from "../State/authReducer";
import { getAuthData } from "../State/Selectors/authSelector";
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