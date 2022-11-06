import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening.js";
import "./index.css";
const HomeComponent = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitsList />
        </>
    );
};
export default HomeComponent;