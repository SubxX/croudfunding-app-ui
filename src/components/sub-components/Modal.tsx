import { cloneElement, Children, useEffect } from "react";
const Modal = ({ isOpen, children, closePopup }: any) => {
  if (Children.toArray(children).length > 1)
    throw Error("Only accepts single children");

  useEffect(() => {
    const body = document.querySelector("html");
    isOpen
      ? body?.classList.add("overflow-y-hidden")
      : body?.classList.remove("overflow-y-hidden");
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="backdrop" onClick={closePopup}>
      <div className="modal">
        {cloneElement(children, { closePopup }, null)}
      </div>
    </div>
  );
};

export default Modal;
