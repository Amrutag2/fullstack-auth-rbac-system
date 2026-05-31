package com.botmaker.authrbac.dto;

import com.botmaker.authrbac.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
   private String Token;
    private String role;
}
