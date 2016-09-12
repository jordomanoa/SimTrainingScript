using UnityEngine;
using System.Collections;

public class ExitGame : MonoBehaviour {

	public GameObject FinishedSurveyPanel; 






	void Update()
	{
		if (FinishedSurveyPanel && Input.GetKeyDown(KeyCode.E))
		{   


			Application.LoadLevel("CIPSMenu");
			Cursor.visible = true;

		}
	}
	void OnTriggerEnter(Collider other)
	{
		FinishedSurveyPanel.SetActive(true);
	}
	void OnTriggerExit(Collider other)
	{
		FinishedSurveyPanel.SetActive(false);
	}
}
