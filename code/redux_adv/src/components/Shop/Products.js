import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
  {
    id: "p3",
    price: 8,
    title: "My Third Book",
    description: "A thrilling adventure story",
  },
  {
    id: "p4",
    price: 10,
    title: "My Fourth Book",
    description: "A deep dive into science fiction",
  },
  {
    id: "p5",
    price: 7,
    title: "My Fifth Book",
    description: "A collection of short stories",
  },
  {
    id: "p6",
    price: 12,
    title: "The Mystery of the Lost City",
    description: "An exciting mystery novel",
  },
  {
    id: "p7",
    price: 15,
    title: "The Secrets of the Universe",
    description: "A thought-provoking science book",
  },
  {
    id: "p8",
    price: 9,
    title: "Fantasy Realms",
    description: "An epic fantasy adventure",
  },
  {
    id: "p9",
    price: 14,
    title: "Cooking Made Easy",
    description: "A beginner-friendly cookbook",
  },
  {
    id: "p10",
    price: 11,
    title: "The Art of Mindfulness",
    description: "A guide to meditation and self-awareness",
  },
  {
    id: "p11",
    price: 13,
    title: "History's Greatest Battles",
    description: "A deep dive into historical warfare",
  },
  {
    id: "p12",
    price: 16,
    title: "The Ultimate Fitness Guide",
    description: "A book on health, fitness, and nutrition",
  },
  {
    id: "p13",
    price: 8,
    title: "Tales from the Future",
    description: "A collection of science fiction short stories",
  },
  {
    id: "p14",
    price: 20,
    title: "Business Strategies for Success",
    description: "A practical guide to running a successful business",
  },
  {
    id: "p15",
    price: 18,
    title: "Mastering the Art of Coding",
    description: "A book for beginners and experts alike in programming",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
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
