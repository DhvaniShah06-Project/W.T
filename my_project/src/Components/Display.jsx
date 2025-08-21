export default function Display()
{
  let  isPass=false;
  return(
    <>
    {isPass && <h1>Pass...</h1>}
    {!isPass && <h1>Fail...</h1>}
    </>
  )
}