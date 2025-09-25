import * as React from 'react';
import { BottomModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';
import './ModalBottom.css';

/**
 * Renders a white modal that slides up from the bottom and back down when leaving.
 *
 * Has a built-in max-width for larger devices.
 * The max-width for smaller devices is the entire screen.
 */
const Bottom = () => {
  const [isOpen, setOpen] = React.useState(false);
  return <>
      <div>
        <button onClick={() => setOpen(true)} className="btn btn--action"><div>ACT NOW</div></button>
      </div>
      <BottomModal isOpen={isOpen} onDismiss={() => setOpen(false)}>

        <ModalTitle>Clitopia</ModalTitle>
        <p>Join the digital pussy revolution!</p>
        <br/><br/><br/>

        <ModalCloseTarget>
          <button>Close</button>
        </ModalCloseTarget>
      </BottomModal></>
}
export default Bottom;
