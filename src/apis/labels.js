import api from './api';

export const addLabel = (label) => {
    return api.post('/labels', label);
}

export const getAllLabels = () => {
    return api.get('/labels');
}
export const deleteLabel = (labelID) => {
    return api.delete('/labels/' + labelID)
}

export const updateLabel = (label) => {
    const labelWithoutID = {description: label.description, color: label.color}
    return api.put('/labels/' + label.id, labelWithoutID);
}