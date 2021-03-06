﻿using UnityEngine;
using System.Collections;

public class CountdownTimerRiver : MonoBehaviour {
	public float timeRemaining = 120;
	public GameObject GameOverPanel;
	public GameObject PausePanel;
	public GameObject DeviceUIRiver;

	// Use this for initialization
	void Start () {
		GameOverPanel.SetActive (false);
		Cursor.visible = (false);
	}

	// Update is called once per frame
	void Update () {
		timeRemaining -= Time.deltaTime;
		if (timeRemaining < 0) {
			Cursor.visible = (true);

		}
	}

	void OnGUI (){
		if(timeRemaining > 0){
			GUI.color = Color.white;
			GUI.Box(new Rect(100, 100, 200, 25), "Seconds Remaining : "+(int)timeRemaining);

		}
		else{

			Cursor.visible = (true);
			DeviceUIRiver.SetActive (false);
			GameOverPanel.SetActive (true);
			PausePanel.SetActive (false);
		}
	}
}