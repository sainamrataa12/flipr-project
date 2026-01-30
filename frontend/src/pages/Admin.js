import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [newsletters, setNewsletters] = useState([]);

  const [projectForm, setProjectForm] = useState({ name: '', description: '', image: null });
  const [clientForm, setClientForm] = useState({ name: '', designation: '', description: '', image: null });

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = () => {
    axios.get('http://localhost:5000/api/projects').then(res => setProjects(res.data));
    axios.get('http://localhost:5000/api/clients').then(res => setClients(res.data));
    axios.get('http://localhost:5000/api/contact').then(res => setContacts(res.data));
    axios.get('http://localhost:5000/api/newsletter').then(res => setNewsletters(res.data));
  };

  const handleProjectSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', projectForm.name);
    formData.append('description', projectForm.description);
    formData.append('image', projectForm.image);

    axios.post('http://localhost:5000/api/projects', formData)
      .then(() => { alert('Project added!'); setProjectForm({ name: '', description: '', image: null }); fetchAll(); });
  };

  const handleClientSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', clientForm.name);
    formData.append('designation', clientForm.designation);
    formData.append('description', clientForm.description);
    formData.append('image', clientForm.image);

    axios.post('http://localhost:5000/api/clients', formData)
      .then(() => { alert('Client added!'); setClientForm({ name: '', designation: '', description: '', image: null }); fetchAll(); });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Panel</h1>

      <h2>Add Project</h2>
      <form onSubmit={handleProjectSubmit}>
        <input placeholder="Name" value={projectForm.name} onChange={e => setProjectForm({ ...projectForm, name: e.target.value })} required />
        <input placeholder="Description" value={projectForm.description} onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} required />
        <input type="file" onChange={e => setProjectForm({ ...projectForm, image: e.target.files[0] })} required />
        <button type="submit">Add Project</button>
      </form>

      <h2>Add Client</h2>
      <form onSubmit={handleClientSubmit}>
        <input placeholder="Name" value={clientForm.name} onChange={e => setClientForm({ ...clientForm, name: e.target.value })} required />
        <input placeholder="Designation" value={clientForm.designation} onChange={e => setClientForm({ ...clientForm, designation: e.target.value })} required />
        <input placeholder="Description" value={clientForm.description} onChange={e => setClientForm({ ...clientForm, description: e.target.value })} required />
        <input type="file" onChange={e => setClientForm({ ...clientForm, image: e.target.files[0] })} required />
        <button type="submit">Add Client</button>
      </form>

      <h2>All Contacts</h2>
      <ul>{contacts.map(c => <li key={c._id}>{c.fullName} - {c.email} - {c.mobile} - {c.city}</li>)}</ul>

      <h2>Newsletter Subscribers</h2>
      <ul>{newsletters.map(n => <li key={n._id}>{n.email}</li>)}</ul>
    </div>
  );
};

export default Admin;
