import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import PasswordPage from './PasswordPage';
import './index.css';

const isAuthenticated = localStorage.getItem('authenticated');

render(
  <ThemeProvider>
    {isAuthenticated ? <App /> : <PasswordPage />}
  </ThemeProvider>,
  document.getElementById('root')
);