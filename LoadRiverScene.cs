using UnityEngine;
using System.Collections;

public class LoadRiverScene : MonoBehaviour {
	
	private bool DrawGUI = false;
	
	
	
	void Update()
	{
		if (DrawGUI && Input.GetKeyDown(KeyCode.E))
		{   
			Application.LoadLevel("River");
			
		}
	}
	void OnTriggerEnter(Collider other)
	{
		DrawGUI = true;
	}
	void OnTriggerExit(Collider other)
	{
		DrawGUI = false;
	}
	void OnGUI()
	{
		if (DrawGUI)
		{
			GUI.Box(new Rect(Screen.width / 2 - 100, Screen.height / 2 - 40, 310, 22), "Press 'E' key or (X) button to get in the boat");
		}
	}
}