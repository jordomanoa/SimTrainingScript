using UnityEngine;
using System.Collections;

public class StartInfo : MonoBehaviour {

	public GameObject StartInfoPanelKeys;
	public GameObject StartInfoPanelPad;
	public GameObject Infopanels;







	void Update()
	{
		if (Input.GetKey (KeyCode.Return)) 
		{
			Infopanels.SetActive (false);
		}

		if (Input.GetKey (KeyCode.RightArrow)) 
		{
			StartInfoPanelKeys.SetActive (false);
			StartInfoPanelPad.SetActive (true);
		}

		if (Input.GetKey (KeyCode.LeftArrow)) 
		{
			StartInfoPanelKeys.SetActive (true);
			StartInfoPanelPad.SetActive (false);
		}
}
}