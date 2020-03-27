package com.PageObjectManager.object;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.AdactinLogin;
import com.adactin.pom.AdactinPayment;
import com.adactin.pom.AdactinSearchHotel;
import com.adactin.pom.AdactinSelectHotel;

public class PageObjectMan {
	
	public static WebDriver driver;
	public static AdactinLogin al;
	public static AdactinSearchHotel srh;
	public static AdactinSelectHotel slh;
	public static AdactinPayment p;
	
	public PageObjectMan(WebDriver ldriver) {
		this.driver=ldriver;
	}
	
	public AdactinLogin getLogin() {
		 al=new AdactinLogin(driver);
		 return al;
	}
	
	public AdactinSearchHotel getSearchHotel() {
		 srh=new AdactinSearchHotel(driver);
		 return srh;
	}
	
	public AdactinSelectHotel getSelectHotel() {
		 slh=new AdactinSelectHotel(driver);
		 return slh;
		 
	}
	
	public AdactinPayment getPayment() {
		 p=new AdactinPayment(driver);
		 return p;
	}

}
