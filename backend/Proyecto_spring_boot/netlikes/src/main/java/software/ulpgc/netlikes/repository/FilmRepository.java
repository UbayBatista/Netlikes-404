package software.ulpgc.netlikes.repository;
import software.ulpgc.netlikes.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FilmRepository extends JpaRepository<Film, Integer>{
    List<Film> findByGenresId(Integer genreId);
}