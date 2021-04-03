import "./assets/css/styles.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./assets/css/styles.css";

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
