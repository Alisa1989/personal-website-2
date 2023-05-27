import React, {useState} from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";



function SelectAmount() {
    const [amount, setAmount] = useState(0);
    const increase = () => setAmount(amount === 10 ? amount : amount + 1);
    const decrease = () => setAmount(amount === 0 ? amount : amount - 1);
    return(
        <div class="">
            <HiMinusSm onClick={decrease}/>
            <span>{amount}</span>
            <HiPlusSm onClick={increase}/>
        </div>
    )
}

export default SelectAmount;