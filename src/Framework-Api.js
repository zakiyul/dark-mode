import React, { useState, useEffect } from "react";
import axios from "axios";

function Framework() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/framework/`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="root ">
      {items.map((item) => (
        <>
          <p key={item.id}>
            {item.name} <br />
            {item.type} <br />
            {item.language}
          </p>
        </>
      ))}
    </div>
  );
}

export default Framework;
