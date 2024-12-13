// src/components/DocumentApproval.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentApproval = () => {
    const [documents, setDocuments] = useState([]);
    const [users, setUsers] = useState([]);
    const [documentName, setDocumentName] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const result = await axios.get('http://localhost:5000/users');
        setUsers(result.data.filter(user => user.status === 'Approved'));
    };

    const handleCreateDocument = async () => {
        const newDocument = { name: documentName, users: selectedUsers };
        await axios.post('http://localhost:5000/documents', newDocument);
        setDocuments([...documents, newDocument]);
        setDocumentName('');
        setSelectedUsers([]);
    };

    return (
        <div>
            <h2>Document Approval</h2>
            <input 
                type="text" 
                placeholder="Document Name" 
                value={documentName} 
                onChange={(e) => setDocumentName(e.target.value)} 
            />
            <select multiple onChange={(e) => setSelectedUsers([...e.target.selectedOptions].map(option => option.value))}>
                {users.map(user => (
                    <option key={user._id} value={user.username}>{user.username}</option>
                ))}
            </select>
            <button onClick={handleCreateDocument}>Create Document</button>

            <h3>Documents</h3>
            <ul>
                {documents.map((doc, index) => (
                    <li key={index}>{doc.name} - Users: {doc.users.join(', ')}</li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentApproval;
