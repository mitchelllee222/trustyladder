import React, { useState } from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Hub } from 'aws-amplify/utils';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarHeader2, HeroLayout1, MarketingFooterBrand, MarketingPricing , ContactUs, ContactUsCreateForm, studioTheme, Dashboard } from './ui-components';
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider, Authenticator  } from "@aws-amplify/ui-react";
import awsExports from './aws-exports';
import ReactModal from 'react-modal';


Amplify.configure(awsExports);

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'hidden', // Changed to hidden to remove scrollbar
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    width: 'auto', // Auto-adjust width
    height: 'auto', // Auto-adjust height
    maxWidth: '90%', // Maximum width
    maxHeight: '90%', // Maximum height
  }
};

function App() {
  Hub.listen('auth', ({ payload }) => {
    switch (payload.event) {
      case 'signedIn':
        console.log('user have been signedIn successfully.');
        break;
      case 'signedOut':
        console.log('user have been signedOut successfully.');
        break;
      case 'tokenRefresh':
        console.log('auth tokens have been refreshed.');
        break;
      case 'tokenRefresh_failure':
        console.log('failure while refreshing auth tokens.');
        break;
      case 'signInWithRedirect':
        console.log('signInWithRedirect API has successfully been resolved.');
        break;
      case 'signInWithRedirect_failure':
        console.log('failure while trying to resolve signInWithRedirect API.');
        break;
      case 'customOAuthState':
        console.log('custom state returned from CognitoHosted UI');
        break;
    }
  });

  //const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const logoImage = <img src="/ladderSmall.png" alt="Logo" className="navbar-logo" />;
  const heroImageStyles = {
    width: '100%',     
    height: 'auto',    
    objectFit: 'cover' 
  };
  const heroImage = <img src="/Home.gif" alt="Hero" style={heroImageStyles} />;
  const [showAuthenticator, setShowAuthenticator] = useState(false);


  return (
    <ThemeProvider  theme={studioTheme}>
      <Router>
        <NavBarHeader2
          //overrides={{"Home":{onClick:()=>homeOnClick}}}
          overrides={{
            "SignIn": { onClick: () => setShowAuthenticator(true) },
            "Pricing": { className: "navbaritem-hover" },
            "Home":{className:"navbaritem-hover"},
            "Contact":{className: "navbaritem-hover"}
        }}
          logo={logoImage}
          width="100%"
          style={{ cursor: 'default', userSelect: 'none'}}
        />
        {showAuthenticator && (
          <ReactModal
            isOpen={showAuthenticator}
            onRequestClose={() => setShowAuthenticator(false)}
            style={modalStyle}
          >
            <ThemeProvider theme={studioTheme}>
              <Authenticator>
                {({ signOut, user }) => (
                  user && <Dashboard />
                )}
              </Authenticator>
            </ThemeProvider>
          </ReactModal>
        )}
        <Routes>
          <Route exact path="/" element={<main><HeroLayout1 heroImage={heroImage} width="100%" /></main>} />
          <Route path="/pricing" element={<main><MarketingPricing width="100%" /></main>} />
          <Route path="/contactus" element={<main><ContactUsCreateForm width="100%" /></main>} />
          <Route path="/dashboard" element={<main><Dashboard width="100%" /></main>} />
        </Routes>
        <MarketingFooterBrand width="100%" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
