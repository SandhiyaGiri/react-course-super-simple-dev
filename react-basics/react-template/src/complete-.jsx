import { useState } from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];



function ProductCategoryRow({product}){
  return(
      <tr>
        <th colSpan={2}>
        {product.category}
        </th>
      </tr>
  );
}

function ProductRow({product}){
  const name = product.stocked ? product.name : <span style={{color:"red"}}> {product.name}</span>

  return(
    <tr>
      <td>
        {name}
      </td>
      <td>
        {product.price}
      </td>
    </tr>
  );
}

function ProductTable({products, filterText, inStock}){
  const rows = [];
  let lastCategory = null;

  const sortedProduct = products.sort((a,b) => {
    if( a.category > b.category) return 1;
    if( a.category < b.category) return -1;

    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0;
  })

  sortedProduct.forEach((product) => {

    if(product.name.toLowerCase().indexOf(
      filterText.toLowerCase()
    ) === -1 ){
      return;
    }

    if(inStock && !product.stocked){
      return;
    }

    if(product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow
        product={product}
        key={product.category}/>
      );
    }
    rows.push(
      <ProductRow
      product={product}
      key={product.name}/>
    )

    lastCategory = product.category;
    
  });

  return(
      <table>
        <thead>
          <tr>
          <th> Name </th>
          <th> Price </th>
          </tr>
        </thead>
        <tbody>{rows} </tbody>
      </table>
    );
}

function SearchBar({filterText,inStock, setFilterText, setInStock}){
  return(
    <form>
      <input type="text" placeholder="Search..." onChange={(e) => setFilterText(e.target.value)} value={filterText}/>
      <p> <input type="checkbox" onChange={(e) => setInStock(e.target.checked)} value={inStock}/> Show only stocked items </p>
    </form>
  );
}

export default function App(){

  const [filterText, setFilterText] = useState("");
  const [inStock, setInStock] = useState(false);

  return(
    <div>
    <SearchBar 
    filterText={filterText}
    inStock={inStock}
    setFilterText={setFilterText}
    setInStock={setInStock}
    />
    <ProductTable products={PRODUCTS}
    filterText={filterText}
    inStock={inStock}
    />
    </div>
  );
}

// export default function App(){
//   return(
//     <FilterableTable 
//     products={PRODUCTS}/>
//   );
// }
