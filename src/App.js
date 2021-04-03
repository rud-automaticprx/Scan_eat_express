import "./assets/css/styles.css";
import "./assets/css/box.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Items from "./Items";
import Cart from "./components/Cart";

function App() {

    return (
        <div className="App">
            <div>
                <Header name="City Pizzeria"/>
                <Menu name="Pizzas" desc="Tasty pizzas made with fresh ingredients" menu={Items}/>
                <Cart/>
            </div>
        </div>
    );
}

export default App;
