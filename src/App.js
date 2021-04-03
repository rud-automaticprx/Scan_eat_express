import "./assets/css/styles.css";
import "./assets/css/box.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <div>
                <Header name="City Pizzeria"/>
                <Menu name="Pizzas" desc="Tasty pizzas made with fresh ingredients"/>
            </div>
        </div>
    );
}

export default App;
