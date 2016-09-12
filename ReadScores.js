import System.IO;
var fileName = "C:\\Users\\Jordan\\Documents\\Scores.txt";

function Start () {

var sr = new StreamReader(fileName);
var fileContents = sr.ReadToEnd();
sr.close();

var lines = fileContents .Split("\n"[0]);
for (line in lines) {
	Debug.Log (line);

}
}