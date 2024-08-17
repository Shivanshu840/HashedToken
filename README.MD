
# File Traversal System

The File Traversal System is a web application built using Node.js for the backend and React.js for the frontend. It allows users to traverse a directory structure, displaying folders and files hierarchically. Users can interact with the folders to view subfolders and files, mimicking a file explorer.


## Features

- Directory Traversal: Users can explore nested directories and view their contents.
- Responsive UI: Built with React.js, the frontend offers an interactive and dynamic user experience.
- Backend API: Node.js and Express power the backend, providing APIs for folder and file operations.


## Tech Stack

**Frontend:** React.js

**Backend:** Node.js, Express

**Database:** MongoDB (if used for storing folder structures)

**Styling:** CSS (or Bootstrap)

## Installation

**Clone the Repository:**

```bash
git clone https://github.com/Shivanshu840/HashedToken.git

cd HashedToken

```

**Backend setup:**


```bash
cd backend
npm install


```
  - **Environment Variables:**

  ```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string


```

- **Start Backend:**

```bash
node app.js

```

**Frontend setup:**

```bash
cd File_traversal_system


```
- **Start Frontend:**

```bash
npm run dev

```

    
## API Reference

#### Get Folder items

```http
Endpoint: GET /folders/list
Description: Retrieves a list of all folders and their subfolders.
```

#### Create a Folder

```http
Endpoint: POST /folders/create-folder
Description: Creates a new folder.
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  Name of the folder |
| `parent`      | `objectID` | **Required**.  Folder of the parent id (optional) |
| `children`      | `Array(objectID)` | **Required**. Hold the childeren Reference |



## Usage/Examples

- Navigate to the root directory of the project.
- Start the backend and frontend as described in the installation section.
- Open your browser and go to http://localhost:5000. use (Postman)
- Start exploring the folder structure.


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please fork the repository and create a pull request with your changes.


## Contact

If you have any questions or issues, feel free to open an issue on GitHub or contact me directly at rajshivanshu544@gmail.com.

