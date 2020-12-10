import { connect } from 'react-redux';
import ToDoGroup from '../components/ToDoGroup';
import { initTodo, initLabel } from '../actions'

const mapStateToProps = state => ({
    toDoList: state.ToDos
})

const mapDispatchToProps = dispatch => ({
    initTodo: (toDoList) => dispatch(initTodo(toDoList)),
    initLabel: (labels) => dispatch(initLabel(labels))
})
const ToDoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoGroup);

export default ToDoGroupContainer;