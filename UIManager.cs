using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class UIManager : MonoBehaviour {

    public GameObject pausePanel;

    public bool isPaused;

    // Use this for initialization
    void Start() {
        isPaused = false;
        Cursor.visible = (false);
    }

    // Update is called once per frame
    void Update() {
        
        if (isPaused)
        {
            PauseGame(true);
            Cursor.visible = (true);
            
        }
        else
        {
            PauseGame(false);
            Cursor.visible = (false);
        }

        if (Input.GetButtonDown("Cancel"))
        {
            SwitchPause ();
        }
    }

    void PauseGame(bool state) {
        if (state)
        {
            Time.timeScale = 0.0f; //paused
        }
        else
        {
            Time.timeScale = 1.0f; //unpaused
        }
        pausePanel.SetActive(state);
    }


    public void SwitchPause()
    {
        if (isPaused)
        {
            isPaused = false; //changes the value
        
    } else {
        isPaused = true;

        }

    }
}
