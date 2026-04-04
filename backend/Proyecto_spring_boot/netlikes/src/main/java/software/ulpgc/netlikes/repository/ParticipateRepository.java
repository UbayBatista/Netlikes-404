package software.ulpgc.netlikes.repository;

import software.ulpgc.netlikes.model.Participate;
import software.ulpgc.netlikes.model.ParticipateId;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipateRepository extends JpaRepository<Participate, ParticipateId> {
    List<Participate> findByFilmId(Integer filmId);
}
