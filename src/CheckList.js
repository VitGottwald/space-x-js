import React, { useState, useEffect, useCallback } from "react";

const checkList = ["BOOSTER", "RETRO", "FIDO", "GUIDANCE"];
const initialStatus = checkList.map(() => false);
const isChecked = item => item === true;
const flipItem = (index, status) =>
  status.map((item, i) => (i === index ? !item : item));

function CheckList({ onComplete }) {
  const [status, setStatus] = useState(initialStatus);
  const toggleItem = useCallback(index => {
    setStatus(status => flipItem(index, status));
  }, []);

  useEffect(() => {
    onComplete(status.every(isChecked));
  }, [status, onComplete]);

  return (
    <ul>
      {checkList.map((name, index) => (
        <CheckListItem
          key={index}
          text={name}
          checked={status[index]}
          onClick={() => toggleItem(index)}
        />
      ))}
    </ul>
  );
}

function CheckListItem({ checked, text, onClick }) {
  return (
    <li onClick={onClick}>
      {text} {checked ? "✅" : "❌"}
    </li>
  );
}

export default CheckList;
