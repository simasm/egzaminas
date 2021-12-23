package akad2021.vakcina.center;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api(tags="Vac center service")
@RequestMapping(value = "api/centers")
public class CenterController {

	private final CenterService centerService;
	 @Autowired PagingData pagingData;
	
	@Autowired
	public CenterController(CenterService centerService) {
		this.centerService = centerService;
	}
	

 	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value="Get centers")
 	public List<Center> getCenters() {
 		pagingData.setLimit(5);
		return centerService.getCenters();
	}
 	@ApiOperation(value="Create new center")
 	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createCenter(@ApiParam(value="center data")
			@RequestBody final CenterCreateCommand cmd ) {
		centerService.createCenter(new Center(
				cmd.getRegisteredUsersNumber(),
				cmd.getVacNumber(),
				cmd.getPlace(),
				cmd.getTitle(),
				cmd.getDescription()));
		 System.out.println("created "+ cmd.getTitle());
	}
	
	@ApiOperation(value="delete center by id")
 	@RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	 public void deleteCenter(@ApiParam(value="product id")
			 @PathVariable final long id) {
		
		 System.out.println("Deleted: " + id + 
				 " " +  centerService.deleteCenter(id));
	 }
	
	
}
