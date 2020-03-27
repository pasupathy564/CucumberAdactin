package com.adactin.stepdefinition;

import cucumber.api.Scenario;
import cucumber.api.java.*;

public class StepDefinitionHooks {
	
	@Before
	public void beforeHooks(Scenario scenar) {
		System.out.println("before hooks");
		System.out.println("Scenario name is"+scenar.getName());
	}
	
	@After
	public void afterHooks(Scenario scenar) {
		System.out.println("after hooks");
		System.out.println(scenar.getStatus());
	}


}
