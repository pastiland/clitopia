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
  {/*
      <button onClick={() => setOpen(true)}>Open bottom modal</button>
  */}
      <div>
        <a href="javascript:void(0)" onClick={() => setOpen(true)} class="btn btn--action"><div>ACT NOW</div></a>
      </div>
      <BottomModal isOpen={isOpen} onDismiss={() => setOpen(false)}>

        <ModalTitle>Clitopia</ModalTitle>
        <p>You don't own any NFP!</p>
        <br/><br/><br/>

        <ModalCloseTarget>
          <button>Close</button>
        </ModalCloseTarget>
      </BottomModal></>
}
export default Bottom;
