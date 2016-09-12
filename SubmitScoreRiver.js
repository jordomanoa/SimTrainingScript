#pragma strict
import System;
import System.IO;

var Greypanel : GameObject;
var listView : MonoBehaviour;

var scrollPosition : Vector2;
var Textfile = "C:\\Users\\DCVG\\Documents\\Scores.txt";
function Pressed ()
{
	if (UIcontroller.playerName != "")
{
var file = File.AppendText(Textfile);
var name = UIcontroller.playerName;
file.WriteLine(name + ", "+ GameMasterRiver.currentScore.ToString() + ", " + MainMenu.currentLevel);
file.Close();

Greypanel.SetActive (true);

}
}

function OnGUI ()
{
	var sr = new StreamReader(Textfile);
	var fileContents = sr.ReadToEnd();
	sr.Close();
	GUILayout.BeginArea(new Rect(200, 500, 300, 200), GUI.skin.window);
    scrollPosition = GUILayout.BeginScrollView(scrollPosition, false, true); 
    GUILayout.BeginVertical(GUI.skin.box);

    var lines = fileContents.Split("\n"[0]);
   	for (line in lines) 
   	{
	GUILayout.Label(line, GUI.skin.box, GUILayout.ExpandWidth(true));
	}
    GUILayout.EndVertical();
    GUILayout.EndScrollView();
    GUILayout.EndArea();
}