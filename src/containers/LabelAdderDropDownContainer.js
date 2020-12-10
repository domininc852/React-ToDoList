import {connect} from 'react-redux'
import LabelAdderDropDown from '../components/LabelAdderDropDown'
import {updateItem} from '../actions'
const mapStateToProps = (state)=>({
    labels:state.labels
})

const mapDispatchToProps = (dispatch)=>({
    assignLabel: (toDoItem)=>dispatch(updateItem(toDoItem))
})
const LabelAdderDropDownContainer = connect(mapStateToProps, mapDispatchToProps)(LabelAdderDropDown);

export default LabelAdderDropDownContainer;