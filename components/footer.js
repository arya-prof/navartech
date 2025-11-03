class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          background-color: #000;
          color: white;
          padding: 3rem 0 1.5rem;
          margin-top: 4rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }
        .footer-section p {
          opacity: 0.8;
          line-height: 1.8;
          font-size: 0.95rem;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        .footer-section ul li a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.2s ease;
          font-size: 0.95rem;
        }
        .footer-section ul li a:hover {
          opacity: 1;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.6;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      </style>
      <div class="container">
        <div class="footer-section">
          <h3>Navar Technology</h3>
          <p>Advanced IoT solutions for smart buildings, homes, and green spaces. Making technology work for you.</p>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Smart Home</a></li>
            <li><a href="#">Smart Building</a></li>
            <li><a href="#">Smart Irrigation</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: info@navartech.com<br>
          Phone: +123 456 7890<br>
          Address: Tech Street 123, Tech City</p>
        </div>
      </div>
      <div class="copyright">
        &copy; ${new Date().getFullYear()} Navar Technology. All rights reserved.
      </div>
    `;
    
    // Initialize feather icons after shadow DOM is attached
    setTimeout(() => {
      if (typeof feather !== 'undefined') {
        feather.replace({ root: this.shadowRoot });
      }
    }, 100);
  }
}

customElements.define('custom-footer', CustomFooter);
