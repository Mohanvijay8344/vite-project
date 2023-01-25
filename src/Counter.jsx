import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from '@mui/material/Badge';

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dis, setDis] = useState(0);
  return (
    <div className="button">
      <IconButton aria-label="like movie" onClick={() => setLike(like + 1)} color="secondary"><Badge color="secondary" badgeContent={like} max={999}>👍</Badge></IconButton>
      <IconButton aria-label="dis like" onClick={() => setDis(dis + 1)} color="error"><Badge color="error" badgeContent={dis} max={999}>👎</Badge></IconButton>
    </div>
  );
}
