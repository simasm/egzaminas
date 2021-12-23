package akad2021.vakcina.center;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Center {
	@Transient
	private static long idgen = 1;
	
	@Column
	private long registeredUsersNumber;
	@Column
	private long id;
	@Column
	private long vacNumber;
	@Column
	private String location;
	@Column
	private String title;
	@Column 
	private String description;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long dbid;
	
	
	public Center() { }
	
	public Center(long registeredUsersNumber, long vacNumber, String location, String title,
			String description) {
		super();
		this.registeredUsersNumber = registeredUsersNumber;
		this.vacNumber = vacNumber;
		this.location = location;
		this.title = title;
		this.description = description;
		this.id = idgen++;
	}

 
	public long getRegisteredUsersNumber() {
		return registeredUsersNumber;
	}
	public void setRegisteredUsersNumber(long registeredUsersNumber) {
		this.registeredUsersNumber = registeredUsersNumber;
	}
	public long getId() {
		return id;
	}
	 
	public long getVacNumber() {
		return vacNumber;
	}
	public void setVacNumber(long vacNumber) {
		this.vacNumber = vacNumber;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Long getDbid() {
		return dbid;
	}
	public void setDbid(Long dbid) {
		this.dbid = dbid;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
