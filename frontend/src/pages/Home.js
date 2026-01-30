import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/projectCard';
import ClientCard from '../components/ClientCard';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contactForm, setContactForm] = useState({ fullName: '', email: '', mobile: '', city: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // Fetch projects and clients
  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then(res => setProjects(res.data));
    axios.get('http://localhost:5000/api/clients').then(res => setClients(res.data));
  }, []);

  const handleContactSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', contactForm)
      .then(() => alert('Contact submitted!'))
      .catch(err => console.log(err));
  };

  const handleNewsletterSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/newsletter', { email: newsletterEmail })
      .then(() => alert('Subscribed!'))
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Our Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects.map(p => <ProjectCard key={p._id} project={p} />)}
      </div>

      <h1>Happy Clients</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {clients.map(c => <ClientCard key={c._id} client={c} />)}
      </div>

      <h1>Contact Form</h1>
      <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <input placeholder="Full Name" value={contactForm.fullName} onChange={e => setContactForm({ ...contactForm, fullName: e.target.value })} required />
        <input placeholder="Email" value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} required />
        <input placeholder="Mobile" value={contactForm.mobile} onChange={e => setContactForm({ ...contactForm, mobile: e.target.value })} required />
        <input placeholder="City" value={contactForm.city} onChange={e => setContactForm({ ...contactForm, city: e.target.value })} required />
        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>

      <h1>Newsletter Subscription</h1>
      <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <input placeholder="Email" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required />
        <button type="submit" style={{ marginTop: '0.5rem' }}>Subscribe</button>
      </form>
    </div>
  );
};

export default Home;
