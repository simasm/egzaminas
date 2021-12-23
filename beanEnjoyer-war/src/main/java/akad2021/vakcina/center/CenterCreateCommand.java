package akad2021.vakcina.center;

import javax.persistence.Column;

public class CenterCreateCommand {
	
	 
	private long registeredUsersNumber;
	 
	private long id;
	 
	private long vacNumber;
 
	private String place;
	 
	private String title;
	private String description;
	
	public long getRegisteredUsersNumber() {
		return registeredUsersNumber;
	}

	public void setRegisteredUsersNumber(long registeredUsersNumber) {
		this.registeredUsersNumber = registeredUsersNumber;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getVacNumber() {
		return vacNumber;
	}

	public void setVacNumber(long vacNumber) {
		this.vacNumber = vacNumber;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	public void setDescription(String desc) {
		this.description = desc;
	}
	
	public String getDescription() {
		return this.description;
	}

	

}
