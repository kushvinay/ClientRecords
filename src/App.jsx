import React from 'react';
import FileUpload from './components/FileUpload';
import RecordsList from './components/RecordsList';
import SearchBar from './components/SearchBar';
import ReduxProvider from './redux/store';

const App = () => {
    return (
        <ReduxProvider>
            <div className='max-w-4xl mx-auto p-6'>
                <h1 className="text-3xl font-bold text-center mb-6">Client Records Management</h1>
                <FileUpload />
                <SearchBar />
                <RecordsList />
            </div>
        </ReduxProvider>
    );
};

export default App;
