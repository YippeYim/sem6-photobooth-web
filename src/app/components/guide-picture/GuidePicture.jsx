import { useState } from "react"
import { useStorage } from "@/app/hooks/useStorage";

export function GuidePicture() {
    const [ peopleCount , setPeopleCount ] = useState(1);
    const { getAllImageUrlFromFolder } = useStorage();
    const [ urls , setUrl] = useState([]);

    const handleClick = async () => {
        const image = await getAllImageUrlFromFolder(peopleCount+'-people');
        setUrl(image);
        // console.log(image);
    }

    return <>
    <ul className="">
    <li><button onClick={()=>setPeopleCount(1)}>1 person</button></li>
    <li><button onClick={()=>setPeopleCount(2)}>2 person</button></li>
    <li><button onClick={()=>setPeopleCount(3)}>3 person</button></li>
    <li><button onClick={()=>setPeopleCount(4)}>4 person</button></li>
    <li><button onClick={handleClick}>click</button></li>
    </ul>
    <img src={urls[0]}></img>
    </>
}