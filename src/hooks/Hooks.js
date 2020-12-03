import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import StepCounter from "./StepCounter";

const Hooks = () => {
    return(
        <>
            <Clicked />
            <Square colour="purple" />
            <ToggleText initial="Zukunft" alternate="Vergangenheit" />
            <Counter initial={ 50 } max={ 55 } />
            <StepCounter max={ 99 } step={ 33 } />
        </>
    );
}

export default Hooks;