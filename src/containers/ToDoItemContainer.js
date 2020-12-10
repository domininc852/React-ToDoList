import { connect } from 'react-redux';
import ToDoItem from '../components/ToDoItem';
import { updateItem, deleteItem } from '../actions'

const mapDispatchToProps = dispatch => ({
    updateStatus: (id) => dispatch(updateItem(id)),
    deleteItem: (id) => dispatch(deleteItem(id))
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;