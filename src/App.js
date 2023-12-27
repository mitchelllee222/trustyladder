import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify'; // Corrected import
import { withAuthenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <ThemeProvider>
      <div>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
