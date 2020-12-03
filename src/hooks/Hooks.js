import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";
import Counter from "./Counter";

const Hooks = () => {
    return(
        <>
            <Clicked />
            <Square colour="purple" />
            <ToggleText initial="Hello" alternate="Halo" />
            <Counter initial={ 50 } max={ 55 } />
        </>
    );
}

export default Hooks;