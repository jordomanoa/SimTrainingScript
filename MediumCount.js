#pragma strict
//import UnityEngine.UI;


var Med1 : UI.Text;

var MedSev = 0;

function Start () 
{
	MedSev = Severities.MediumScore;
	MedSev = MedSev/7;
	Med1 = GetComponent(UI.Text);
	Med1.text = MedSev.ToString();


}