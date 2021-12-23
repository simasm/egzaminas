package akad2021.vakcina.center;

import java.util.List;

 
public interface CenterDao {

	List<Center> getCenters(); 
	void addCenter(Center center);
	boolean deleteCenter(long id);
}
