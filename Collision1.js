#pragma strict
var Needle1 : GameObject;

var InsideCol1 : boolean = false; 

var FirstR = 0;
var LastR = 0;
var FirstL = 0;
var LastL = 0;


function OnTriggerEnter ()
{
	InsideCol1 = true;
}

function OnTriggerExit ()
{
	InsideCol1 = false;
}


function Update () 
{
	// Right Flick
	if (InsideCol1 == true && AnimateDCVG.FinishedD == true)
	{
		if (FirstR == 0)
		{
			Needle1.GetComponent.<Animation>().CrossFade("NeedleTransRight");
			FirstR = 1;
			LastR = 0;
		}
		else
		{
		Needle1.GetComponent.<Animation>().CrossFade("NeedleRightFlick");

		}
	}


	if (InsideCol1 == false && AnimateDCVG.FinishedA == true)
	{
		if (LastR == 0)
		{
			
			Needle1.GetComponent.<Animation>().CrossFade("TransRightReverse");
			LastR = 1;
			FirstR = 0;
		}
	}

	// Left Flick
	if (InsideCol1 == true && AnimateDCVG.FinishedA == true)
	{
		if (FirstL == 0)
		{
			Needle1.GetComponent.<Animation>().CrossFade("NeedleTransLeft");
			FirstL = 1;
			LastL = 0;
		}
		else
		{
		Needle1.GetComponent.<Animation>().CrossFade("NeedleFlickLeft");

		}
	}

	if (InsideCol1 == false && AnimateDCVG.FinishedD == true)
	{
		if (LastL == 0)
		{
			Needle1.GetComponent.<Animation>().CrossFade("TransLeftReverse");
			LastL = 1;
			FirstL = 0;
		}
	}
}