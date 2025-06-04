interface FooterProps {
  className?: string; // The '?' makes it optional
}

const Footer = ({ className }: FooterProps) => {
  
  return (
    <footer className={`border-t border-border py-6 ${className || ''}`}>
        <div className="container text-center font-minion text-blog-neutral">
          © {new Date().getFullYear()} The Wild Dandelion. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;
