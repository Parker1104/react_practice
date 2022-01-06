import { useState } from "react";
// **随机数可作为数组的key值
import { v4 } from "uuid";

const Edit = ({ addClick, isSubmit }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) { 
    setTime(e.target.value);
  }

  function addItem() {
    addClick(function (preData) {
      isSubmit.current = true
      console.log('isSubmit.current', isSubmit.current)
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...preData,
      ];
    });
  }

  return (
    <div>
      <h1>备忘录</h1>
      <p>记事：</p>
      <input type="text" value={note} onChange={noteChange}></input>
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange}></input>
      <p>时间：</p>
      <input type="time" value={time} onChange={timeChange}></input>
      <button className="add" onClick={addItem}>
        新 增
      </button>
    </div>
  );
};

export default Edit;
