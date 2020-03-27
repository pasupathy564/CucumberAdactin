package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinSelectHotel {
	
	public static WebDriver driver;
	
	@FindBy(xpath="//*[@id=\"radiobutton_0\"]")
	private WebElement hotelSelect;
	
	@FindBy(xpath="//*[@id=\"continue\"]")
	private WebElement continueButton;
	
	public AdactinSelectHotel(WebDriver ldriver){
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getHotelSelect() {
		return hotelSelect;
	}

	public WebElement getContinueButton() {
		return continueButton;
	}

}
