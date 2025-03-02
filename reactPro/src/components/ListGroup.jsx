import {useState} from 'react';
const ListGroup = ({props:{name,age}}) => {
  const items = ["New York", "Chennai", "Dubai"];
  const [selectedIndex,setSelectedIndex]=useState(-1)

  return (
    <>
      <ul className="list-group">
        <h2>List</h2>
        {age}
        {items.map((item,index) => (
          <li className={ selectedIndex===index? 'list-group-item active' :'list-group-item'} key={item} onClick={()=>setSelectedIndex(index)} >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
