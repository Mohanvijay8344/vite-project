import { useState } from "react";

export function TicTac() {
  const [val, setVal] = useState("");

  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div style={styles} onClick={() => setVal("X")} className="game">{val}</div>
  );
}
