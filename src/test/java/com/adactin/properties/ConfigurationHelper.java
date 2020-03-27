package com.adactin.properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationHelper {
	public static Properties p;
	public ConfigurationHelper() throws IOException {
		File f=new File("C:\\Users\\pasupac\\eclipse-workspace\\CucumberAdactin\\src\\test\\java\\com\\adactin\\properties\\Configuration.properties");
		FileInputStream fis=new FileInputStream(f);
		p=new Properties();
		p.load(fis);
		
	}
	

	public static  String getBrowserName() {
		String browser = p.getProperty("browser");
		return browser;
	}
	
	public String getUrl() {
		String url = p.getProperty("url");
		return url;
	}
	
	
}
