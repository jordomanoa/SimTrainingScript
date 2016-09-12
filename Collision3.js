#pragma strict

var Needle1 : GameObject;

var InsideCol3 : boolean = false; 

static var Inside : boolean = false;

function OnTriggerEnter ()
{
	InsideCol3 = true;
	Inside = true;
}

function OnTriggerExit ()
{
	InsideCol3 = false;
	Inside = false;
}


function Update () 
{
	// Right Flick
	if (InsideCol3 == true && AnimateDCVG.FinishedD == true)
	{

			
			Needle1.GetComponent.<Animation>().CrossFade("NeedleSwingLeft");

	}		
		else
		{
		if (Inside == false)
			{
			Needle1.GetComponent.<Animation>().Stop("NeedleSwingLeft");
			}
		}


	// Left Flick
	if (InsideCol3 == true && AnimateDCVG.FinishedA == true)
	{
		

			Needle1.GetComponent.<Animation>().CrossFade("NeedleSwingRight");
		}
		else
		{
		if (Inside == false)
			{
			Needle1.GetComponent.<Animation>().Stop("NeedleSwingRight");
			}
		}

}