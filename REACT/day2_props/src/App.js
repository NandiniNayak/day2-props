import React from "react";
import faker from "faker";

// create a functional App component
// return a jsx content
const App = () => {
    return(
        <div>
            <div className="comment">
                <div className="profile">
                    <img src={faker.image.avatar()}/>
                </div>
                <div>
                <p className="author">alex</p>
                <p className="date"> 29/10 9:30 Am</p>
                <p className="text">This is awesome</p>
                </div>
            </div>
            <div className="comment">
                <div className="profile">
                    <img src={faker.image.avatar()} />
                </div>
                <div>
                    <p className="author">alex</p>
                    <p className="date"> 29/10 9:30 Am</p>
                    <p className="text">This is awesome</p>
                </div>
            </div>
            <div className="comment">
                <div className="profile">
                    <img src={faker.image.avatar()} />
                </div>
                <div>
                    <p className="author">alex</p>
                    <p className="date"> 29/10 9:30 Am</p>
                    <p className="text">This is awesome</p>
                </div>
            </div>
        </div>
    )
}

export default App