import Clicked from "./Clicked";
import StepCounter from "./StepCounter";

const Reduce = () => {
    return(
        <>
            <Clicked />
            <StepCounter max={ 100 } step={ 5 } />
        </>
    );
}

export default Reduce;