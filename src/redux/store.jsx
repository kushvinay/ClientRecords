import { createStore } from 'redux';
import { Provider } from 'react-redux';
import recordReducer from './reducers/recordReducer';

// Load persisted state from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('appState');
        if (serializedState) {
            const parsedState = JSON.parse(serializedState);
            // Ensure that the records key is an array, or fall back to the default initial state
            if (Array.isArray(parsedState.records)) {
                return parsedState;
            }
        }
        return undefined; // If no valid state in localStorage, return undefined
    } catch (e) {
        console.error('Could not load state from localStorage', e);
        return undefined; // In case of any error, fallback to the default state
    }
};

// Save Redux state to localStorage
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('appState', serializedState);
    } catch (e) {
        console.error('Could not save state to localStorage', e);
    }
};

// Initialize the store with persisted state or the default initial state
const persistedState = loadFromLocalStorage();

// Create the Redux store
const store = createStore(recordReducer, persistedState);

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

// ReduxProvider component
const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
