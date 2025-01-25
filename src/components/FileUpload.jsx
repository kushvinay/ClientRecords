import React from 'react';
import { useDispatch } from 'react-redux';
import { addRecords } from '../redux/actions/recordActions';
import { removeDuplicateEmails } from '../services/recordService';

const FileUpload = () => {
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const jsonData = JSON.parse(reader.result);
          const uniqueData = removeDuplicateEmails(jsonData);
          dispatch(addRecords(uniqueData)); // Dispatch action to add records to Redux
        } catch (e) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="my-4 p-4 max-w-lg mx-auto">
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-800 file:bg-blue-600 file:text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer hover:file:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default FileUpload;
