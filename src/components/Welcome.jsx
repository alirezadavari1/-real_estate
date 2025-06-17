import React from 'react';
import './Welcome.css';
import welcomeImage from '../../img/2aad0e192263b5d9f0fecd850eb7e959.png';
import backgroundImage from '../../img/c1630d3c831da668a3e6c86410ce859a.png';

export default function Welcome() {
  return (
    <div className="container-fluid welcome-container" style={{
      background: `linear-gradient(90deg, #C1DEE8 0%, #FBD9B9 100%), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'overlay',
      paddingTop: '40px',
      borderRadius:'15px',
    }}>
      <div className="row flex-row-reverse">
        {/* بخش عکس - 70% */}
        <div className="col-md-8 p-0 d-flex justify-content-center" style={{
          overflow: 'hidden',
          marginTop: '-100px',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="welcome-image" style={{
            width: '88%',
            height: '88%',
            transform: 'scaleX(-1)',
            overflow: 'hidden',
          }}>
            <img 
              src={welcomeImage} 
              alt="Realstate" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        
        {/* بخش متن و فرم - 30% */}
        <div className="col-md-4 d-flex align-items-center" style={{
            marginBottom: '20%'
        }}>
          <div className="welcome-content p-4" dir="ltr" style={{
            borderRadius: '12px',
            margin: '20px',
            marginTop: '40px'
          }}>
            <h6 className="welcome-subtitle">Welcome to Realstate</h6>
            <h1 className="welcome-title">Manage Your<br />Property</h1>
            <h6 className="welcome-description">
              Your will have everything nearby supermarket, buses, station, the carmen neighborhood, etc
            </h6>
            <div className="welcome-form mt-3" style={{ position: 'relative' }}>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email" 
                style={{
                  border: '1px solid #ced4da',
                  borderRadius: '30px',
                  paddingRight: '120px', // فضای کافی برای دکمه
                  height: '50px'
                }}
              />
              <button 
                className="btn btn-primary" 
                type="button" 
                style={{
                  borderRadius: '30px',
                  backgroundColor: '#161718 ',
                  border: 'none',
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                  height: '40px',
                  width: '110px',
                  zIndex: 2
                }}
              >
                Get a Quote
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}