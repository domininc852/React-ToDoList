import { connect } from 'react-redux'
import AddLabel from '../components/AddLabel'
import { addLabel } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    addLabel: (toDoItem) => dispatch(addLabel(toDoItem))
})

const AddLabelContainer = connect(null, mapDispatchToProps)(AddLabel);

export default AddLabelContainer;