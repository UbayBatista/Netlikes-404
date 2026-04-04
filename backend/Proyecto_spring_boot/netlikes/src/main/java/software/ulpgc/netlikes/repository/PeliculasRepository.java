package software.ulpgc.netlikes.repository;
package software.ulpgc.netlikes.model.Peliculas;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface FilmRepository extends JpaRepository<Film, Integer>{

}