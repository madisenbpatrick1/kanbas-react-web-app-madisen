import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import EventObject from "./EventObject";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return(
        <div>
            <h1>Lab 4</h1> <hr />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello}/>
            <EventObject />
        </div>
    )
}