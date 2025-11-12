const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

function ProductCategoryRow({category}){
  return(
    <tr colSpan={2}>
      <th>
        {category}
      </th>
    </tr>
  );
}

function ProductRow({product}){
  const name = product.stocked ? product.name :  <span style={{color: 'red'}}> {product.name} </span>
  return(
    <tr>
      <td key={product.name}> { name }</td>
      <td key={product.price}> {product.price }</td>
    </tr>
  )
}

function ProductTable({products}){
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if(lastCategory != product.category){
      rows.push(
        <ProductCategoryRow
        category = {product.category}
        key = {product.name}
        />
      )
    }

    rows.push(
      <ProductRow
      product = {product}
      key = {product.name}/>
    )

    lastCategory = product.category; })

    return(
        <table>
          <thead colSpan="2"> 
            <th> Name </th >
            <th> Price </th>
          </thead>
          {rows}
        </table>
      );
  }

function SearchableBar(){
  return(
    <form>
      <input type="text" placeholder="Search..." />
      <p> <input type="checkbox" /> Show only stocked items</p>
    </form>
  )
}

function FilterableTable(){
  return(
    <>
    <SearchableBar />
    <ProductTable products={PRODUCTS} />
    </>
    
  )
}

export default function App(){
  return(
    <FilterableTable />
  );
}