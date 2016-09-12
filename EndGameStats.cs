using UnityEngine;
using System.Collections;

public class EndGameStats : MonoBehaviour {

	public GameObject FinishedDCVGSurveyPanel;







	void Update()
	{
		if (FinishedDCVGSurveyPanel && Input.GetKeyDown(KeyCode.E))
		{   


			Application.LoadLevel("SimMenu");
			Cursor.visible = (true);


		}
	}
	void OnTriggerEnter(Collider other)
	{
		Cursor.visible = (true);
		FinishedDCVGSurveyPanel.SetActive(true);
	}
	void OnTriggerExit(Collider other)
	{
		FinishedDCVGSurveyPanel.SetActive(false);
	}
}

