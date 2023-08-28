import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${className} footer d-flex flex-column flex-md-row px-4`}
    >
      <div className="d-flex flex-column flex-sm-row">
        <div>
          © {new Date().getFullYear()} All rights reserved.
          <span className="d-none d-sm-inline">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
        <div>
          <span>
            <Link to="">CodeX Copyright 2023</Link>
          </span>
        </div>
      </div>
      <div className="footer-grow flex-grow-1" />
     
    </footer>
  );
}
