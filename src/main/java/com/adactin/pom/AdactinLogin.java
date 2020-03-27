package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinLogin {

	static WebDriver driver;
	
	@FindBy(xpath="(//input[@class='login_input'])[1]")
	private WebElement username;
	
	@FindBy(xpath="(//input[@class='login_input'])[1]//following::input")
	private WebElement password;
	
	@FindBy(xpath="(//input[@class='login_input'])[1]//following::input[2]")
	private WebElement loginBtn;
	
	
	
	
	
	

	public  AdactinLogin(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver,this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}

	

	

	
	
	

	
	
	
}
