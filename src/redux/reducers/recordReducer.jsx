import {
    ADD_RECORDS,
    DELETE_RECORD,
    UPDATE_RECORD,
    SEARCH_RECORDS,
} from '../actions/recordActions';

const initialState = {
    records: [],
    searchTerm: '',
};

const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECORDS:
            return { ...state, records: [...state.records, ...action.payload] };

        case DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter(
                    (record) => record.id !== action.payload,
                ),
            };

        case UPDATE_RECORD:
            return {
                ...state,
                records: state.records.map((record) =>
                    record.id === action.payload.id ? action.payload : record,
                ),
            };

        case SEARCH_RECORDS:
            return { ...state, searchTerm: action.payload };

        default:
            return state;
    }
};

export default recordReducer;
