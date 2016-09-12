#pragma strict
//import UnityEngine.UI;


var Hello1 : UI.Text;

var corrosions = 0;

function Start () 
{
	corrosions = GameMaster.currentScore;
	corrosions = corrosions/7;
	Hello1 = GetComponent(UI.Text);
	Hello1.text = corrosions.ToString();


}

function Update () {



}