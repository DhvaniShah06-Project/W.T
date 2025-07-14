const child_process = require ('child_process')
child_process.exec('start https://www.youtube.com/',err=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("runned")
    }
}
)