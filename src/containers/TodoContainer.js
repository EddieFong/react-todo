import { connect } from "react-redux";
import Todo from "../components/Todo"

const mapDispatchToProps = dispatch => ({
    changeStatusFunction: todoItem => {
        dispatch({
            type: "ChangeStatus_type",
            payload: todoItem
        });
    }
});
connect(null, mapDispatchToProps)(Todo)
export default connect(null, mapDispatchToProps)(Todo) 