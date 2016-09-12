#pragma strict
//import UnityEngine.UI;


var Large1 : UI.Text;

var LargeSev = 0;

function Start () 
{
	LargeSev = Severities.LargeScore;
	LargeSev = LargeSev/7;
	Large1 = GetComponent(UI.Text);
	Large1.text = LargeSev.ToString();


}