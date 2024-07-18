import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages="com.poscodx")
public class EmaillistApplication {
	public static void main(String[] args) {
		SpringApplication.run(EmaillistApplication.class, args);
	}


}
