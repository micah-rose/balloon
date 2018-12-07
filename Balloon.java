package labBalloon;

import javax.swing.Icon;
import javax.swing.ImageIcon;

public class Balloon 
{
	
	private Size size;
	private boolean helium;
	private String imagePath;
	
	@Override
	public String toString() 
	{
		return getSize() + " " + (isHelium() ? "Helium" : "Air");
	}
	
	@Override
	public int hashCode() 
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((size == null) ? 0 : size.hashCode());
		result = prime * result + (helium ? 1231 : 1237);
		return result;
	}

	@Override
	public boolean equals(Object obj) 
	{
		if (this == obj) return true;
		if (obj == null) return false;
		if (!(obj instanceof Balloon)) return false;
		Balloon other = (Balloon) obj;
		if (size != other.size) return false;		
		if (helium != other.helium) return false;
		return true;
	}
	
	public Balloon(Size s, boolean h) 
	{
		size = s;
		helium = h;
		switch(s)
		{
			case XS: imagePath = "/labBalloon/images/balloon20.jpg"; break;
			case S: imagePath = "/labBalloon/images/balloon40.jpg"; break;
			case M: imagePath = "/labBalloon/images/balloon60.jpg"; break;
			case L: imagePath = "/labBalloon/images/balloon80.jpg"; break;
			case XL: imagePath = "/labBalloon/images/balloon100.jpg"; break;
		}
	}
	
	public Size getSize() 
	{
		return size;
	}
	
	public boolean isHelium() 
	{
		return helium;
	}
	
	public String getImagePath() 
	{ 
		return imagePath;
	}
}
