// creates the module
var Tutor=require('./Addition.js');
// defines a function
exports.NodeTutorial=function()
{
    //prints text
    console.log("Node")
// creating a function which called
// tutorial function in the T module
    function pTutor(){
        var PTutor=Tutor
        PTutor.tutorial()
    }
}