import React from 'react';
import FolderTree from './components/FolderTree';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-3">
        <h1>Folder Traversal System</h1>
        <p className="lead">Organize and visualize your files effortlessly</p>
      </header>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-info text-white">
                <h4>Project Ideas</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Enhance folder structure visualization</li>
                  <li className="list-group-item"> Implement a point and click system to unroll the folder structure</li>
                  <li className="list-group-item">Have at least three layers of nestedness in the folder structure</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h4>Current Tasks</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Fetch folder data from API</li>
                  <li className="list-group-item">Display nested folders</li>
                  <li className="list-group-item">Handle folder creation and deletion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <FolderTree />
        </div>
      </div>
    </div>
  );
}

export default App;
