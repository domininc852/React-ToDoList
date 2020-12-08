import { connect } from 'react-redux';
import ToDoItem from '../components/ToDoItem';
import { updateItemStatus, deleteItem } from '../actions'

const mapDispatchToProps = dispatch => ({
    updateStatus: (id, status) => dispatch(updateItemStatus(id, status)),
    deleteItem: (id) => dispatch(deleteItem(id))
})

const ToDoItemContainer = connect(null, mapDispatchToProps)(ToDoItem);

export default ToDoItemContainer;