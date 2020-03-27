package com.adactin.baseclass;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.pom.AdactinLogin;
import com.adactin.pom.AdactinPayment;
import com.adactin.pom.AdactinSearchHotel;
import com.adactin.pom.AdactinSelectHotel; 


public class AdactinAutomation extends BaseClass {
	
	public static WebDriver driver;
	
	public static void main(String[] args) {
		
		driver=browserLaunch("chrome");
		getURL("https://adactin.com/HotelApp/index.php");

		AdactinLogin ad=new AdactinLogin(driver);
		
		sendingKey(ad.getUsername(), "pasupathy");
		
		sendingKey(ad.getPassword(), "password");
		
		clicking(ad.getLoginBtn());

		
		AdactinSearchHotel srh=new AdactinSearchHotel(driver);
		
		
		dropDowns(srh.getLocation(), "byvalue", "London");
		
		dropDowns(srh.getHotel(), "byvalue", "Hotel Creek");
		
		dropDowns(srh.getRoomsize(), "byvalue", "Double");
		
		dropDowns(srh.getRoomNo(), "byvalue", "1 - One");
				
		dropDowns(srh.getPersonAdult(), "byvalue", "2 - Two");
		
		clicking(srh.getSearch());
		
		AdactinSelectHotel slh=new AdactinSelectHotel(driver);
		
		clicking(slh.getHotelSelect());
		
		clicking(slh.getContinueButton());
		
		AdactinPayment p=new AdactinPayment(driver);
		
		sendingKey(p.getFirstn(), "Pasupac");
		
		sendingKey(p.getLastn(), "pc");
		
		sendingKey(p.getBillingAdd(), "no1 street");
		
		sendingKey(p.getCreditcard(), "1234567891234567");
		
		dropDowns(p.getCardtype(), "byindex", "1");
		
		sendingKey(p.getExpiryDate(), "january");
		
		dropDowns(p.getExpiryYear(), "byvalue", "2022");
		
		
		sendingKey(p.getCvv(), "222");
		
		clicking(p.getBookNow());
				
		
		
	}
}