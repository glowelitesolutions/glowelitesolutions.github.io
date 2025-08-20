import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './MeetTheCeoModal.css';

const modalRoot = document.getElementById('modal-root') || document.body;

function MeetTheCeoModal({ isOpen, onClose, children }) {
  const overlayRef = useRef();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <div className="modal-content" role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default MeetTheCeoModal;
