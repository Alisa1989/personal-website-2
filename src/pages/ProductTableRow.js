import React from "react";
import SelectAmount from "../components/SelectAmount";


function ProductTableRow({product}) {
  return (
    <tr>
      <td>{product.company}</td>
      <td>{product.product}</td>
      <td>{product.price}</td>
      <td>
        <SelectAmount />
    </td>
    </tr>
  );
}

export default ProductTableRow;
