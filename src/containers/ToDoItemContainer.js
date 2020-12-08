import { connect } from 'react-redux';
import ToDoItem from '../components/ToDoItem';
import { updateItemStatus } from '../actions'

const mapDispatchToProps = dispatch => ({
    updateStatus: (id, status) => dispatch(updateItemStatus(id, status))
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;