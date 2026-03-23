import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { IoClose } from 'react-icons/io5';

const Modal = ({
  title,
  size,
  showAcceptButton,
  showCancelButton,
  acceptButtonLabel = '',
  cancelButtonLabel = '',
  allowOutsideClick = true,
  setModal,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setModal(false), 200);
  };

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
  };

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-black/75 z-50 flex items-center justify-center
        transition-opacity duration-200 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={allowOutsideClick ? handleClose : undefined}
    >
      <div
        className={`relative bg-white rounded-xl p-6 ${sizeClasses[size] || sizeClasses['4xl']} w-full
          transition-all duration-200 ease-in-out
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose
          className="text-white bg-[var(--grey-c2)] rounded-full absolute top-[-8px] right-[-7px] text-xl cursor-pointer fill-white"
          onClick={handleClose}
        />
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div className="">{children}</div>
        {acceptButtonLabel ||
        showAcceptButton ||
        cancelButtonLabel ||
        showCancelButton ? (
          <div className="w-full flex items-center justify-between mt-6">
            {(cancelButtonLabel || showCancelButton) && (
              <Button
                onClick={handleClose}
                className="w-[120px] bg-[var(--grey-c1)] hover:bg-[var(--grey-c1)]/90"
              >
                {cancelButtonLabel || 'Cancelar'}
              </Button>
            )}
            {(acceptButtonLabel || showAcceptButton) && (
              <Button className="w-[120px]">
                {acceptButtonLabel || 'Aceitar'}
              </Button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
