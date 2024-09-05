export const API_KEY ="YOUR_API_KEYY";


export const valueConvertor = (value) =>{
   if(value >= 1000000){
    return Math.floor(value/1000000)+"M"
   }
   else if(value >= 1000){
    return Math.floor(value/1000)+"k"
   }
   else if(value < 1000){
    return value
   }
}