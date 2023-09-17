package com.portal.service;

import com.portal.enitity.User;


public interface UserService {
	//creating user
	public User createUser(User user);
	public User getUser(String username);
}
