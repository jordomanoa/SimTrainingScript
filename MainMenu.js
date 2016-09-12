#pragma strict

var music : AudioSource;
static var currentLevel;

function QuitGame () {
    Debug.Log ("Game is Exiting...");
    Application.Quit ();
}

function StartGame (level : String){
	currentLevel = level;
    Application.LoadLevel (level);
   
}

    function GameVolume (vol : float){
        music.volume = vol;
    }