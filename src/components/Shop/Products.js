import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 9,
    title: "My First Book",
    description: "The first book I wrote.",
  },
  {
    id: "p2",
    price: 8,
    title: "My Second Book",
    description: "The second book I wrote.",
  },
  {
    id: "p3",
    price: 7,
    title: "My Third Book",
    description: "The third book I wrote.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
