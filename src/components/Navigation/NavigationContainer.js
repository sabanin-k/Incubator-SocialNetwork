import { connect } from "react-redux";
import { getIsLogged } from "../../store/selectors/authSelector";
import Navigation from "./Navigation";

const mapStateToProps = (state) => ({
    isLogged: getIsLogged(state)
})

export default connect(mapStateToProps)(Navigation)