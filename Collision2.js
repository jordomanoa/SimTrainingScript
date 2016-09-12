#pragma strict
var Needle1 : GameObject;

var InsideCol2 : boolean = false; 

var FirstR = 0;
var LastR = 0;
var FirstL = 0;
var LastL = 0;


function OnTriggerEnter ()
{
	InsideCol2 = true;

}

function OnTriggerExit ()
{
	InsideCol2 = false;
}


function Update () 
{
	// Right Flick
	if (InsideCol2 == true && AnimateDCVG.FinishedD == true)
	{
		if (FirstR == 0)
		{
			Needle1.GetComponent.<Animation>().CrossFade("NeedleTransLeft");
			FirstR = 1;
			LastR = 0;
		}
		else
		{
		Needle1.GetComponent.<Animation>().CrossFade("NeedleFlickLeft");

		}
	}


	if (InsideCol2 == false && AnimateDCVG.FinishedA == true)
	{
		if (LastR == 0)
		{
			
			Needle1.GetComponent.<Animation>().CrossFade("TransLeftReverse");
			LastR = 1;
			FirstR = 0;
		}
	}

	// Left Flick
	if (InsideCol2 == true && AnimateDCVG.FinishedA == true)
	{
		if (FirstL == 0)
		{
			Needle1.GetComponent.<Animation>().CrossFade("NeedleTransRight");
			FirstL = 1;
			LastL = 0;
		}
		else
		{
		Needle1.GetComponent.<Animation>().CrossFade("NeedleRightFlick");

		}
	}

	if (InsideCol2 == false && AnimateDCVG.FinishedD == true)
	{
		if (LastL == 0)
		{
			Needle1.GetComponent.<Animation>().CrossFade("TransRightReverse");
			LastL = 1;
			FirstL = 0;
		}
	}
}