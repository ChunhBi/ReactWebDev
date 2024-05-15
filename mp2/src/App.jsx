import List from "./Components/List.jsx";
import "./App.css"

export default function App() {
    return (
        <div id={'webpage'}>
            <header>
                <h1>Price Comparison for Digital Games</h1>
            </header>
            <div id={'main'}>
                <div id={'wrapper'}>
                    <List/>
                </div>
            </div>
            <footer>
                <p>
                Data Acquired from <a href={'https://www.cheapshark.com/api/1.0/deals?upperPrice=15'}>CheapShark</a>.
                    Website Created by Chunhao Bi &#169;
                </p>
            </footer>
        </div>
    )
}
