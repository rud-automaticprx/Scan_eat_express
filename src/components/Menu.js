import Item from "./Item";

const Menu = ({name, desc, menu}) => {
    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                <div className="row justify-content-center features">
                    {menu.map((pizza) => (
                        <Item item={pizza}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
