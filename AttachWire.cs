using UnityEngine;
using System.Collections;

public class AttachWire : MonoBehaviour {

	private bool DrawGUI = false;
	public GameObject Wire; 
	public GameObject Coil;
	public GameObject QLine;
	public GameObject SINLine;
	public GameObject QScreenCover;
	public GameObject DeviceSINShow;






	void Update()
	{
		if (DrawGUI && Input.GetKeyDown(KeyCode.E))
		{   
			QScreenCover.SetActive(false);
			Wire.SetActive(true);
			Coil.SetActive(true);
			QLine.SetActive(false);
			SINLine.SetActive(true);
			QScreenCover.SetActive(true);
			DeviceSINShow.SetActive(true);
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
			GUI.Box(new Rect(Screen.width / 2 - 100, Screen.height / 2 - 40, 310, 22), "Press 'E' key or (X) button to attach wire");



		}
	}
}