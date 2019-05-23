import React, { useState, useEffect, useCallback } from "react";

const checkList = ["BOOSTER", "FIDO", "GUIDANCE"];
const initialStatus = checkList.map(() => false);
const isChecked = item => item === true;
const flipItem = (index, status) =>
  status.map((item, i) => (i === index ? !item : item));

const CheckList = ({ onChange }) => {
  const [status, setStatus] = useState(initialStatus);
  const completed = status.every(isChecked);

  useEffect(() => {
    onChange(completed);
  }, [onChange, completed]);

  return (
    <ul>
      {checkList.map((name, index) => (
        <CheckListItem
          key={index}
          text={name}
          checked={status[index]}
          onClick={() => setStatus(flipItem(index, status))}
        />
      ))}
    </ul>
  );
};

const CheckListItem = ({ checked, text, onClick }) => {
  return (
    <li onClick={onClick}>
      {text} {checked ? "✅" : "❌"}
    </li>
  );
};

export default CheckList;
