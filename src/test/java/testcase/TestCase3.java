package testcase;

import java.sql.Driver;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestCase3 {
	WebDriver driver;
	@Given("user open TestMeApp")
	public void user_open_TestMeApp() {
		System.setProperty("webdriver.ie.driver","C:\\NexGen Testing Stream\\Drivers\\IEDriverServer_Win32_3.14.0\\IEDriverServer.exe"); 
		driver = new InternetExplorerDriver();
		driver.manage().window().maximize();
	    driver.get("http://localhost:8083/TestMeApp");
	}

	@When("user clicks on signup")
	public void user_clicks_on_signup() {
		driver.findElement(By.linkText("SignUp")).click();
	}

	@Then("user validates Signup page")
	public void user_validates_Signup_page() {
		Assert.assertTrue(driver.getTitle().contains("Sign Up"));
	}

	@When("user enters username")
	public void user_enters_username() {
		driver.findElement(By.name("userName")).sendKeys("sakshiamrutkar");
	}

	@When("user enters firstname")
	public void user_enters_firstname() {
		driver.findElement(By.name("firstName")).sendKeys("Sakshi");
	}

	@When("user enters lastname")
	public void user_enters_lastname() {
		driver.findElement(By.name("lastName")).sendKeys("Amrutkar");
	}

	@When("user enters password")
	public void user_enters_password() {
		driver.findElement(By.name("password")).sendKeys("abcdef");
	}

	@When("user enters confirm password")
	public void user_enters_confirm_password() {
		driver.findElement(By.name("confirmPassword")).sendKeys("abcdef");
	}

	@When("user select gender")
	public void user_select_gender() {
		driver.findElement(By.xpath("//input[@name='gender' and @value='Female']")).click();
	}

	@When("user enters email")
	public void user_enters_email() {
		driver.findElement(By.name("emailAddress")).sendKeys("s.sunil.amrutkar@accenture.com");
	}

	@When("user enters mobile number")
	public void user_enters_mobile_number() {
		driver.findElement(By.name("mobileNumber")).sendKeys("9999988888");
	}

	@When("user enters dob")
	public void user_enters_dob() {
		driver.findElement(By.name("dob")).sendKeys("25/06/1997");
	}

	@When("user enters address")
	public void user_enters_address() {
		driver.findElement(By.name("address")).sendKeys("Indore shgdsubdsde fsdfnheif efmnserhf");
	}

	@When("user enters security questions")
	public void user_enters_security_questions() {
	    Select question = new Select(driver.findElement(By.name("securityQuestion")));
	    question.selectByVisibleText("What is your Birth Place?");
	}

	@When("user enters answer")
	public void user_enters_answer() {
		driver.findElement(By.name("answer")).sendKeys("Indore");
	}

	@When("user click on register button")
	public void user_click_on_register_button() {
		driver.findElement(By.xpath("//input[@value='Register']")).click();
	}

	@Then("user validate Registration success")
	public void user_validate_Registration_success() {
	    System.out.println("hii");
	}
	
	

}
