using UnityEngine;
using System.Collections;

public class SurveyComplete : MonoBehaviour {

	private bool DrawGUI = false;
	public GameObject AttachedWire;
	public GameObject WireTrail;
	public GameObject SurveyFinishedPanel;
	public GameObject QLine;
	public GameObject SINLine;
	public GameObject QScreenCover;
	public GameObject DeviceSINShow;




	void Update()
	{
		if (DrawGUI && Input.GetKeyDown(KeyCode.E))
		{   

			QScreenCover.SetActive(false);
			AttachedWire.SetActive(true);
			WireTrail.SetActive(false);
			SurveyFinishedPanel.SetActive(true);
			QLine.SetActive(true);
			SINLine.SetActive(false);
			QScreenCover.SetActive(true);
			DeviceSINShow.SetActive(false);
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
