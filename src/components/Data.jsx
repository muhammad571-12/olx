import React from "react";
function Data({ title, image, desc, Manzil, id }) {
  return (
    <div class="card">
      <img src={image} alt={title} />
      <span>{desc}</span>
      <span>{Manzil}</span>
    </div>
  );
}

export default Data;
