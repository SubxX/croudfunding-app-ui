import { MouseEvent } from "react";
import Main from "./sub-components/Main";
import { IoMdClose } from "react-icons/io";

const BackProjectModal = ({ closePopup }: any) => {
  const preventClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  return (
    <Main
      className="back-project-modal text-left relative"
      onClick={preventClose}
    >
      <button
        aria-label="close popup"
        className="close-popup"
        onClick={closePopup}
      >
        <IoMdClose size={24} />
      </button>
      <p>Back this proejct</p>
      <span>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser in the
        world ?
      </span>
    </Main>
  );
};

export default BackProjectModal;
