

//#region try and error part
//process1("abcdefghi");

//console.log(Process2(process1("sharechat")));
//#endregion

//#region getting data from console
//console.log("please enter testcases");
var stdin = process.openStdin();
//making testcase input avaibale
var takeconsoleInputtestcasecount=-1;
var listofarraytoprocess=[];
var lengthOflement=0;

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    if(takeconsoleInputtestcasecount==-1){
        takeconsoleInputtestcasecount=d;
       
       // logging("you have asked for"+ d +"cases");
    }
    else if(takeconsoleInputtestcasecount!=0){
        if(lengthOflement==0){
//logging("length"+takeconsoleInputtestcasecount+"of element is "+d);
lengthOflement=d;
        }
        else{
       //console.log(takeconsoleInputtestcasecount+"you entered: [" +d.toString().trim() + "]"+"And It will convert in to below things "+Process2(process1(d.toString().trim())));
       listofarraytoprocess.push(d.toString().trim());
      // logging(Process2(process1(d.toString().trim())));
       takeconsoleInputtestcasecount=takeconsoleInputtestcasecount-1;
        verifyandstoplisteraftercompletetakingListener(takeconsoleInputtestcasecount);
        lengthOflement=0;
    }
    }
    
        
    
    
  });


  function verifyandstoplisteraftercompletetakingListener(remainingTestCase){
    //logging(takeconsoleInputtestcasecount);
    if(takeconsoleInputtestcasecount==0){
   // logging("done with testcase");
    stdin.removeAllListeners("data");
    listofarraytoprocess.forEach(element => {
        logging(Process2(process1(element.toString().trim())));
    });
    
}
  }
//#endregion


//#region Support Functions
function logging(message) {
    console.log(message);
}
//#endregion

//#region Process1 Functions
function process1(string) {
    //Step 1 Start from here 
   // logging("Starting Of Step1");
    //length
    var bool=Checklength(string);
    //swapping
    var string=swapOfCharcters(string,0,string.length-1);
    //Step 1 complete here 
   // logging("Complete Step1");
    //logging("After Complete First Step:-"+string);
   return string;
   
}

function Checklength(string) {
  ////  logging("Checking Length of string:" + string);
    //false means Odd length,true means even length
    var bool = true;
    //check length
    bool = (string.length % 2 == 0);
    //Defined length
   //// logging("Is this String is odd?" + bool);
    //return Bool
    return bool;
}

function swapOfCharcters(arrayofString,i,length) {
    //even length found
    
    //show array before swap process
   //// logging("Before array swapping:" + arrayofString);

    //Swap Characters with consecative character
    arrayofString = newFunction(arrayofString, i, i+1).join('');

    // show array after swap process
   //// logging("After array swapping::" + arrayofString);
    if(i+3<=length){
        arrayofString=swapOfCharcters(arrayofString,i+2,length);
}

    return arrayofString;

}

function newFunction(array, x, y) {
    var arraytemp = array.split('');
    //Change Position x char to y char
    var temp = arraytemp[x];
    //logging position which will changes
  ////  logging("swapping element " + arraytemp[x] + " of position " + x + " with element " + arraytemp[y] + " of position" + y);
    //changeing
    arraytemp[x] = arraytemp[y];
    arraytemp[y] = temp;
    return arraytemp;
}

//#endregion

//#region assign
function Process2(string){
   // logging("Starting of Step2");
    //passwholestring with starting point
    var k=processvariableofArray(string.split(''),0,string.length-1);
return k.join('');
  //  logging("complete Step2"+k.join(''));
}

function processvariableofArray(string,i,length){
    //iterate through string
    //var originalasciivalue=findAsciiOfvariable(string[i]);
    string[i]=findreplaceablevarible(findAsciiOfvariable(string[i]));

    if(i+1<=length){
        string=processvariableofArray(string,i+1,length);
    }
    //return string
    return string;
}

function findAsciiOfvariable(element){
   // logging(element+' has this ascii value '+ element.charCodeAt(0));
return element.charCodeAt(0);
}

function findreplaceablevarible(element){
    var replaceAsciivalue=219-element;
    
    return String.fromCharCode(replaceAsciivalue);
   //logging(element+ ' has this ascii value '+String.fromCharCode(replaceAsciivalue));
}
//#endregion