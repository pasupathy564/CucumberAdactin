package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinPayment {
	
	public static WebDriver driver;
	
	@FindBy(xpath="//*[@id=\"first_name\"]")
	private WebElement firstn;
	
	@FindBy(xpath="//*[@id=\"first_name\"]//following::input[1]")
	private WebElement lastn;
	
	@FindBy(xpath="//*[@id=\"address\"]")
	private WebElement billingAdd;
	
	@FindBy(xpath="//*[@id=\"address\"]//following::input[1]")
	private WebElement creditcard;
	
	@FindBy(xpath="//*[@id=\"cc_type\"]")
	private WebElement cardtype;
	
	@FindBy(xpath="//*[@id=\"cc_exp_month\"]")
	private WebElement expiryDate;
	
	@FindBy(xpath="//*[@id=\"cc_exp_year\"]")
	private WebElement expiryYear;
	
	@FindBy(xpath="//*[@id=\"cc_cvv\"]")
	private WebElement cvv;
	
	@FindBy(xpath="//*[@id=\"book_now\"]")
	private WebElement bookNow;
	
	public AdactinPayment(WebDriver ldriver){
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getFirstn() {
		return firstn;
	}

	public WebElement getLastn() {
		return lastn;
	}

	public WebElement getBillingAdd() {
		return billingAdd;
	}

	public WebElement getCreditcard() {
		return creditcard;
	}

	public WebElement getCardtype() {
		return cardtype;
	}

	public WebElement getExpiryDate() {
		return expiryDate;
	}

	public WebElement getExpiryYear() {
		return expiryYear;
	}

	public WebElement getCvv() {
		return cvv;
	}

	public WebElement getBookNow() {
		return bookNow;
	}

}
