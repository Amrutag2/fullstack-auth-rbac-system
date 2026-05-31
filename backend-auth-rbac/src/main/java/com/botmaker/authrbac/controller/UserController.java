package com.botmaker.authrbac.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/test")
    public String userApi() {
        return "This is USER API - accessible to User and Admin";
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }
}
