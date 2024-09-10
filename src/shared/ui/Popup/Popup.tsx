import { Button } from 'src/shared/ui/Button/Button'
import { Icon } from 'src/shared/ui/Icon/Icon'
import 'src/shared/ui/Popup/Popup.scss'

export const Popup = (props: any) => {
  const { isOpen, children, onClosePopup, btnCls } = props

  return (
    isOpen && (
      <section className='popup' aria-label='всплывающая форма'>
        <div className='popup__container'>
          {children}
          <Button className={btnCls} onClick={onClosePopup}>
            <Icon id='closeBtn' className='svg-close' />
          </Button>
        </div>
      </section>
    )
  )
}
