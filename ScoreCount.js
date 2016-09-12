#pragma strict
//import UnityEngine.UI;


var Hello1 : UI.Text;

function Start () 
{
	Hello1 = GetComponent(UI.Text);
	Hello1.text = GameMaster.currentScore.ToString();


}

function Update () {



}