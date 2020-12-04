import TempConverter from "../hooks/TempConverter";
import Clicked from "./Clicked";
import StepCounter from "./StepCounter";

const Reduce = () => {
    return(
        <>
            <Clicked />
            <StepCounter max={ 100 } step={ 5 } />
            <TempConverter />
        </>
    );
}

export default Reduce;