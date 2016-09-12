#pragma strict

var ArmL : GameObject;


function Update () 
{
            if (Input.GetKeyDown(KeyCode.W))
            {
                ArmL.GetComponent.<Animation>().Play("walkingArms");
                

            }

            if (Input.GetKeyUp(KeyCode.W))
            {
               ArmL.GetComponent.<Animation>().Stop("walkingArms");
               

            }
}
            