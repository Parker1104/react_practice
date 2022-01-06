const Item = ({ id, note, date, time, deleteData, isSubmit }) => {

 function deleteItem() {
  deleteData(function(prev) {
      isSubmit.current = true
      return prev.filter(item => item.id !== id)
  })
 }

  return (
    <div className="item">
      <div>
        <div>{note}</div>
        <div>{`${date} ${time}`}</div>
      </div>
      <button className="remove" onClick={deleteItem}>删除</button>
    </div>
  );
};

export default Item;
