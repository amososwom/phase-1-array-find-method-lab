// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function superbowlWin(recordArray){
    let response = ""; // we declare an empty array here 
    response = recordArray.find( object => (object.result === "W")); // check for the result W in the array and return that object or undefined
    response = (response === undefined) ? undefined : response.year; // cheks the response and return the year if it is not undefine,
 
    return response;
}