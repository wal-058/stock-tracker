import StockListContainer from "./containers/StockListContainer";
import StockSearchContainer from "./containers/StockSearchContainer";

export default function Stocks() {


    return (
        <div className="flex flex-col min-h-[calc(100vh-8rem)] pt-10 bg-transparent">
            <StockSearchContainer />
            <StockListContainer />
        </div>
    )
}