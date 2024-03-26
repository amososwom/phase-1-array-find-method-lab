// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function superbowlWin(recordArray){
    let response = ""; // 
    response = recordArray.find( object => (object.result === "W")); //
    response = (response === undefined) ? undefined : response.year; //
 
    return response;
}