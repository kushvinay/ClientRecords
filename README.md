# **Client Records Management Application**

A ReactJS-based application to manage client records with features like JSON file upload, pagination, search functionality, and CRUD operations. The application is styled with **Tailwind CSS** and uses **Redux Toolkit** for state management.

---

## **Features**

1. **JSON File Upload**
   - Upload JSON files containing client records.
   - Automatically removes duplicate email addresses.

2. **Search Functionality**
   - Search records by `ID`, `Name`, or `Email`.
   - Real-time search results as you type.

3. **CRUD Operations**
   - **Edit Records**: Modify records with unique email validation.
   - **Delete Records**: Remove records from the list permanently.

4. **Responsive Design**
   - Tailwind CSS ensures the app is mobile-friendly and looks great on all devices.

5. **State Management**
   - Redux Toolkit efficiently handles application state.

---

## **Tech Stack**

- **Frontend**: ReactJS
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS

---

## **Installation**

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/kushvinay/ClientRecords.git
   ```
2. Navigate to the project directory:
   ```bash
   cd client-records-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser:
   ```bash
   http://localhost:3000
   ```

---

## **Usage**

### 1. Upload JSON File
- Click the "Upload" button to upload a JSON file containing client records.
- Ensure the file follows this format:
   ```json
   [
     {
       "id": "1",
       "name": "John Doe",
       "email": "john@example.com"
     },
     {
       "id": "2",
       "name": "Jane Doe",
       "email": "jane@example.com"
     }
   ]
   ```

### 2. Search Records
- Use the search bar to filter records by `ID`, `Name`, or `Email`.

### 3. Edit Records
- Click the "Edit" button to modify a record.
- Ensure the email address is unique; otherwise, a validation error will be displayed.

### 4. Delete Records
- Click the "Delete" button to remove a record permanently.

### 5. Pagination
- Navigate between pages using the pagination controls below the records table.

## **Future Enhancements**

- Add backend support to persist records in a database.
- Implement file validation to check the JSON structure during upload.
- Allow users to configure the number of records per page.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

