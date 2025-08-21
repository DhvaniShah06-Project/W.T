export default function Event()
{
  const Clickhere=()=>{
    //   <h1>Button Clicked Here</h1>
  alert("Button Clicked")
  }
   const Double=()=>{
            alert("Double Btn Clicked")
        }
        const Move=()=>{
            alert("Mouse Move")
        }

         const MoveUp=()=>{
            alert("Mouse Move UP")
        }
         const MoveDown=()=>{
            alert("Mouse Move Down")
        }
         const MoveEnter=()=>{
            alert("Mouse Move Enter")
        }
  return(
            <>
            <button onClick={Clickhere}>Click</button>
            <button onDoubleClick={Double}>Double Click</button>
            <button onMouseMove={Move}>Mouse Move</button>
            <button onMouseMove={MoveUp}>Mouse Up</button>
            <button onMouseMove={MoveDown}>Mouse Down</button>
            <button onMouseEnter={MoveEnter}>Mouse Enter</button>
       
            </>
        ) 

       
       
       








    // function Double()
    // {
    //     return
    //     (
    //         <>
    //         <h1>Double Button Clicked</h1>
    //         </>
    //     );
    // }

}