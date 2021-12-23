package akad2021.vakcina;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableAutoConfiguration
@EnableSwagger2
@SpringBootApplication
public class App extends SpringBootServletInitializer {
	

	
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
    
	@Bean public Docket swaggerDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.basePackage("akad2021.vakcina"))
				.build();
	}
	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
		.title("egzamino 2021 REST Documentation")
		.version("0.0.1-SNAPSHOT")
		.build();
		}
}
