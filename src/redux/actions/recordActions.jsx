export const ADD_RECORDS = 'ADD_RECORDS';
export const DELETE_RECORD = 'DELETE_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const SEARCH_RECORDS = 'SEARCH_RECORDS';

export const addRecords = (newRecords) => ({
    type: ADD_RECORDS,
    payload: newRecords,
});

export const deleteRecord = (id) => ({
    type: DELETE_RECORD,
    payload: id,
});

export const updateRecord = (updatedRecord) => ({
    type: UPDATE_RECORD,
    payload: updatedRecord,
});

export const searchRecords = (searchTerm) => ({
    type: SEARCH_RECORDS,
    payload: searchTerm,
});
