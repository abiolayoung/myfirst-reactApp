// import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const getMessage = () => {
   return items.length === 0 ? <p>No item found</p> : null;;
  }

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// we use div to wrap multiple react element or we import fragment and wrap with fragment
// empty angle bracket also work as fragment for fragment other than importing fragment

//rendering list- we dont have for loop in jsx
