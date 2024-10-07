import { App } from './App.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';

const RunApp: React.FC = () => {

  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export { RunApp };