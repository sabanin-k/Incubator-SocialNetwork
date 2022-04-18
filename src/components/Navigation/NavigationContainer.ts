import { connect } from "react-redux";
import { TGlobalState } from "../../store/reduxStore";
import { getIsLogged } from "../../store/selectors/authSelector";
import Navigation from "./Navigation";

const mapStateToProps = (state: TGlobalState) => ({
    isLogged: getIsLogged(state)
})

export default connect(mapStateToProps)(Navigation)