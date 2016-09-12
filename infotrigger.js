#pragma strict

var InfoPanel : GameObject;

function Start ()
{
    InfoPanel.SetActive(false);
}

function OnTriggerEnter () 
{
    InfoPanel.SetActive(true);  
}

function OnTriggerExit ()
{
    InfoPanel.SetActive(false);
}