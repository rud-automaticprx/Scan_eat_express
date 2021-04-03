import "../assets/css/box.css";
import Item from "./Item";

const Menu = ({name, desc}) => {
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
                        img="https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.chicken-lovers.b954bbe4c3fed2d6e1bdb2953902be9e.1.jpg?width=300"
                    />
                    <Item
                        name="Supreme"
                        desc="Italian sausage, ham, black olive"
                        price="14.50"
                        img="https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.super-supreme.21f3260bdd33813f550cd523fbd8d073.1.jpg?width=300"
                    />
                    <Item
                        name="Canadian"
                        desc="Bacon, ham sausage"
                        price="12.50"
                        img="https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.canadian.67c22dc316f702bf4d992c667d22fbf0.1.jpg?width=300"
                    />
                    <Item
                        name="Veggie"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta."
                        price="11.50"
                        img="https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.veggie-lovers.48ba54d49ff2257671521b477967633a.1.jpg?width=300"
                    />
                    <Item
                        name="Jalapeno"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta."
                        price="14.50"
                        img="https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.italian-classic.ad7765e7d0bfed6e00b09053416cba63.1.jpg?width=300"
                    />
                    <Item
                        name="Pepperoni"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, soluta."
                        price="9.99"
                        img="https://api.pizzahut.io/v1/content/en-ca/ca-1/images/pizza/pizza.pepperoni-lovers.69f7bdf7b6f50a87eb2886934fe0be9f.1.jpg?width=300"
                    />
                </div>
            </div>
        </section>
    );
};

export default Menu;
