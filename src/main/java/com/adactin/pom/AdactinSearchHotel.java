package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinSearchHotel {
	
	public static WebDriver driver;
	
	@FindBy(xpath="//*[@id=\"location\"]")
	private WebElement location;
	
	@FindBy(xpath="//*[@id=\"location\"]//following::select[1]")
	private WebElement hotel;
	
	@FindBy(xpath="//*[@id=\"location\"]//following::select[2]")
	private WebElement roomsize;
	
	@FindBy(xpath="//*[@id=\"location\"]//following::select[3]")
	private WebElement roomNo;
	
	@FindBy(xpath="//*[@id=\"adult_room\"]")
	private WebElement personAdult;
	
	@FindBy(xpath="//*[@id=\"Submit\"]")
	private WebElement search;
	
	public AdactinSearchHotel(WebDriver ldriver){
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoomsize() {
		return roomsize;
	}

	public WebElement getRoomNo() {
		return roomNo;
	}

	public WebElement getPersonAdult() {
		return personAdult;
	}

	public WebElement getSearch() {
		return search;
	}

}
