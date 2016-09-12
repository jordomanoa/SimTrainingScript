#pragma strict
//import UnityEngine.UI;


var Small1 : UI.Text;

var SmallSev = 0;

function Start () 
{
	SmallSev = Severities.SmallScore;
	SmallSev = SmallSev/7;
	Small1 = GetComponent(UI.Text);
	Small1.text = SmallSev.ToString();


}