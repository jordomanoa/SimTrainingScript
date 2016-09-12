using UnityEngine;
using System.Collections;

public class Forwards : MonoBehaviour {
	void Update() {
		transform.Translate(Vector3.forward * Time.deltaTime);
	}
}