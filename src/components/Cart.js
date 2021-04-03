import '../assets/css/basket.css';

function Cart() {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "0";
    };
    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="container" id="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Cart</h3>
                        <hr/>
                        <div className="table-responsive" id="table">
                            <table className="table">
                                <thead id="table-header">
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody id="table-body">
                                <tr>
                                    <td><strong>BBQ</strong></td>
                                    <td>1</td>
                                    <td>$12.50</td>
                                    <td id="remove">
                                        <i className="far fa-trash-alt"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Checkout</h3>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <p className="lead">Subtotal</p>
                            <p className="lead">$10.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>GST</p>
                            <p>$5.00</p>
                        </div>
                        <hr/>
                        <button className="btn btn-success d-flex justify-content-between align-items-baseline"
                                id="checkout" type="button">Checkout<span
                            className="badge bg-success">$15.00</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
