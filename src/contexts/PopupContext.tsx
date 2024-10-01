import React, { createContext } from 'react';

interface PopupContextType {
  isOpenPopup: boolean;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  isStickyButton: boolean;
  setStickyButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopupContext = createContext<PopupContextType | undefined>(
  undefined
);

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);
  const [isStickyButton, setStickyButton] = React.useState<boolean>(false);

  return (
    <PopupContext.Provider
      value={{ isOpenPopup, setIsOpenPopup, isStickyButton, setStickyButton }}
    >
      {children}
    </PopupContext.Provider>
  );
};
