const imgbox=document.getElementById("imgbox");
const img=document.querySelector("img");
const text=document.querySelector("input")
function generateQR()
{
    if(text.value.length===0)
    {
     alert("bastard");
    }
    else{
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    }
}

