using UnityEngine;
using System.Collections;

public class CloseToCorr : MonoBehaviour {



	public GameObject needleClose;
	public GameObject needleNormal;




	void OnTriggerEnter(Collider other)
	{
		needleClose.SetActive (true);
		needleNormal.SetActive (false);
	}

	void OnTriggerExit(Collider other)
	{
		needleClose.SetActive (false);
		needleNormal.SetActive (true);
		Destroy (gameObject);
	}

}