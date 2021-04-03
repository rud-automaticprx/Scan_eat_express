import "../assets/css/box.css";
import Item from "./Item";
import BBQPizza from "../assets/img/bbqchicken.jpg";
import supreme from "../assets/img/supreme.jpg";
import canadian from "../assets/img/canadian.jpg";
import veggie from "../assets/img/veggie.jpg";
import jalapeno from "../assets/img/jalapeno.jpg";
import pepperoni from "../assets/img/pepperoni.jpg";

const Menu = ({ name, desc }) => {
  return (
    <section className="features-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">{name}</h2>
          <p className="text-center">{desc}</p>
        </div>
        <div className="row justify-content-center features">
          <Item
            name="BBQ Chicken"
            desc="BBQ sauce with seasoned grilled chicken"
            price="12.50"
            img={BBQPizza}
          />
          <Item
            name="Supreme"
            desc="Italian sausage, ham, black olive"
            price="14.50"
            img={supreme}
          />
          <Item
            name="Canadian"
            desc="Bacon, ham sausage"
            price="12.50"
            img={canadian}
          />
          <Item
            name="Veggie"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta."
            price="11.50"
            img={veggie}
          />
          <Item
            name="Jalapeno"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta."
            price="14.50"
            img={jalapeno}
          />
          <Item
            name="Pepperoni"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta."
            price="9.99"
            img={pepperoni}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
