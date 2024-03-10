import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div id="contact">
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
          <div className={styles.footerCol}>
              <h4>Product</h4>
              <ul>
                <li><Link>Home</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Recipes</Link></li>
                <li><Link>Contact</Link></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                <li><Link>about us</Link></li>
                <li><Link>our services</Link></li>
                <li><Link>privacy policy</Link></li>
                <li><Link>affiliate program</Link></li>
              </ul>
            </div>
            <div className={styles.footerCol} id='contact'>
              <h4>Legal</h4>
              <ul>
                <li><Link>Terms</Link></li>
                <li><Link>Privacy</Link></li>
                <li><Link>Licence</Link></li>
                <li><Link>Cookies</Link></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>follow us</h4>
              <div className={styles.socialLinks}>
                <Link><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></Link>
                <Link><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Link>
                <Link><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Link>
                <Link><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;