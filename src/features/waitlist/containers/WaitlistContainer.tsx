'use client'

import { useState } from "react";
import WaitlistView from "../components/WaitlistView";

export default function WaitlistContainer() {
    const [input, setInput] = useState("");

    const handleInputChange = (value: string) => {
        setInput(value);
    }

    const handleJoinWaitlist = () => {
        console.log(input);
    }

    return (
        <>
            <WaitlistView value={input} handleInputChange={handleInputChange} handleJoinWaitlist={handleJoinWaitlist}/>
        </>
    )
}