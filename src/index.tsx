import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';
import { RunApp } from './init.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RunApp />
  </StrictMode>,
)
