import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Folder = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="list-group-item border-0">
      <div onClick={handleClick} className="d-flex align-items-center cursor-pointer text-primary font-weight-bold">
        {isOpen ? '📂' : '📁'} <span className="ml-2">{folder.name}</span>
      </div>
      {isOpen && folder.children.length > 0 && (
        <ul className="list-group ml-4">
          {folder.children.map(child => (
            <Folder key={child._id} folder={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Folder;
