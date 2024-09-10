// import React, { useState } from 'react';

// // кастомный хук для отработки открытия попапа
// // и его закрытие по оверлею, иконке и кнопке esc
// export default function usePopupOpen() {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [isOpenPopup, setIsOpenPopup] = React.useState(false);

//   const handleTitleClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   const handleOpenPopup = () => {
//     setIsOpenPopup(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const handleClosePopup = React.useCallback(() => {
//     setIsOpenPopup(false);
//     setActiveIndex(1);
//     document.body.style.overflow = 'auto';
//   }, []);

//   React.useEffect(() => {
//     function closeByEscape(evt: KeyboardEvent) {
//       if (evt.key === 'Escape') {
//         handleClosePopup();
//       }
//     }

//     function closeByOverlayClick(evt: MouseEvent) {
//       const target = evt.target as HTMLElement;
//       if (
//         target.classList.contains('popup') ||
//         target.classList.contains('button__close') ||
//         target.classList.contains('svg-close')
//       ) {
//         handleClosePopup();
//       }
//     }

//     if (isOpenPopup) {
//       document.addEventListener('keydown', closeByEscape);
//       document.addEventListener('click', closeByOverlayClick);
//     }

//     return () => {
//       document.removeEventListener('keydown', closeByEscape);
//       document.removeEventListener('click', closeByOverlayClick);
//     };
//   }, [isOpenPopup, handleClosePopup]);

//   return {
//     activeIndex,
//     isOpenPopup,
//     handleTitleClick,
//     handleOpenPopup,
//     handleClosePopup,
//   };
// }
