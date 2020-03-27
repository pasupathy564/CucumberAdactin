package com.adactin.baseclass;

import java.util.Scanner;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.security.PublicKey;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Timeouts;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	/*
	 * 		Select s = new Select(element);
			s.selectByValue(i);

	 * 		Alert alert = driver.switchTo().alert();
			alert.dismiss(simple,confirm,prompt)
			
			Robot keyboard = new Robot();

			Actions ac = new Actions(driver);
			ac.moveToElement(element).perform()--->also contextclick,doublelclick,drag and drop)
	 */
	
	public static WebDriver driver;


	public static WebDriver browserLaunch(String browser) {

		if (browser.equalsIgnoreCase("chrome")) {
			// System.setProperty("webdriver.chrome.driver",System.getProperty("User.dir")+"\\drivers\\chromedriver.exe");
			System.setProperty("webdriver.chrome.driver","C:\\Users\\pasupac\\eclipse-workspace\\SeleniumConcepts\\drivers\\chromedriver.exe");

			driver = new ChromeDriver();
		} else {
			if (browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						"C:\\Users\\pasupac\\eclipse-workspace\\Greens tech\\drivers\\geckodriver.exe");
				driver = new FirefoxDriver();
			} else {
				if (browser.equalsIgnoreCase("IE")) {
					System.setProperty("webdriver.ie.driver",
							"C:\\Users\\pasupac\\eclipse-workspace\\Greens tech\\drivers\\IEDriverServer.exe");
					driver = new InternetExplorerDriver();
				} else {
					System.out.println("Invalid");
				}
			}

		}
		driver.manage().window().maximize();
		return driver;
	}

	public static void getURL(String url) {
		try {
			driver.get(url);
		} catch (Exception e) {
			System.out.println("Problem with getURL");
		}
	}

	public static void navigateTo(String url) {
		try {
			driver.navigate().to(url);

		} catch (Exception e) {
			System.out.println("Problem with navigateURL");
		}
	}

	public static void navigateBack() {
		try {
			driver.navigate().back();
		} catch (Exception e) {
		}
	}

	public static void navigateForward() {
		try {
			driver.navigate().forward();
		} catch (Exception e) {
		}
	}

	public static void refresh() {
		try {
			driver.navigate().refresh();
		} catch (Exception e) {
		}
	}

	public static void close() {
		try {
			driver.close();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Close problem");
		}
	}

	public static void quit() {
		try {
			driver.quit();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Quit problem");
		}
	}

	public static void dropDowns(WebElement element, String option, String i) {
		Select s = new Select(element);
		try {
			if (option.equalsIgnoreCase("byIndex")) {

				int indexValue = Integer.parseInt(i);
				s.selectByIndex(indexValue);

			} else {
				if (option.equalsIgnoreCase("byValue")) {
					s.selectByValue(i);

				} else {
					if (option.equalsIgnoreCase("byVisibleText")) {
						s.selectByVisibleText(i);
					} else {
						System.out.println("Invalid SelectMethod");
					}
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void alertBox(String alertType, String AccOrDism) {
		Alert alert = driver.switchTo().alert();
		if (alertType.equalsIgnoreCase("simple")) {

			if (AccOrDism.equalsIgnoreCase("dismiss")) {
				alert.dismiss();
			} else {
				if (AccOrDism.equalsIgnoreCase("accept")) {
					alert.accept();
				} else {
					System.out.println("Wrong alert command");
				}
			}
		} else {
			if (alertType.equalsIgnoreCase("confirm")) {

				if (AccOrDism.equalsIgnoreCase("dismiss")) {
					alert.dismiss();
				} else {
					if (AccOrDism.equalsIgnoreCase("accept")) {
						alert.accept();
					} else {
						System.out.println("Wrong alert command");
					}
				}

			} else {

				System.out.println("Invalid alert type");

			}

		}
	}

	public static void alertPrompt(String AccOrDism, String SendKe) {

		Alert alert = driver.switchTo().alert();
		alert.sendKeys(SendKe);

		if (AccOrDism.equalsIgnoreCase("dismiss")) {
			alert.dismiss();
		} else {
			if (AccOrDism.equalsIgnoreCase("accept")) {
				alert.accept();
			} else {
				System.out.println("Wrong alert command");
			}
		}
	}

	public static void framesMethod(String frametype, String frameValue) {

		try {
			if (frametype.equalsIgnoreCase("byindex")) {
				int intValue = Integer.parseInt(frameValue);
				driver.switchTo().frame(intValue);
			} else {
				if (frametype.equalsIgnoreCase("byID")) {
					driver.switchTo().frame(frameValue);
				} else {
					System.out.println("Try frame with element");
				}

			}

		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void elementFrame(WebElement arg) {
		try {
			driver.switchTo().frame(arg);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void robot(int n) {

		try {
			Robot keyboard = new Robot();
			while (n > 0) {
				keyboard.keyPress(KeyEvent.VK_DOWN);
				keyboard.keyRelease(KeyEvent.VK_DOWN);

			}
			keyboard.keyPress(KeyEvent.VK_ENTER);
			keyboard.keyRelease(KeyEvent.VK_ENTER);

		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void actionMethod(String actionM, WebElement element) {

		Actions ac = new Actions(driver);
		if (actionM.equalsIgnoreCase("hover")) {
			ac.moveToElement(element).build().perform();
		} else {
			if (actionM.equalsIgnoreCase("rightclick")) {
				ac.contextClick(element).perform();
			} else {
				System.out.println("Sorry, we dont support this action");
			}

		}
	}

	public static void windowHandle(String args) {

		Set<String> windowHandles = driver.getWindowHandles();
		for (String string : windowHandles) {
			if (driver.switchTo().window(string).getTitle().equalsIgnoreCase(args)) {

				break;
			}

		}
	}

	public static void enableAndDisable(String eOrD, WebElement args) {
		try {

			if (eOrD.equalsIgnoreCase("isenabled")) {
				boolean enabled = args.isEnabled();
				System.out.println(enabled);
			} else {
				if (eOrD.equalsIgnoreCase("isDisplayed")) {
					boolean displayed = args.isDisplayed();
					System.out.println(displayed);
				} else {
					System.out.println("try isselected please");
				}

			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void isSelected(WebElement args) {
		try {
			boolean selected = args.isSelected();
			System.out.println(selected);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void currentURL() {
		try {
			String currentURL = driver.getCurrentUrl();
			System.out.println(currentURL);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void getText(WebElement args) {
		try {
			System.out.println(args.getText());
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void getAttribut(WebElement args, String value) {
		try {
			System.out.println(args.getAttribute(value));
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void clicking(WebElement args) {
		try {
			args.click();
		} catch (Exception e) {
			// TODO: handle exception
		}

	}

	public static void getOpt(Select value) {
		try {
			List<WebElement> years1 = value.getOptions();
			for (WebElement webElement1 : years1) {
				System.out.println(webElement1.getText());
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void sendingKey(WebElement args, String value) {
		args.sendKeys(value);
	}

	public static void screensht() {
		try {
			TakesScreenshot ts = (TakesScreenshot) driver;
			File srcFile = ts.getScreenshotAs(OutputType.FILE);
			File DestnFile = new File("C:\\Users\\pasupac\\eclipse-workspace\\Greens tech\\screenshot\\pic.png");
			FileUtils.copyFile(srcFile, DestnFile);

		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void scrollUpandDown(WebElement args) {
		try {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("arguments[0].scrollIntoView()", args);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void explicit(int value, WebElement expElement) {

		
			WebDriverWait wait = new WebDriverWait(driver, value);
			wait.until(ExpectedConditions.visibilityOf(expElement));
	
	}

	public static void implicitlyWait(int value) {
		driver.manage().timeouts().implicitlyWait(value, TimeUnit.SECONDS);
	}
	
	public static void sleep(int sec) {
		try{
			Thread.sleep(sec);
	}catch (Exception e) {
		// TODO: handle exception
	}}
	
	
		
	
	
}
	
	

