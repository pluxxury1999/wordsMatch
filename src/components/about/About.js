import "./about.css";

import { Card, Button, Dropdown, DropdownButton } from "react-bootstrap";

const About = () => {
    return (
        <div className="about">
            <Card>
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">About Words Match</Card.Title>
                    <Card.Text>
                        <span>Words Match</span> - this is a simple card game, wich will help you to increace your language skill.
                    </Card.Text>
                    <Card.Text>Our game consists of several game modes:</Card.Text>
                    <Card.Text className="gameMode">GameMode</Card.Text>
                    <p className="gameModeDesc">game mode description</p>
                    <Card.Text className="gameMode">GameMode</Card.Text>
                    <p className="gameModeDesc">game mode description</p>
                    <Card.Text className="gameMode">GameMode</Card.Text>
                    <p className="gameModeDesc">game mode description</p>
                    <DropdownButton id="dropdown-basic-button" className="confirmBtn" title="Choose mode">
                        <Dropdown.Item className="dropedBtns" href="#/action-1">Gamemode1</Dropdown.Item>
                        <Dropdown.Item className="dropedBtns" href="#/action-2">Gamemode2</Dropdown.Item>
                        <Dropdown.Item className="dropedBtns" href="#/action-3">Gamemode3</Dropdown.Item>
                    </DropdownButton>
                    {/* <Button className="confirmBtn">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;
