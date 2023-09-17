package com.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.portal.enitity.User;


public interface UserRepository extends JpaRepository<User,String> {
	public User findByUsername(String username);
}
