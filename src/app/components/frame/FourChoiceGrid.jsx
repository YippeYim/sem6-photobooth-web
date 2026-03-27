export function FourChoiceGrid({children}){
    return <>
        <div className="flex justify-center h-screen">
            <div className="grid grid-cols-2 gap-14 w-2/3 h-2/3 mt-15">
                {children}
            </div>
        </div>
    </>
}