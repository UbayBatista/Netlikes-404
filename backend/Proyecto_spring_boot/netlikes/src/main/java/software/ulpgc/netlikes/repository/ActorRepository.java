package software.ulpgc.netlikes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import software.ulpgc.netlikes.model.Actor;

@Repository
public interface ActorRepository extends JpaRepository<Actor, Integer> {
}
