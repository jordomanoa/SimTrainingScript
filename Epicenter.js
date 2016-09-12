#pragma strict
var Needle1 : GameObject;

var EthanBody: GameObject;

var EthanModel: GameObject;

var DefectHere : GameObject;

var DefectHereParent : GameObject;

var OLREUI : GameObject;

var OLREModel : GameObject;

var StopX : GameObject;

var EpicentreBox : GameObject;

var OLRETran1 : GameObject;

var OLRETran2 : GameObject;

var FPS : GameObject;

var InsideEp : boolean = false;

var CompassFinish : boolean = false;

var OLRESwitch : boolean = false;





var FirstR = 0;
var LastR = 0;
var FirstL = 0;
var LastL = 0;
var timerR = 0;
var timerL = 0;

var OLREStart = 1;

function Start () 
{
StopX.SetActive(true);
}


function OnTriggerEnter ()
{
	if (!EthanBody.GetComponent.<Animation>().IsPlaying("4PointsL") && (!EthanBody.GetComponent.<Animation>().IsPlaying("4PointsR")))
	{
		InsideEp = true;
		DefectHere.SetActive(true);
	}
}

function OnTriggerExit ()
{
	InsideEp = false;
	timerR = 0;
	timerL = 0;
	DefectHere.SetActive(false);
}


function Update () 
{
	// Right Flick
	if (InsideEp == true && AnimateDCVG.FinishedD == true)
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
		if (timerR > 100 && !EthanBody.GetComponent.<Animation>().IsPlaying("4PointsR"))
		{
			Needle1.GetComponent.<Animation>().Stop("NeedleRightFlick");
		}
		else 
		{
			timerR = timerR + 1;

		}

		}
	}
		// Left Flick
	if (InsideEp == true && AnimateDCVG.FinishedA == true)
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
		if (timerL > 80 && !EthanBody.GetComponent.<Animation>().IsPlaying("4PointsL"))
		{
			Needle1.GetComponent.<Animation>().Stop("NeedleFlickLeft");
		}
		else 
		{
			timerL = timerL + 1;
		}

		}
	}
	// 4pointsLeft
	if (InsideEp == true && AnimateDCVG.FinishedD == true && Input.GetKeyDown(KeyCode.E))
	{
	DefectHereParent.SetActive(false);
	StopX.SetActive(true);
	EthanBody.GetComponent.<Animation>().Play("4PointsR");
	Needle1.GetComponent.<Animation>().Play("NeedleFlickLeft");
	CompassFinish = true;



	}
	//4pointsRight
		if (InsideEp == true && AnimateDCVG.FinishedA == true && Input.GetKeyDown(KeyCode.E))
	{

	if (CompassFinish == true)
	{
		StopX.SetActive(true);
		OLRESwitch = true;
		EthanModel.SetActive(false);
		OLREModel.SetActive(true);
		EthanBody.GetComponent.<Animation>().Play("OLRE");
		OLRETran1.SetActive(true);




	}
	else
	{
		DefectHereParent.SetActive(false);
		OLREUI.SetActive(false);
		StopX.SetActive(true);
		EthanBody.GetComponent.<Animation>().Play("4PointsL");
		Needle1.GetComponent.<Animation>().Play("NeedleRightFlick");
		CompassFinish = true;
		StopX.SetActive(true);

	}

	}

	//OLREUI

	if (InsideEp == true && CompassFinish == true && OLRESwitch == false && !EthanBody.GetComponent.<Animation>().IsPlaying("4PointsL") && (!EthanBody.GetComponent.<Animation>().IsPlaying("4PointsR")))
	{
		OLREUI.SetActive(true);
		OLRETran1.SetActive(false);
		StopX.SetActive(true);

	}

		else 
		{
			OLREUI.SetActive(false);
		}

	//OLRETransitions

	if (EthanBody.GetComponent.<Animation>().IsPlaying("OLRE"))
	{
		OLREStart = OLREStart + 1;
	}



	if (OLREStart > 200)
	{
		OLRETran1.SetActive(false);
	}


	if (InsideEp == true && (!EthanBody.GetComponent.<Animation>().IsPlaying("OLRE")) && (OLREStart > 200))
	{
		OLREModel.SetActive(false);
		EthanModel.SetActive(true);
		OLREStart = 0;
	}

	if (InsideEp == true && OLREStart == 0)
	{
		OLRETran2.SetActive(true);
	}

	if (OLRETran2.activeSelf == true)
	{
		OLREStart = OLREStart + 1;
	}

	if (InsideEp == true && OLREStart >= 150 && OLRETran2.activeSelf == true)

	{
		OLRETran2.SetActive(false);
		OLREStart = 1;
	}



	//Disable A and D

	if (OLREUI.activeSelf == true || OLRETran1.activeSelf == true || OLRETran2.activeSelf == true || (EthanBody.GetComponent.<Animation>().IsPlaying("OLRE")) || (EthanBody.GetComponent.<Animation>().IsPlaying("4PointsR")) || (EthanBody.GetComponent.<Animation>().IsPlaying("4PointsL")))
		FPS.GetComponent(AnimateDCVG).enabled = false;
	else 
		FPS.GetComponent(AnimateDCVG).enabled = true;

//	//StopX off
//	if (!EthanBody.GetComponent.<Animation>().IsPlaying("4PointsL") && (!EthanBody.GetComponent.<Animation>().IsPlaying("4PointsR") && (!EthanBody.GetComponent.<Animation>().IsPlaying("OLRE"))))
//	{
//		StopX.SetActive(false);
//	}


}

