import { connect } from 'react-redux'
import LabelGroup from '../components/LabelGroup'
import { deleteLabel } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    deleteLabel: (toDoItem) => dispatch(deleteLabel(toDoItem))
})

const LabelGroupContainer = connect(null, mapDispatchToProps)(LabelGroup);

export default LabelGroupContainer;