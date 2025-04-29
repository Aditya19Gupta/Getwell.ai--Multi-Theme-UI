
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">GoGetWell.ai</h3>
            <p className="text-muted-foreground">
              Advanced healthcare technology to improve patient outcomes and provider efficiency.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Features</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Integrations</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Updates</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Team</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Terms</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Compliance</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Developed By Aditya Gupta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
