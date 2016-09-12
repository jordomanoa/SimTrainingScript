using UnityEngine;
using System.Collections;

public class Backward : MonoBehaviour {
	void Update() {
		transform.Translate(Vector3.back * Time.deltaTime);
	}
}