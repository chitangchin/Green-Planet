import React from "react";
import './aboutUs.css'

class MarkComponent extends React.Component {
    render() {
        return (
            <div className="markContainer">
                <h1 id="name">Marks Component</h1>
                <h1 id="text">yo</h1>
                <img src="https://marketplace.canva.com/EAE6OH6DF2w/1/0/1600w/canva-moon-astronaut-character-twitch-profile-picture-0kkgyJSodt4.jpg" alt="display image" id="img" />
            </div>
        );
    }
}

export default MarkComponent;