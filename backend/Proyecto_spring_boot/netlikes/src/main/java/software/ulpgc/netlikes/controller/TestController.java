package software.ulpgc.netlikes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/hola")
    public String hola() {
        return "Backend funcionando!";
    }
}
