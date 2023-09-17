package com.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.portal.enitity.User;
import com.portal.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userService;
	
	//register 
	@PostMapping("/")
	public User registerUser(@RequestBody User user) {
		System.out.println(user);
		User user1 = this.userService.createUser(user);
		return  user1 ;
	}
	
	@PostMapping("/login")
	public User LoginUser(@RequestBody User user) {
		System.out.println(user);
		User user1 = this.userService.getUser(user.getUsername());
		System.out.println("Login successfully");
		return  user1 ;
	}
	
	
	
}
