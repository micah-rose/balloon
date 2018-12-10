//TO DO's:
//Set variables
//Create balloon objects for comparison
//Create function for the random balloon generator

var size = {XS, S, M, L, XL};
var balloon;
var helium;
var image1;
var image2;
var imagePath;
//Math.floor(Math.random()*2);

function generateBalloons(){

    rand = Math.floor(Math.random()*5);

    image1 = new Balloon(size.value(rand), helium);
    image2 = new Balloon(size.value(rand), helium);
    //document.getElementById("b1").src 
    //document.getElementById("b2").src

}

function toString() 
	{
		return getSize() + " " + (isHelium() ? "Helium" : "Air");
	}
	
	//@Override
	//public int hashCode() 
	//{
	//	final int prime = 31;
	//	int result = 1;
	//	result = prime * result + ((size == null) ? 0 : size.hashCode());
	//	result = prime * result + (helium ? 1231 : 1237);
	//	return result;
	//}

	function equals(obj) 
	{
		if (this == obj) return true;
		if (obj == null) return false;
		if (!(obj instanceof Balloon)) return false; 
		//Balloon other = (Balloon) obj;                //FIX ME - adjust this to fit needs
		if (size != other.size) return false;		
		if (helium != other.helium) return false;
		return true;
	}
    
    //Balloon constructor - declare an array in the arguments?
	function Balloon(size, helium) 
	{
		this.size = size;
        this.helium = helium;
        
		switch(size)
		{
			case XS: imagePath ="/img/balloon20.jpg";  break;
			case S: imagePath = "/img/balloon40.jpg"; break;
			case M: imagePath = "/img/balloon60.jpg"; break;
			case L: imagePath = "/img/balloon80.jpg"; break;
			case XL: imagePath ="/img/balloon100.jpg"; break;
		}
	}
	
	function getSize() 
	{
		return size;
	}
	
	function isHelium() 
	{
		return helium;
	}
	
	function getImagePath() 
	{ 
		return imagePath;
	}
