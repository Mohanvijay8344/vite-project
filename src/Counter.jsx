import { useState } from "react";

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dis, setDis] = useState(0);
  return (
    <div className="button">
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDis(dis + 1)}>👎 {dis}</button>
    </div>
  );
}
