import React from 'react';
import ProductTableRow from './ProductTableRow';

function OrderPage({products}) {
    console.log("products", products)
    return (
        <>
            <h2>Order Page</h2>
            <article>
                <h3>Go ahead and place your order</h3>
                <p>Select any item, and then specify the quantity up to ten</p>
                <table>
                    <caption>Inventory</caption>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Selection</th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) =>
                        <ProductTableRow product={product} key={index}/>
                        )}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default OrderPage;