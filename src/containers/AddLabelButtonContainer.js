import { connect } from 'react-redux'
import AddLabelButton from '../components/AddLabelButton'
import { updateItem } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    addLabel: (toDoItem) => dispatch(updateItem(toDoItem))
})

const AddLabelButtonContainer = connect(null, mapDispatchToProps)(AddLabelButton);

export default AddLabelButtonContainer;