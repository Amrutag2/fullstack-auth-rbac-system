package com.botmaker.authrbac.service;

import com.botmaker.authrbac.dto.LoginRequest;
import com.botmaker.authrbac.dto.LoginResponse;
import com.botmaker.authrbac.dto.RegisterRequest;
import com.botmaker.authrbac.entity.User;
import com.botmaker.authrbac.repository.UserRepository;
import com.botmaker.authrbac.utils.JWTUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.jspecify.annotations.Nullable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.spec.OAEPParameterSpec;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtil jwtUtil;

    public String register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already exists!";
        }
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole()).build();
        userRepository.save(user);
        return "User registered successfully";
    }

    public LoginResponse login(LoginRequest request) {
        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User Not Found")));

        if(!passwordEncoder.matches(request.getPassword(),user.get().getPassword())){
            throw new RuntimeException("Wrong Password");
        }
        String token = jwtUtil.generateToken(user.get().getEmail(),user.get().getRole().name());
        return new LoginResponse(token,user.get().getRole().name());
    }
}
