import { connect } from 'react-redux';
import ToDoItem from '../components/ToDoItem';
import { updateItem, deleteItem } from '../actions'

const mapDispatchToProps = dispatch => ({
    updateStatus: (toDoItem) => dispatch(updateItem(toDoItem)),
    deleteItem: (id) => dispatch(deleteItem(id))
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;