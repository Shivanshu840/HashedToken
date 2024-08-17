import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Folder from './Folder';

// Helper function to build folder hierarchy
const buildFolderHierarchy = (folders) => {
  const folderMap = new Map(folders.map(folder => [folder._id, { ...folder, children: [] }]));

  // Build the hierarchy
  const roots = [];
  folderMap.forEach(folder => {
    if (folder.parent) {
      const parent = folderMap.get(folder.parent);
      if (parent) {
        parent.children.push(folder);
      }
    } else {
      roots.push(folder);
    }
  });

  return roots;
};

const FolderTree = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const res = await axios.get('https://hashedtoken.onrender.com/folders/list');
      const hierarchicalFolders = buildFolderHierarchy(res.data);
      setFolders(hierarchicalFolders);
    } catch (err) {
      console.error("Error fetching folders:", err);
    }
  };

  return (
    <div>
      {folders.length > 0 ? (
        folders.map(folder => (
          <Folder key={folder._id} folder={folder} />
        ))
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default FolderTree;
