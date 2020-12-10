import { connect } from 'react-redux'
import AddLabelButton from '../components/AddLabelButton'
import { addLabel } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    addLabel: (label) => dispatch(addLabel(label))
})

const AddLabelButtonContainer = connect(null, mapDispatchToProps)(AddLabelButton);

export default AddLabelButtonContainer;