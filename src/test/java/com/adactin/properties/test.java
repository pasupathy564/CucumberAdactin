package com.adactin.properties;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.PageObjectManager.object.PageObjectMan;
import com.adactin.baseclass.BaseClass;

public class test {
public static void main(String[] args) throws IOException {
		
		
		  WebDriver driver=BaseClass.browserLaunch("chrome");
		  BaseClass.getURL("https://adactin.com/HotelApp/index.php"); PageObjectMan pom
		  =new PageObjectMan(driver); WebElement username =
		  pom.getLogin().getUsername(); username.sendKeys("pasupathy");
		 
	System.out.println(FileManager.getHelper().getBrowserName());
	
	WebElement username2 = pom.getLogin().getUsername();
	username2.sendKeys("alter");
}
}
