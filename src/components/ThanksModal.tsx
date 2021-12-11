import { BsFillPatchCheckFill } from "react-icons/bs";
const ThanksModal = ({ closePopup }: any) => {
  return (
    <div className="success-popup">
      <BsFillPatchCheckFill size={100} className="text-primary" />
      <p className="title">Thanks for your support</p>
      <div className="content text-gray">
        <span>
          Your pledge bring us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </span>
      </div>
      <button className="btn btn-default" onClick={closePopup}>
        Got it !
      </button>
    </div>
  );
};

export default ThanksModal;
