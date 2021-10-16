import { cloneElement, Children, useEffect, MouseEvent } from "react";
import Main from "./Main";
import { IoMdClose } from "react-icons/io";

const Modal = ({
  isOpen,
  closeBtn = true,
  children,
  closePopup,
  className,
}: any) => {
  if (Children.toArray(children).length > 1)
    throw Error("Only accepts single children");

  const preventClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const body = document.querySelector("html");
    if (body) body.style.overflowY = `${isOpen ? "hidden" : "auto"}`;
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="backdrop" onClick={closePopup}>
      <div className={`modal ${className || ""}`} onClick={preventClose}>
        <Main className="relative">
          {closeBtn && <CloseModalButton closePopup={closePopup} />}
          {cloneElement(children, { closePopup }, null)}
        </Main>
      </div>
    </div>
  );
};

export default Modal;

const CloseModalButton = ({ closePopup }: any) => {
  return (
    <button
      aria-label="close popup"
      className="close-popup"
      onClick={closePopup}
    >
      <IoMdClose size={24} />
    </button>
  );
};
