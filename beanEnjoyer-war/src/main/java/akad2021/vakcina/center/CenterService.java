package akad2021.vakcina.center;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

  
@Service
public class CenterService {
	
	@Qualifier ("dbCenterDao")
	private CenterDao centerDao;
	
	
	@Transactional(readOnly = true)
	public List<Center> getCenters() {
		return centerDao.getCenters();
	}
	
	@Transactional
	public void createCenter(Center center) {
		centerDao.addCenter(center);
	}
	
	@Transactional
	public boolean deleteCenter(Long id) {
		return centerDao.deleteCenter(id);
	}

}
