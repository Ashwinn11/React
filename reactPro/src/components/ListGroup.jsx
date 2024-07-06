const ListGroup = () => {
  const items = ["New York", "chennai", "Dubai"];
  return (
    <>
      <ul className="list-group">List</ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
};
export default ListGroup;
