import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
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
      <Modal.Footer className="justify-content-center">
        <Button variant="success" onClick={() => onHide()}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TopCenteredModal;
