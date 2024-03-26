
document.getElementById("favimg").addEventListener("click",(e)=>
{
    const a=document.getElementById("data").value;
        fetch('http://localhost:5000/home/fav',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:a})
    }).then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
});