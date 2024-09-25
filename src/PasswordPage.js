import { useState, useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import './PasswordPage.css';
import './App.css';

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [{ themeName }] = useContext(ThemeContext)

  const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      const char = str.charCodeAt(i);
      hash = Math.imul(31, hash) + char;
      hash %= 2 ** 32; // Ensure hash is a 32-bit integer
    }
    return hash;
  };

  const checkPassword = () => {
    const correctHash = 1009718248; // Replace with the hash of your actual password

    if (hashCode(password) === correctHash) {
      localStorage.setItem('authenticated', 'true');
      window.location.href = '/';
    } else {
      setError(true);
    }
  };

  return (
    <div id='top' className={`${themeName} app`}>
      <div className='password-container'>
        <h1>Enter Password</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='button' onClick={checkPassword}>Submit</button>
        {error && <p className='error-message'>Incorrect password. Password is on resume.</p>}
      </div>
    </div>
    );
  };

export default PasswordPage;