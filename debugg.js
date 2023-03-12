const Showalert =()=>{
    alert('aytesi')
} 


const money=()=>{
   const r =confirm('taka dibs')
   console.log(r);
   if (r === true){
    alert('dkaseo')
   } else{
    
    alert('blockeddd')
}
}
const info =()=>{
    // alert
    // confirm
   const s= prompt('name plz')
   console.log(s);

   if(s=== null){
    alert('enter name')
   } else{
    alert (s,+ 'well done')
   }
}