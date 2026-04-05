package software.ulpgc.netlikes.service;

import software.ulpgc.netlikes.model.Watch;
import software.ulpgc.netlikes.model.WatchId;
import software.ulpgc.netlikes.repository.WatchRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WatchService {

    private final WatchRepository watchRepository;
    private final UserRepository userRepository;
    private final FilmRepository filmRepository;
    
    public Watch typeFilm(String email, Integer filmId, String type) {
        
        WatchId id = new WatchId(email, filmId);

        return WatchRepository.findById(id)
            .map(relationExists -> {
                relacionExistente.setEstado(nuevoEstado);
                return userFilmRepository.save(relacionExistente);
            })
            .orElseGet(() -> {
                User user = userRepository.findById(email).orElseThrow();
                Film film = filmRepository.findById(filmId).orElseThrow();

                Watch relation = new Watch();
                relation.setUser(user);
                relation.setFilm(film);
                relation.setEstado(type);

                return watchRepository.save(relacion);
            });
    }

    public void deletetype(String email, Integer filmId) {
        WatchId id = new WatchId(email, filmId);
        userFilmRepository.deleteById(id);
    }

}
