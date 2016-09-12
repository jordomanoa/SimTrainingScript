#pragma strict

var MaleChar : GameObject;

function Start () {

}

function Update () 
{
            if (Input.GetKeyDown(KeyCode.W))
            {
                MaleChar.GetComponent.<Animation>().Play("walk_normal");
            }

            if (Input.GetKeyUp(KeyCode.W))
            {
               MaleChar.GetComponent.<Animation>().Stop("walk_normal");
            }
            
            if (Input.GetKeyDown(KeyCode.Space))
            {
                MaleChar.GetComponent.<Animation>().Play("jump");
                

            }

}