#pragma strict

var Needle : GameObject;
var NeedleTest : GameObject;
var CoatingFound : GameObject;

function Start ()
{
    GameObject.Find("DCVGCanvas").GetComponent.<Animation>().Play("NeedleDefaultRiver");
}

function OnTriggerEnter ()
{


GameObject.Find("DCVGCanvas").GetComponent.<Animation>().Stop("NeedleDefaultRiver");  
GameObject.Find("DCVGCanvas").GetComponent.<Animation>().Play("NeedleFindRiver");
yield WaitForSeconds(5.0); GameMasterRiver.currentScore += 3;
CoatingFound.SetActive (true);
}

function OnTriggerExit() 
{   
    GameObject.Find("DCVGCanvas").GetComponent.<Animation>().Play("NeedleDefaultRiver");  
	GameObject.Find("DCVGCanvas").GetComponent.<Animation>().Stop("NeedleFindRiver");
    yield WaitForSeconds(2.0);
   	NeedleTest.SetActive (false);
  
}