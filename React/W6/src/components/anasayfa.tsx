import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Anasayfa = () => {
  return (
    <>
      <div>Anasayfa</div>
      <Link to="/hakkimizda">
        <Button variant="primary">Hakkımızda</Button>
        <Button variant="secondary">Hakkımızda</Button>
        <Button variant="success">Hakkımızda</Button>
      </Link>
    </>
  );
};
