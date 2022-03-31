import "./App.css";
import { Component } from "react";
import Person from "./person";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

class App extends Component {
    state = {
        show: false,
        seconds: 0,
        Person: {
            fullName: "Mohamed Rayen Labidi",
            bio: "Bioooooooooooooooo",
            imgSrc: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            profession: "Student",
        },
    };
    toggle() {
        this.setState({ show: !this.state.show });
        this.state.seconds == 0
            ? setInterval(
                  () => this.setState({ seconds: this.state.seconds + 1 }),
                  1000
              )
            : (this.state.seconds = 0);
    }

    render() {
        return (
            <div className="App">
                <Button variant="outline-primary" onClick={() => this.toggle()}>
                    Click To Show Profile
                </Button>
                {this.state.show ? <Person person={this.state.Person} /> : null}
                {this.state.show ? this.state.seconds : null}
            </div>
        );
    }
}

export default App;
