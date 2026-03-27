'use client'
import { useRouter } from "next/navigation"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"

import { ChooseDesign } from "../components/frame/ChooseDesign"
import { ChoosePeopleSize } from "../components/frame/ChoosePeopleSize"

export default function SettingPage(){

    const [userSelection, setUserSelection] = useState({
        frame:null, // name of frame in database
        peopleSize:null});  // for guide picture to show
    
    // mockup
    // useEffect(()=>{
    //     setUserSelection({frame:"frme123", peopleSize:2});
    // },[])

    const router = useRouter();
    const handleStart = () => {
        const missingSelection = Object.values(userSelection).some(value=>value===null);
        if (missingSelection) return

        router.push(`/take-picture?frame=${userSelection.frame}&size=${userSelection.peopleSize}`);
    }

    const [frameNum, setFrameNum] = useState(null); //How many frames of designs
    const handleFrameNumSelect = (choice)=>{
        setFrameNum(choice)

        // mock
        setUserSelection(prev=>({...prev, frame:"tttrt"}));
    }

    return <>
        
        {/* choose how many frame */}
        {frameNum === null && (
                <div>
                    <Button onClick={()=>handleFrameNumSelect(2)}>2 Frames</Button>
                    <Button onClick={()=>handleFrameNumSelect(3)}>3 Frames</Button>
                    <Button onClick={()=>handleFrameNumSelect(4)}>4 Frames</Button>
                    <Button onClick={()=>handleFrameNumSelect(6)}>6 Frames</Button>
                </div>
            )}
        
        {/* choose the design */}
        {frameNum !== null && userSelection.frame === null && (
            <ChooseDesign frameNum={frameNum} setUserSelection={setUserSelection}/> // set the frame to match the database file name
        )}

        {/* choose how many people for guide picture */}
        {frameNum !== null && userSelection.frame !== null && userSelection.peopleSize === null && (
            <ChoosePeopleSize setUserSelection={setUserSelection}/>
        )}
    
        {/* the start button that change page when all setting done! */}
        {frameNum !== null && userSelection.frame !== null && userSelection.peopleSize !== null && (
            <Button buttonType="primary" onClick={handleStart} >
                Start
            </Button>
        )}
    </>
};