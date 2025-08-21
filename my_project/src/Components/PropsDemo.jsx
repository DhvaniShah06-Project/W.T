export default function Parent()
{
    return (
        <>
        <h4>Parent Called</h4>
        <br/>
        <Child Name="Dhvani"  Age={19}/>
        </>
    );
    
}

function Child(props)
{
    return(
         <>
    <h4>Child Called</h4>
    <h1>Displaying Properties:</h1>
    <h5>Name = {props.Name} Age= {props.Age}
    </h5>
    </>
    )
   
}