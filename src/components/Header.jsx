import React from "react";

const Header = () => {
  return (
    <header 
      className="shadow" 
      style={{
        borderRadius: "66px",
        height: "90px",
        minWidth: "320px",
        width: "85%",
        margin: "25px auto",
        boxSizing: "border-box",
        background: "#F5F5F5", 
        color: "black"
      }}
    >
      <div 
        className="container mx-auto h-100" 
        style={{
          maxWidth: "1600px",
          padding: "0 15px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <h1 className="m-0 fs-3 fw-bold" style={{ marginLeft: "30px", flexShrink: 0, color: "black" }}>BUILD</h1>
        
        <nav className="d-none d-lg-flex align-items-center" style={{ flex: 1, justifyContent: "center" }}>
          <ul className="d-flex list-unstyled mb-0 gap-5" style={{ margin: 0 }}>
            <li><a href="#about" className="text-decoration-none" style={{ color: "black" }}>About us</a></li>
            <li><a href="#projects" className="text-decoration-none" style={{ color: "black" }}>Projects</a></li>
            <li><a href="#agents" className="text-decoration-none" style={{ color: "black" }}>Agents</a></li>
            <li><a href="#services" className="text-decoration-none" style={{ color: "black" }}>Services</a></li>
            <li><a href="#listings" className="text-decoration-none" style={{ color: "black" }}>Listings</a></li>
          </ul>
        </nav>

        <div className="d-none d-lg-flex align-items-center gap-4" style={{ marginRight: "30px", flexShrink: 0 }}>
          <ul className="d-flex list-unstyled mb-0 gap-5" style={{ margin: 0 }}>
            <li className="dropdown" style={{ marginTop: "10px" }}>
              <a 
                href="#other-services" 
                className="text-decoration-none" 
                data-bs-toggle="dropdown"
                style={{ color: "black" }}
              >
                Other services
              </a>
              <ul className="dropdown-menu" style={{ background: "#F5F5F5" }}>
                <li><a href="#service1" className="dropdown-item" style={{ color: "black" }}>Service 1</a></li>
                <li><a href="#service2" className="dropdown-item" style={{ color: "black" }}>Service 2</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-decoration-none" 
                style={{
                  background: "#fefcff",
                  padding: "10px",
                  borderRadius: "30px",
                  border: "1px solid black",
                  color: "black",
                  display: "inline-block",
                  fontWeight: "500"
                }}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <button 
          className="d-lg-none btn btn-outline-dark ms-auto" 
          data-bs-toggle="collapse" 
          data-bs-target="#mobileMenu"
          style={{
            borderRadius: "33px",
            marginRight: "30px"
          }}
        >
          Menu
        </button>
      </div>

      <div className="collapse d-lg-none" id="mobileMenu" style={{
        borderRadius: "0 0 66px 66px",
        marginTop: "-25px",
        paddingTop: "25px",
        paddingBottom: "15px",
        background: "#F5F5F5"
      }}>
        <div className="container" style={{ maxWidth: "1600px" }}>
          <ul className="list-unstyled py-2">
            <li className="py-2"><a href="#about" className="text-decoration-none" style={{ color: "black" }}>About us</a></li>
            <li className="py-2"><a href="#projects" className="text-decoration-none" style={{ color: "black" }}>Projects</a></li>
            <li className="py-2"><a href="#agents" className="text-decoration-none" style={{ color: "black" }}>Agents</a></li>
            <li className="py-2"><a href="#services" className="text-decoration-none" style={{ color: "black" }}>Services</a></li>
            <li className="py-2"><a href="#listings" className="text-decoration-none" style={{ color: "black" }}>Listings</a></li>
            <li className="py-2" style={{ marginTop: "10px" }}><a href="#other-services" className="text-decoration-none" style={{ color: "black" }}>Other services</a></li>
            <li className="py-2">
              <a 
                href="#contact" 
                className="text-decoration-none" 
                style={{
                  background: "#fefcff",
                  padding: "10px",
                  borderRadius: "30px",
                  border: "1px solid black",
                  color: "black",
                  display: "inline-block"
                }}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;