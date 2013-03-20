#pragma strict
var Laser:Rigidbody;


function Start () {

}

function Update () {
	
	BorderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * 10 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(Laser,transform.position,transform.rotation);
	}
}