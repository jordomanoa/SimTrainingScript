#pragma strict
//import UnityEngine.UI;


var Hello1 : UI.Text;

var corrosionsRiver = 0;

function Start () 
{
	corrosionsRiver = GameMaster.currentScore;
	corrosionsRiver = corrosionsRiver/7;
	Hello1 = GetComponent(UI.Text);
	Hello1.text = corrosionsRiver.ToString();


}

function Update () {



}