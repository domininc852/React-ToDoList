import { connect } from 'react-redux'
import DoneList from '../components/DoneList'
import {initTodo} from '../actions'

const mapStateToProps = (state) => ({
    doneList: state.ToDos.filter(doneItem => doneItem.done)
})
const mapDispatchToProps = (dispatch)=>({
    initTodo:(toDoList)=>dispatch(initTodo(toDoList))
})
const DoneListContainer = connect(mapStateToProps, mapDispatchToProps)(DoneList);

export default DoneListContainer;