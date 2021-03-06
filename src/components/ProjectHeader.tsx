import { useState } from "react";
import Main from "./sub-components/Main";
import { FaBookmark } from "react-icons/fa";
import Modal from "./sub-components/Modal";
import BackProjectModal from "./BackProjectModal";
import ThanksModal from "./ThanksModal";

const ProjectHeader = () => {
  const [backUspopup, setbackUsPopup] = useState<boolean>(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const openPopup = () => setbackUsPopup(true);
  const closePopup = (e: any, success = false) => {
    setbackUsPopup(false);
    if (success) setSuccessPopup(true);
  };
  const closeSuccessPopup = () => setSuccessPopup(false);

  return (
    <Main className="text-center project-header relative">
      <div className="project-logo">
        <svg width="56" height="56">
          <g fill="none" fillRule="evenodd">
            <circle fill="#000" cx="28" cy="28" r="28" />
            <g fillRule="nonzero">
              <path
                d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                fill="#444"
              />
              <path
                d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                fill="#FFF"
              />
            </g>
          </g>
        </svg>
      </div>

      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p className="text-gray">
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div className="actions flex items-center justify-between">
        <button className="btn btn-default" onClick={openPopup}>
          Back this project
        </button>
        <button className="btn btn-gray btn-icon">
          <div className="icon">
            <FaBookmark />
          </div>
          <span>Bookmark</span>
        </button>
      </div>

      <Modal isOpen={backUspopup} closePopup={closePopup}>
        <BackProjectModal />
      </Modal>

      <Modal
        isOpen={successPopup}
        closePopup={closeSuccessPopup}
        className="success-popup-root"
        closeBtn={false}
      >
        <ThanksModal />
      </Modal>
    </Main>
  );
};

export default ProjectHeader;
