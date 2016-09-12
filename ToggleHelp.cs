using UnityEngine;
using System.Collections;

public class ToggleHelp : MonoBehaviour {

    public GameObject HelpPanel = null;

    private void OnClick()
    {
        HelpPanel.SetActive(true);
    }
}
