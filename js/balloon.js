//TO DO's:
//Set variables
//Create random generator for changing <p> to either "Helium" or "Air"
//Create function to find a match of balloon size (image) and <p>

var rand;

function generateBalloons(){

	//Image changes for b1
		rand = Math.floor(Math.random()*5);

		if(rand == 0){
			document.getElementById("b1").src = "/img/balloon20.jpg";
		}
		if(rand == 1){
			document.getElementById("b1").src = "/img/balloon40.jpg";
		}
		if(rand == 2){
			document.getElementById("b1").src = "/img/balloon60.jpg";
		}
		if(rand == 3){
			document.getElementById("b1").src = "/img/balloon80.jpg";
		}
		if(rand == 4){
			document.getElementById("b1").src = "/img/balloon100.jpg";
		}

		//Image changes for b2	
			if(rand == 0){
				document.getElementById("b2").src = "/img/balloon20.jpg";
			}
			if(rand == 1){
				document.getElementById("b2").src = "/img/balloon40.jpg";
			}
			if(rand == 2){
				document.getElementById("b2").src = "/img/balloon60.jpg";
			}
			if(rand == 3){
				document.getElementById("b2").src = "/img/balloon80.jpg";
			}
			if(rand == 4){
				document.getElementById("b2").src = "/img/balloon100.jpg";
			}

	/*

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
		*/

	}
