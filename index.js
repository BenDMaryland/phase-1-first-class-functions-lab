// Code your solution in this file!




const returnFirstTwoDrivers = (names)  =>  {
  return names.slice(0,2)
} 



const returnLastTwoDrivers = (names)  =>  {
    return names.slice(2)
  } 
  

  const  selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers] 
  
 function createFareMultiplier()  {
     return function(value){
         return value * value;
     }
    
    
    }
       
    const  fareDoubler = (value2) => {
        
            return value2 * 2;
       }

       const  fareTripler = (value3) => {
        
        return value3 * 3;
   }

  
   function selectDifferentDrivers (array1,functionOfDrivers){
    return functionOfDrivers (array1);
       
   }      