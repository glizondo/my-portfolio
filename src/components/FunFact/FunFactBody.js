import "../../Styles.css";
import { useState, useEffect } from "react";
import facts from "../../FunFactsData";

function FunFactBody() {
  const [currentFact, setCurrentFact] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [degrees, setDegrees] = useState(0);

  const fetchRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setCurrentFact(facts[randomIndex].fact);
  };

  const startSpin = () => {
    setIsSpinning(true);
    setHasSpun(false);

    const randomDegrees = Math.floor(Math.random() * 500) + 500;
    setDegrees(randomDegrees);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      fetchRandomFact();
    }, 3000);
  };

  useEffect(() => {
    if (hasSpun) {
      fetchRandomFact();
    }
  }, [hasSpun]);

  return (
    <div className="about-body">
      {hasSpun}
      <div className="about-content">
        <h2>Fun Fact!</h2>
        <div
          className={`wheel ${isSpinning ? "spinning" : ""}`}
          style={{
            transform: `rotate(${degrees}deg)`,
          }}
          onClick={startSpin}
        >
          <p>{isSpinning ? "Spinning..." : "Spin me!"}</p>
        </div>
        {hasSpun && <p>Did you know that... <br/>{currentFact}</p>}
      </div>
    </div>
  );
}

export default FunFactBody;
