import react from 'react';
import Losers from './losers'
function App1(props) {
    return (
        <>
            <h1>My name is {props.name}</h1>
            {/* <img src={require("../public/logo192.png")}></img> */}
            <Losers />
        </>
    )
}
export default App1