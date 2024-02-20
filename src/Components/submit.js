import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, Navigate } from "react-router-dom";
import "../App.css";

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    <Navigate to="/register" />;
    setLoading(true);
  };

  return (
    <Link to={"/register"}>
      <Button
        id="mybtn"
        className="mybtn"
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        style={{ width: "20vh", height: "8vh", marginTop: "30px" }}
      >
        <h5>{isLoading ? "Loading…" : "Click To Register"}</h5>
      </Button>
    </Link>
  );
}

export default LoadingButton;
