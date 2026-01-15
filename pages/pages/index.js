import React, { useState } from 'react';

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const files = e.target.files;
    if (!files) return;

    setLoading(true);
    const newPhotos = [];

    for (let file of files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        newPhotos.push({
          id: Date.now() + Math.random(),
          src: event.target.result,
          name: file.name
        });
        if (newPhotos.length === files.length) {
          setPhotos([...photos, ...newPhotos]);
          setLoading(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎉 Moris Foto Kick</h1>
      <p>Lade deine Fotos hoch und teile sie!</p>
      
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        style={{ marginBottom: '20px' }}
      />
      
      {loading && <p>⏳ Lädt...</p>}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <img src={photo.src} alt={photo.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <p style={{ fontSize: '12px', marginTop: '5px' }}>{photo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
