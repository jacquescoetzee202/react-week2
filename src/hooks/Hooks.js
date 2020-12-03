import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";

const Hooks = () => {
    return(
        <>
            <Clicked />
            <Square colour="purple" />
            <ToggleText initial="Hello" alternate="Halo" />
        </>
    );
}

export default Hooks;