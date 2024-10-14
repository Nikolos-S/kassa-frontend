import { I18nextProvider } from 'react-i18next';
import { App } from './App.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import { SessionProvider } from './context/SessionProvider.jsx';
import { KeyDownProvider } from './context/KeyDownProvider.js';
import i18n from './locales/i18n';

const RunApp: React.FC = () => {

  return (
    <KeyDownProvider>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <SessionProvider>
            <App />
          </SessionProvider>
        </AuthProvider>
      </I18nextProvider>
    </KeyDownProvider>
  );
};

export { RunApp };