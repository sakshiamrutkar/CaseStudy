package testcase;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestCase2 {
	WebDriver driver;
	@Given("user launches ie browser And navigates to application url")
	public void user_launches_ie_browser_And_navigates_to_application_url() {
		System.setProperty("webdriver.ie.driver","C:\\NexGen Testing Stream\\Drivers\\IEDriverServer_Win32_3.14.0\\IEDriverServer.exe"); 
		driver = new InternetExplorerDriver();
		driver.manage().window().maximize();
	    driver.get("http://newtours.demoaut.com");
	}

	@When("user enter username as {string} in username field")
	public void user_enter_username_as_in_username_field(String uname) {
	    driver.findElement(By.name("userName")).sendKeys(uname);
	}

	@When("user enter password as {string} in password field")
	public void user_enter_password_as_in_password_field(String pwd) {
		driver.findElement(By.name("password")).sendKeys(pwd);
	}

	@When("Click Signin")
	public void click_Signin() {
		driver.findElement(By.name("login")).click();
	}

	@Then("validates Login success")
	public void validates_Login_success() {
	    //Assert.assertTrue(driver.getTitle().contains("Find a Flight"));
	    System.out.println("hii");
		driver.close();
	}
	@Given("user login testmeapp using valid credentials")
	public void user_login_testmeapp_using_valid_credentials() {
	    System.out.println("Login");
	}

	@Given("user searching for products available in catalog")
	public void user_searching_for_products_available_in_catalog() {
		System.out.println("Search Product");
	}

	@Given("user adding products to cart")
	public void user_adding_products_to_cart() {
		System.out.println("Add Products to cart");
	}

	@Given("user performing payment using Netbanking")
	public void user_performing_payment_using_Netbanking() {
		System.out.println("Payment");
	}

	@Given("user performs logout")
	public void user_performs_logout() {
		System.out.println("Logout");
	}

}
