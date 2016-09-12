#pragma strict

var ArmR : GameObject;


function Update () 
{
            if (Input.GetKeyDown(KeyCode.W))
            {
                ArmR.GetComponent.<Animation>().Play("walkingArmsR");
                

            }

            if (Input.GetKeyUp(KeyCode.W))
            {
               ArmR.GetComponent.<Animation>().Stop("walkingArmsR");
               

            }
}
            