import { useState } from "react";
import DonateCard from "./sub-components/DonateCard";

const BackProjectModal = ({ closePopup }: any) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="back-project-modal text-left">
      <p className="title">Back this project</p>
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
          closePopup={closePopup}
        />
      ))}
    </div>
  );
};

export default BackProjectModal;
