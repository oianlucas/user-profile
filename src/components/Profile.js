import React, { useState } from 'react';

function Profile({ user }) {
  const [activeTab, setActiveTab] = useState('contact');

  // Function to create the VCF file content
  const createVCF = () => {
    if (user) {
      const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${user.name}
EMAIL:${user.contact.email}
TEL:${user.contact.phone}
URL:${user.contact.website}
END:VCARD
      `;
      return vCard;
    }
    return '';
  };

  // Function to trigger VCF file download
  const downloadVCF = () => {
    const vCard = createVCF();
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${user.name.replace(' ', '_')}.vcf`;  // filename format
    link.click();
  };

  return (
    <div className="container">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="profile-img"
        />
        <div className="name">{user.name}</div>
        <button className="add-contact-btn" onClick={downloadVCF}>+Add Contact</button>
      </div>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Info
        </button>
        <button
          className={`tab-button ${activeTab === 'company' ? 'active' : ''}`}
          onClick={() => setActiveTab('company')}
        >
          Company Info
        </button>
        <button
          className={`tab-button ${activeTab === 'socials' ? 'active' : ''}`}
          onClick={() => setActiveTab('socials')}
        >
          Socials
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'contact' && (
          <>
            <div className="field">
              <div className="field-icon">📞</div>
              <div className="field-details">
                <div className="field-name">Phone</div>
                <div className="field-content">
                  <a href={`tel:${user.contact.phone}`} className="no-style-link">{user.contact.phone}</a>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="field-icon">📧</div>
              <div className="field-details">
                <div className="field-name">Email</div>
                <div className="field-content">
                  <a href={`mailto:${user.contact.email}`} className="no-style-link">{user.contact.email}</a>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="field-icon">🌐</div>
              <div className="field-details">
                <div className="field-name">Website</div>
                <div className="field-content">
                  <a href={user.contact.website} target="_blank" rel="noopener noreferrer" className="no-style-link">
                    {user.contact.website}
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'company' && (
          <>
            <div className="field">
              <div className="field-icon">🏢</div>
              <div className="field-details">
                <div className="field-name">Company</div>
                <div className="field-content">{user.company.name}</div>
              </div>
            </div>
            <div className="field">
              <div className="field-icon">💼</div>
              <div className="field-details">
                <div className="field-name">Profession</div>
                <div className="field-content">{user.company.profession}</div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'socials' && (
          <>
            <div className="field">
              <div className="field-icon">💬</div>
              <div className="field-details">
                <div className="field-name">WhatsApp</div>
                <div className="field-content">
                  <a href={`https://wa.me/${user.socials.whatsapp}`} target="_blank" rel="noopener noreferrer" className="no-style-link">
                    {user.socials.whatsapp}
                  </a>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="field-icon">📸</div>
              <div className="field-details">
                <div className="field-name">Instagram</div>
                <div className="field-content">
                  <a href={`https://instagram.com/${user.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="no-style-link">
                    {user.socials.instagram}
                  </a>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="field-icon">📘</div>
              <div className="field-details">
                <div className="field-name">Facebook</div>
                <div className="field-content">
                  <a href={`https://facebook.com/${user.socials.facebook}`} target="_blank" rel="noopener noreferrer" className="no-style-link">
                    {user.socials.facebook}
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
