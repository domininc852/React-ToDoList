import { connect } from 'react-redux'
import LabelGroup from '../components/LabelGroup'
import { updateItem } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    deleteLabel: (toDoItem) => dispatch(updateItem(toDoItem))
})

const LabelGroupContainer = connect(null, mapDispatchToProps)(LabelGroup);

export default LabelGroupContainer;