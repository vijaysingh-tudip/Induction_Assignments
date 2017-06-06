
function isEmpty(){
var str=document.getElementById('txt').value.trim();
if(str==""||str==null)
{
document.getElementById('demo').innerHTML=true;
}
else
{
document.getElementById('demo').innerHTML=false;
}
}