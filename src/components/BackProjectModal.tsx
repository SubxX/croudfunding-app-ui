import { MouseEvent, useState } from "react";
import Main from "./sub-components/Main";
import { IoMdClose } from "react-icons/io";
import DonateCard from "./sub-components/DonateCard";

const BackProjectModal = ({ closePopup }: any) => {
  const [selected, setSelected] = useState(null);

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
      <span className="text-gray">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser in the
        world ?
      </span>
      {[1, 2, 3, 4, 5, 6].map((itm, i) => (
        <DonateCard
          key={itm}
          index={i}
          selected={i === selected}
          setSelected={setSelected}
        />
      ))}
    </Main>
  );
};

export default BackProjectModal;
