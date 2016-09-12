using UnityEngine;
using System.Collections;

public class PickUpCIPS : MonoBehaviour {

	private bool DrawGUI = false;
	public GameObject PostPoints; 
	public GameObject Device;
	public GameObject CIPSEthan;
	public GameObject Ethan;
	public GameObject Qscreen;
	public GameObject QscreenCover;
	public GameObject QLine;



	void Update()
{
	if (DrawGUI && Input.GetKeyDown(KeyCode.E))
	{   

		CIPSEthan.SetActive(true);
		PostPoints.SetActive (true);
		Ethan.SetActive(false);
		Qscreen.SetActive (true);
		QLine.SetActive (true);
		QscreenCover.SetActive (true);
		Destroy (gameObject);



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
		GUI.Box(new Rect(Screen.width / 2 - 100, Screen.height / 2 - 40, 310, 22), "Press 'E' key or (X) button to pick up CIPS Kit");



	}
}
}