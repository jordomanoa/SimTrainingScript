using UnityEngine;
using System.Collections;

public class PickUp : MonoBehaviour {

	private bool DrawGUI = false;
	public GameObject Device;
	public GameObject DCVGEthan;
	public GameObject Ethan;
	public GameObject Countdown;
	public GameObject Score;
	public GameObject Sign;
    


	void Update()
	{
		if (DrawGUI && Input.GetKeyDown(KeyCode.E))
		{   
            
			DCVGEthan.SetActive(true);
			Countdown.SetActive(true);
			Score.SetActive(true);
			Sign.SetActive (true);
			Ethan.SetActive(false);
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
			GUI.Box(new Rect(Screen.width / 2 - 100, Screen.height / 2 - 40, 310, 22), "Press 'E' key or (X) button to pick up DCVG Device");



		}
	}
}