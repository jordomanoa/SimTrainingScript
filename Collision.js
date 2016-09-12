#pragma strict

var Needle1 : GameObject;

var InsideCol : boolean = false; 


function OnTriggerEnter ()
{
	InsideCol = true;
	Collision3.Inside = true;
}

function OnTriggerExit ()
{
	InsideCol = false;
	Collision3.Inside = false;
}


function Update () 
{
	// Right Flick
	if (InsideCol == true && AnimateDCVG.FinishedD == true)
	{

		
			Needle1.GetComponent.<Animation>().CrossFade("NeedleSwingRight");
	}
		else
		{
		if (Collision3.Inside == false)
			{
			Needle1.GetComponent.<Animation>().Stop("NeedleSwingRight");
			}
		}


	// Left Flick
	if (InsideCol == true && AnimateDCVG.FinishedA == true)
	{
		

			Needle1.GetComponent.<Animation>().CrossFade("NeedleSwingLeft");
		}
		else
		{
		if (Collision3.Inside == false)
			{
			Needle1.GetComponent.<Animation>().Stop("NeedleSwingLeft");
			}
		}

}