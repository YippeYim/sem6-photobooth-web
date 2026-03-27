export function ChoosePeopleSize({setUserSelection}) {

    return <>
    How many you members?<br/>

    mockup button
    <button onClick={()=>setUserSelection(prev=>({...prev, peopleSize:1}))}>1</button>
    <button onClick={()=>setUserSelection(prev=>({...prev, peopleSize:2}))}>2</button>
    <button onClick={()=>setUserSelection(prev=>({...prev, peopleSize:3}))}>3</button>
    <button onClick={()=>setUserSelection(prev=>({...prev, peopleSize:4}))}>4</button>
    </>
}