var Ethan : GameObject;

function Start () {

Ethan.GetComponent.<Animation>().Play("EthanIdle");

}

function Update () 
{
            if (Input.GetKeyDown(KeyCode.W))
            {
                Ethan.GetComponent.<Animation>().Play("EthanWalk");
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.W))
            {
               
               Ethan.GetComponent.<Animation>().Stop("EthanWalk");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }
            
            if (Input.GetKeyDown(KeyCode.Space))
            {
            	Ethan.GetComponent.<Animation>().Stop("EthanWalk");
            	Ethan.GetComponent.<Animation>().Stop("EthanIdle");
                Ethan.GetComponent.<Animation>().Play("EthanJump");
                

            }
               if (Input.GetKeyUp(KeyCode.Space))
            {
            	Ethan.GetComponent.<Animation>().Play("EthanIdle");
                Ethan.GetComponent.<Animation>().Stop("EthanJump");
           
            }
            
              if (Input.GetKeyDown(KeyCode.D))
            {
                Ethan.GetComponent.<Animation>().Play("SideStep");
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.D))
            {
               
               Ethan.GetComponent.<Animation>().Stop("SideStep");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }
            
                  if (Input.GetKeyDown(KeyCode.S))
            {
                Ethan.GetComponent.<Animation>().Play("EthanWalk").speed = -1.0;
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.S))
            {
               
               Ethan.GetComponent.<Animation>().Stop("EthanWalk");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }
                      if (Input.GetKeyDown(KeyCode.A))
            {
                Ethan.GetComponent.<Animation>().Play("SideStep").speed = -1.0;
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.A))
            {
               
               Ethan.GetComponent.<Animation>().Stop("SideStep");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }

            if (Input.GetKeyDown(KeyCode.UpArrow))
            {
                Ethan.GetComponent.<Animation>().Play("EthanWalk");
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.UpArrow))
            {
               
               Ethan.GetComponent.<Animation>().Stop("EthanWalk");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }

            
              if (Input.GetKeyDown(KeyCode.RightArrow))
            {
                Ethan.GetComponent.<Animation>().Play("SideStep");
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.RightArrow))
            {
               
               Ethan.GetComponent.<Animation>().Stop("SideStep");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }
            
                  if (Input.GetKeyDown(KeyCode.DownArrow))
            {
                Ethan.GetComponent.<Animation>().Play("EthanWalk").speed = -1.0;
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.DownArrow))
            {
               
               Ethan.GetComponent.<Animation>().Stop("EthanWalk");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }
                      if (Input.GetKeyDown(KeyCode.LeftArrow))
            {
                Ethan.GetComponent.<Animation>().Play("SideStep").speed = -1.0;
                Ethan.GetComponent.<Animation>().Stop("EthanIdle");
            }

            if (Input.GetKeyUp(KeyCode.LeftArrow))
            {
               
               Ethan.GetComponent.<Animation>().Stop("SideStep");
               Ethan.GetComponent.<Animation>().Play("EthanIdle");
            }
}