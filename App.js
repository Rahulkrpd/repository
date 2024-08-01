import React from "react"
import ReactDOM from "react-dom/client"


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://imgs.search.brave.com/xsvmWKrdNEJ8XibaojsOW7TH8ZKgm6WY3JSXk2i5r1w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzMxLzE5LzQy/LzM2MF9GXzEzMTE5/NDIwNl9qazExM2Z2/bDhvRm1lQUhTV3pE/eWhSSklraUJtbk5h/Ti5qcGc" alt="" />
            </div>

            <div className="nav-item">
                <ul className="items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};


const RestaurantCard = () => {
    return (
        <div className="res-card">

            <div className="img-container">
                <img src="https://imgs.search.brave.com/9NpMgraCbQaYQfUnxQzvBrIzIC0enaLhzG1UCVB0IFA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/ODkxOTA1Ni9waG90/by9mcmllZC1yaWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tbnBNcGRPTW4x/RUNHT0JTazBqdlc4/VjNxd2U4blhvc2F2/VFA5ZXZfbU44PQ" alt=""  className="res-logo" />
            </div>
            <h4>Meghana Foods</h4>
            <h5>Fried Rice ,North Indian ,Asian</h5>
            <h5>4.4</h5>
            <h5>38 minutes</h5>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard />

            </div>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />);

