package com.adactin.properties;

import java.io.IOException;

public class FileManager {

	private FileManager() {

	}

	public static FileManager getInstance() {
		FileManager fm = new FileManager();
		return fm;
	}

	public static ConfigurationHelper getHelper() throws IOException {
		ConfigurationHelper ch=new ConfigurationHelper();
		return ch;
	}
}
