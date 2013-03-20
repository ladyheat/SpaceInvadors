#pragma strict

function Start () {

}

function Update () {
	
	transform.Translate(Vector3.up * 10 * Time.deltaTime);
}

function OnBecameInvisible () {

	Destroy(this.gameObject);
}