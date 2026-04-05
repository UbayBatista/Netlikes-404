package software.ulpgc.netlikes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Film;
import software.ulpgc.netlikes.service.FilmService;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/watchs")
@RequiredArgsConstructor

public class WatchController {

    private final WatchService watchService;

    @PostMapping("/{email}/watch/{filmId}")
    public Watch typePelicula(
            @PathVariable Integer email, 
            @PathVariable Integer filmId, 
            @RequestBody String estado) {
            
        return userFilmService.marcarPelicula(email, filmId, estado);
    }

    @DeleteMapping("/{email}/watch/{filmId}")
    public void borrarRelacion(@PathVariable String email, @PathVariable Integer filmId) {
        userFilmService.eliminarRelacion(email, filmId);
    }

}