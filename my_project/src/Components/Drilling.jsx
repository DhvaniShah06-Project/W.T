function A()
{
    const name = "Dhvani";
    return(
        <>
        <B name = {name}/></>
    )
}
function B(props)
{
    return(
        <>
    <C name = {props.name}/>
        </>
    )
}

function C(props){
    return (
        <>
        <h1>Name : {props.name}</h1></>
    )
}
export default A