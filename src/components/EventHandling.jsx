export function EventHandling(){
    const handleClick=(name)=>{
    
        console.log(`my name is ${name}`)
    }
    return(
        <>
            <button onClick={handleClick}>Click me 🚀</button>
            <button onClick={()=>{handleClick("Ankur")}}>Click me 🚀</button>
        </>
    )
}