import { cloneElement, Children } from "react";
const Modal = ({ children, closePopup }: any) => {
  if (Children.toArray(children).length > 1)
    throw Error("Only accepts single children");

  return (
    <div className="backdrop" onClick={closePopup}>
      <div className="modal">
        {cloneElement(children, { closePopup }, null)}
      </div>
    </div>
  );
};

export default Modal;
