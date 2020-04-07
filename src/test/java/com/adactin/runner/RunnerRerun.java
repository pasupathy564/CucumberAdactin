package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.properties.FileManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(features="@Report/Failedcase.txt",
	glue="com\\adactin\\stepdefinition",
	monochrome=true,
	plugin={"pretty","html:Report","com.cucumber.listener.ExtentCucumberFormatter:Report/rerunReport.html"},
	dryRun=false,
	strict=true)
	public class RunnerRerun {
		
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
