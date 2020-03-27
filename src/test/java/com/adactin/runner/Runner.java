package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Sleeper;

import com.adactin.baseclass.BaseClass;
import com.adactin.properties.FileManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\pasupac\\eclipse-workspace\\CucumberAdactin\\src\\test\\java\\com\\adactin\\feature\\adactin.feature",
glue="com\\adactin\\stepdefinition",
monochrome=true,
plugin={"pretty","html:Report","com.cucumber.listener.ExtentCucumberFormatter:Report\\extentReport.html",
		"rerun:Report/rerun.txt"},
dryRun=false,
strict=true)
public class Runner {
	
	public static WebDriver driver;
	 
	@BeforeClass
	public static void setup() throws IOException {
		String browserName = FileManager.getHelper().getBrowserName();
	    driver=BaseClass.browserLaunch(browserName);
	    System.out.println("before class running");
	    
	    BaseClass.getURL(FileManager.getHelper().getUrl());		
	}
	@AfterClass
	public static void tearDown() {
		System.out.println("AfterClass running");
		BaseClass.sleep(7000);
		BaseClass.quit();
	} 
	
	

}