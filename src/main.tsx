import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Modal from './component/Modal'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Modal/>
  </StrictMode>
)
