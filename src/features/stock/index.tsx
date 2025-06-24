import StockListContainer from "./containers/StockListContainer";
import StockSearchContainer from "./containers/StockSearchContainer";

export default function Stocks() {


    return (
        <div>
            <StockSearchContainer />
            <StockListContainer />
        </div>
    )
}