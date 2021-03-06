package akad2021.vakcina.center;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

@Component
@Scope(value="request",proxyMode= ScopedProxyMode.TARGET_CLASS)
public class PagingData {
	
	private int limit;
 
	
	public PagingData() {
		this.limit = 5;
	}

	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}

}