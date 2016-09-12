#pragma strict

var Needle : GameObject;
var NeedleTest : GameObject;
var CoatingFound : GameObject;

function Start ()

//This Finds certain objects withing the game with animationsa attached and plays when the game starts
{
    GameObject.Find("DeviceAndStraps").GetComponent.<Animation>().Play("needledefault");
}
// when something enters the trigger box e.g. the player 
function OnTriggerEnter ()
{

//starting animation stops and playes another 
GameObject.Find("DeviceAndStraps").GetComponent.<Animation>().Stop("needledefault");   
GameObject.Find("DeviceAndStraps").GetComponent.<Animation>().Play("NeedleFind");
//wait for 5 seconds before adding to current score

yield WaitForSeconds(2.0); GameMaster.currentScore += 1;

CoatingFound.SetActive (true);
}

//When something exits the trigger box e.g. The player 
function OnTriggerExit() 
{   
    GameObject.Find("DeviceAndStraps").GetComponent.<Animation>().Stop("NeedleFind");
    GameObject.Find("DeviceAndStraps").GetComponent.<Animation>().Play("needledefault");
    yield WaitForSeconds(2.0);
   	NeedleTest.SetActive (false);
  
}


