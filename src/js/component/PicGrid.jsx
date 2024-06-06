import React from 'react';

const photos = [
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  // Add more direct photo URLs as needed
];

const PicGrid = () => {
  return (
    <div className="container">
      <div className="row">
        {photos.map((photo, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={photo} className="card-img-top" alt={`Photo ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicGrid;
