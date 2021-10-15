import { useEffect, useRef } from "react";
import { MdAttachMoney } from "react-icons/md";
const DonateCard = ({ selected, index, setSelected }: any) => {
  const changeSelected = () => {
    setSelected(index);
  };

  return (
    <div
      className={`donate-card ${selected ? "dontate-card-selected" : ""}`}
      onClick={changeSelected}
    >
      <div className="donate-card-body">
        <div className="checkbox"></div>

        <div className="card-title">
          <p>Pledge with no reward</p>
          <span className="text-primary text-xs">No reward</span>
        </div>

        <div className="flex items-center card-extras">
          <p>64</p>
          <span className="text-gray text-xs">left</span>
        </div>

        <div className="card-content text-gray">
          Choose to support us without a reward if you simply believe our
          project. As a backer, you will be signed to receive product updates
          email.
        </div>
      </div>
      {selected && (
        <div className="donate-card-actions">
          <p className="text-gray">Enter your pledge</p>
          <div className="action-btns flex items-center">
            <DonateCardInput initialValue={25} />
            <button className="btn btn-default">Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateCard;

const DonateCardInput = ({ initialValue }: any) => {
  const ioref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ioref.current) {
      ioref.current.focus();
    }
  }, []);

  return (
    <div className="relative donate-card-input">
      <MdAttachMoney size={24} />
      <input
        ref={ioref}
        type="number"
        min={initialValue}
        placeholder={`$ ${initialValue}`}
        defaultValue={initialValue}
      />
    </div>
  );
};
