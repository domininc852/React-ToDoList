import { connect } from 'react-redux'
import AddLabelButton from '../components/AddLabelButton'
import { addLabel } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    addLabel: (toDoItem) => dispatch(addLabel(toDoItem))
})

const AddLabelContainer = connect(null, mapDispatchToProps)(AddLabelButton);

export default AddLabelContainer;