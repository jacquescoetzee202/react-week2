import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import StepCounter from "./StepCounter";
import CatchMeIfYouCan from "./CatchMeIfYouCan";
import RollCall from "./RollCall";
import PasswordStrength from "./PasswordStrength";

const Hooks = () => {
    return(
        <>
            <Clicked />
            <Square colour="purple" />
            <ToggleText initial="Zukunft" alternate="Vergangenheit" />
            <Counter initial={ 50 } max={ 55 } />
            <StepCounter max={ 99 } step={ 33 } />
            <CatchMeIfYouCan jump={ 100 } />
            <RollCall names={ names }/>
            <PasswordStrength />
        </>
    );
}

export default Hooks;

const names = [
    "Ulrich",
    "Charlotte",
    "Bartosz",
    "Jonas",
    "Adam",
    "Katarina",
    "Hannah",
    "Martha"
];