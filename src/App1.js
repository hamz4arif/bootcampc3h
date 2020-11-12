import react from 'react';
import Losers from './losers'
function App1(props) {
    return (
        <>
            <h1>My name is {props.name}</h1>
            <Losers />
        </>
    )
}
export default App1