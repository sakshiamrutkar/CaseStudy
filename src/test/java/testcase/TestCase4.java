package testcase;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestCase4 {
	WebDriver driver;
	@Given("user launches ie browser And navigates to TestMeApp")
	public void user_launches_ie_browser_And_navigates_to_TestMeApp() {
		System.setProperty("webdriver.ie.driver","C:\\NexGen Testing Stream\\Drivers\\IEDriverServer_Win32_3.14.0\\IEDriverServer.exe"); 
		driver = new InternetExplorerDriver();
		driver.manage().window().maximize();
	    driver.get("http://localhost:8083/TestMeApp");
	}

	@When("user clicks on signin")
	public void user_clicks_on_signin() {
		driver.findElement(By.linkText("SignIn")).click();
	}

	@When("user enter username as {string}")
	public void user_enter_username_as(String uname) {
		driver.findElement(By.name("userName")).sendKeys(uname);
	}

	@When("user enter password as {string}")
	public void user_enter_password_as(String pwd) {
		driver.findElement(By.name("password")).sendKeys(pwd);
	}

	@When("Click Login")
	public void click_Login() {
		driver.findElement(By.name("Login")).click();
	}

	@Then("validate Login success")
	public void validate_Login_success() {
		System.out.println("hii");
	}
	@Given("user validate the login success")
	public void user_validate_the_login_success() {
		//Assert.assertTrue(driver.getTitle().contains("Home"));
		System.out.println("hello");
	}

	@When("user clicks on All Categories")
	public void user_clicks_on_All_Categories() {
	    driver.findElement(By.linkText("All Categories")).click();
	}

	@When("user clicks on Electronics")
	public void user_clicks_on_Electronics() {
		driver.findElement(By.linkText("Electronics")).click();
	}

	@When("user doubleclicks on Headphone")
	public void user_doubleclicks_on_Headphone() {
		driver.findElement(By.linkText("Head Phone")).click();
	}

	@When("user type headphone in the search bar")
	public void user_type_headphone_in_the_search_bar() {
		driver.findElement(By.id("pname")).sendKeys("Head");
	}

	@When("user clicks on search button")
	public void user_clicks_on_search_button() {
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	@When("user click on Add to Cart button")
	public void user_click_on_Add_to_Cart_button() {
		driver.findElement(By.linkText("Add to cart")).click();
	}

	@Then("user clicks on Cart")
	public void user_clicks_on_Cart() {
		driver.findElement(By.xpath("//i[@class='fa fa-shopping-cart']")).click();
	}

	@Then("user clicks on Checkout")
	public void user_clicks_on_Checkout() {
		driver.findElement(By.linkText("Checkout")).click();
	}


}