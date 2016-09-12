 var EthanDCVGDevice : GameObject;

static var countUp : double = 0;

var speed : float;

var MoveTimeD : double = 0;

static var FinishedD : boolean = true; 

var MoveTimeA : double = 0;

static var FinishedA : boolean = false; 

 
function Start () 
{
countUp = 0;

}

function Update () 
{
countUpTest = countUp;

	// Right Stride
	if (MoveTimeD == 0)
	{
		if (Input.GetKey(KeyCode.D))
		{
			if (FinishedD == true)
			{
			// Do Nothing
			}
			else
			{
				MoveTimeD = 0.01;
			}
		}
	}
	else
	{
		{
			if (MoveTimeD > 1.9)
			{
		    	FinishedD = true;
		    	FinishedA = false;
		    	MoveTimeA = 0;
		    	MoveTimeD = 0;
			}
			else if (MoveTimeD > 1.8)
			{
				MoveTimeD += 0.03;
			    EthanDCVGDevice.GetComponent.<Animation>().Play("RightStride");
				countUp += 0.03;
			}
			else 
			{
			    MoveTimeD += 0.03;
			    EthanDCVGDevice.GetComponent.<Animation>().Play("RightStride");
				countUp += 0.03;
				transform.Translate(Vector3.forward * speed);
			}
		}
	}

	// Left Stride
	if (MoveTimeA == 0)
	{
		if (Input.GetKey(KeyCode.A))
		{
			if (FinishedA == true)
			{
			// Do Nothing
			}
			else
			{
				MoveTimeA = 0.01;

			}
		}
	}
	else
	{
		{
			if (MoveTimeA > 1.9)
			{
		    	FinishedA = true;
		    	FinishedD = false;
		    	MoveTimeD = 0;
		    	MoveTimeA = 0;
			}
			else if (MoveTimeA > 1.8)
			{
				MoveTimeA += 0.03;
			    EthanDCVGDevice.GetComponent.<Animation>().Play("LeftStride");
				countUp += 0.03;
			}
			else 
			{
			    MoveTimeA += 0.03;
			    EthanDCVGDevice.GetComponent.<Animation>().Play("LeftStride");
				countUp += 0.03;
				transform.Translate(Vector3.forward * speed);
			}
		}
	}		


//
//            if (Input.GetKey(KeyCode.A))
//            {
//				if (FinishedA == true)
//            	{
//            	}
//            	else
//            	{
//	            	if (MoveTimeA > 1.2)
//	            	{
//	            		FinishedA = true;
//
//	            		MoveTimeD = 0;
//	            	}
//	            	else 
//	            	{
//	            		MoveTimeA += 0.03;
//	            		FinishedD = false;
//		                EthanDCVGDevice.GetComponent.<Animation>().Play("LeftStride");
//						countUp += 0.03;
//						transform.Translate(Vector3.forward * speed);
//					}
//			
//           		}
//           	}
}