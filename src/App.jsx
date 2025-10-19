import { useState } from "react";
import "./App.css";
import TopCenteredModal from "./TopCenteredModal";
import { Button } from "react-bootstrap";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mt-4 ">
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        모달을 정 중앙에 연다.
      </Button>

      <TopCenteredModal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        title="Top Centered Modal"
      >
        <p>
          이 모달은 너비가 최대 600px 이고, 좌우 중앙과 창의 상변에 표시된다. 
        </p>
        <p>Perfect for notifications, alerts, or important messages!</p>
        <ul>
          <li>Uses Bootstrap styling</li>
          <li>Responsive by default</li>
          <li>Accessible</li>
          <li>Easy to customize</li>
        </ul>
      </TopCenteredModal>
    </div>
  );
};

export default App;
