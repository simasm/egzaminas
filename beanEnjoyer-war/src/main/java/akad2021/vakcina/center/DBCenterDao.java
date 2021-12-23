package akad2021.vakcina.center;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DBCenterDao implements CenterDao{
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Autowired
	private PagingData pagingData;
	

	@Override
	public List<Center> getCenters() {

		return entityManager.createQuery("SELECT c from Center c",
				Center.class).setMaxResults(pagingData.getLimit())
				.getResultList();
	}

	@Override
	public void addCenter(Center center) {
		entityManager.persist(center);
		
	}

	@Override
	public boolean deleteCenter(long id) {
		Center center = entityManager
				.createQuery("SELECT c from Center c where id = :pn",
						Center.class)
				.setParameter("pn", id).getSingleResult();
		if(entityManager.contains(center)) {
			entityManager.remove(center);
			return true;
			}
		else {
			entityManager.remove(entityManager.merge(center)); 
			return false;
		}
				
	 
	}

}
