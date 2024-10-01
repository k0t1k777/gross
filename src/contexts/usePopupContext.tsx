import { useContext } from 'react';
import { PopupContext } from 'src/contexts/PopupContext';

export const usePopupContext = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopupContext must be used within a PopupProvider');
  }
  return context;
};
