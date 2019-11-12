package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features", 
				glue="testcase", 
				plugin="junit:target\\xmlreport.xml", 
				//plugin="html:target\\htmlreport",
				//plugin="json:target\\jsonreport.json"
				//tags="@payment"
				tags="~@payment")		//skips the scenario
public class RunnerClass {

}

