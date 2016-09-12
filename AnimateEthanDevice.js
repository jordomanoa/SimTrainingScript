var EthanDCVG : GameObject;

var countUp : double = 0;

static var countUpTest = 0;


function Start () {

EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGIdle");
countUp = 0;

}

function Update () 
{
			countUpTest = countUp;

            if (Input.GetKey(KeyCode.W))
            {
                EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGwalk");


					countUp += 0.03;
			
             }

                
                 if (Input.GetKey(KeyCode.UpArrow))
            {
                EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGwalk");


					countUp += 0.03;
			
             }
            

            if (Input.GetKeyUp(KeyCode.W))
            {
               
               EthanDCVG.GetComponent.<Animation>().Stop("EthanDCVGwalk");
               EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGIdle");
              
            }
            
                        if (Input.GetKeyDown(KeyCode.S))
            {
                EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGwalk").speed = -1.0;
                EthanDCVG.GetComponent.<Animation>().Stop("EthanDCVGIdle");
            }

            if (Input.GetKeyUp(KeyCode.S))
            {
               
               EthanDCVG.GetComponent.<Animation>().Stop("EthanDCVGwalk");
               
            }

			if (Input.GetKeyDown(KeyCode.UpArrow))
            {
                EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGwalk");
                EthanDCVG.GetComponent.<Animation>().Stop("EthanDCVGIdle");
            }

            if (Input.GetKeyUp(KeyCode.UpArrow))
            {
               
               EthanDCVG.GetComponent.<Animation>().Stop("EthanDCVGwalk");
               EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGIdle");
            }

            
                  if (Input.GetKeyDown(KeyCode.DownArrow))
            {
                EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGwalk").speed = -1.0;
                EthanDCVG.GetComponent.<Animation>().Stop("EthanDCVGIdle");
            }

            if (Input.GetKeyUp(KeyCode.DownArrow))
            {
               
               EthanDCVG.GetComponent.<Animation>().Stop("EthanDCVGwalk");
               EthanDCVG.GetComponent.<Animation>().Play("EthanDCVGIdle");
            }

}              
