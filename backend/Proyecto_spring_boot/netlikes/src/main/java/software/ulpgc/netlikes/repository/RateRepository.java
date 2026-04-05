package software.ulpgc.netlikes.repository;

import software.ulpgc.netlikes.model.RateId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import software.ulpgc.netlikes.model.Rate;

@Repository
public interface RateRepository extends JpaRepository<Rate, RateId> {
}
