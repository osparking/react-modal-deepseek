import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import "./App.css";

const TopCenteredModal = ({ show, onHide, children, title }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      style={{ display: "block" }}
      dialogClassName="top-centered-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default TopCenteredModal;
