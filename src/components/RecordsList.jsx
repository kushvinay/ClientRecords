import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecord, updateRecord } from '../redux/actions/recordActions';

const RecordsList = () => {
    const dispatch = useDispatch();
    const { records } = useSelector((state) => state);
    const [isEditing, setIsEditing] = useState(false);
    const [editedRecord, setEditedRecord] = useState(null);

    const handleDelete = (id) => {
        dispatch(deleteRecord(id)); // Dispatch delete action
    };

    const handleEdit = (record) => {
        setIsEditing(true);
        setEditedRecord(record);
    };

    const handleSaveEdit = () => {
        dispatch(updateRecord(editedRecord)); // Dispatch update action
        setIsEditing(false); // Close the edit form
        setEditedRecord(null); // Reset the edited record
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRecord((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className='max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>
                Client Records
            </h2>

            {/* Records List */}
            <ul className='space-y-4'>
                {records.map((record) => (
                    <li
                        key={record.id}
                        className='flex items-center justify-between p-4 bg-white shadow rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out'
                    >
                        {isEditing && editedRecord?.id === record.id ? (
                            <div className='flex-1'>
                                <input
                                    type='text'
                                    name='name'
                                    value={editedRecord.name}
                                    onChange={handleInputChange}
                                    className='p-2 border border-gray-300 rounded-md'
                                />
                                <input
                                    type='email'
                                    name='email'
                                    value={editedRecord.email}
                                    onChange={handleInputChange}
                                    className='p-2 border border-gray-300 rounded-md mt-2'
                                />
                                <button
                                    onClick={handleSaveEdit}
                                    className='ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className='flex-1'>
                                    <p className='text-lg font-semibold text-gray-800'>
                                        {record.name}
                                    </p>
                                    <p className='text-sm text-gray-600'>
                                        {record.email}
                                    </p>
                                </div>
                                <div className='space-x-3'>
                                    <button
                                        onClick={() => handleEdit(record)}
                                        className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(record.id)}
                                        className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordsList;
