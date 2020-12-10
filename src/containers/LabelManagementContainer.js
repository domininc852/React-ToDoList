import {connect} from 'react-redux'
import LabelManagement from '../components/LabelManagement'
import {initLabel} from '../actions'

const mapStateToProps = (state)=>({
    labels: state.labels
})

const mapDispatchToProps = (dispatch)=>({
    initLabel: (labels)=>dispatch(initLabel(labels))
})

const LabelManagementContainer = connect(mapStateToProps, mapDispatchToProps)(LabelManagement);

export default LabelManagementContainer;