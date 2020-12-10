import { connect } from 'react-redux'
import LabelItem from '../components/LabelItem'
import { deleteLabel, updateLabel } from '../actions'

const mapDispatchToProps = (dispatch) => ({
    deleteLabel: (id) => dispatch(deleteLabel(id)),
    updateLabel: (label) => dispatch(updateLabel(label))
})

const LabelItemContainer = connect(null, mapDispatchToProps)(LabelItem);

export default LabelItemContainer;