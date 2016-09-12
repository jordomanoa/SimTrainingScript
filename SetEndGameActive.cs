using UnityEngine;
using System.Collections;

public class SetEndGameActive : MonoBehaviour {

	public GameObject EndGame;
	
	void OnTriggerEnter(Collider other)
	{
		
		EndGame.SetActive(true);
	}
}