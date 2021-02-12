import React, { useContext, useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const ModalContext = React.createContext();

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const refBody = useRef(null);
  const refContainer = useRef(null);
  const refButton = useRef(null);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    if (showModal) {
      refContainer.current.style.display = "flex";
      refButton.current.style.display = "none";
      refBody.current.style.backgroundColor = "#bbbbbb";
    } else {
      refContainer.current.style.display = "none";
      refButton.current.style.display = "block";
      refBody.current.style.backgroundColor = "white";
    }
  }, [showModal]);
  return (
    <ModalContext.Provider value={{ toggleModal, refContainer }}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="logo" />
          <button className="modal-button" onClick={toggleModal}>
            <ImCross />
          </button>
        </div>
      </aside>
      <div className="container" ref={refBody}>
        <button className="sidebar-button">
          <FaBars size={30} />
        </button>
        <section className="modal-container" ref={refButton}>
          <button className="show-button" onClick={toggleModal}>
            SHOW MODAL
          </button>
        </section>
        <Modal />
      </div>
    </ModalContext.Provider>
  );
};

const Modal = () => {
  const { toggleModal, refContainer } = useContext(ModalContext);
  return (
    <section className="modal-content" ref={refContainer}>
      <h3 style={{ margin: "auto" }}>Modal content</h3>
      <button className="modal-button" onClick={toggleModal}>
        <ImCross />
      </button>
    </section>
  );
};

export default Sidebar;
