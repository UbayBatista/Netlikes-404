package software.ulpgc.netlikes.repository;
import software.ulpgc.netlikes.model.Watch;
import software.ulpgc.netlikes.model.WatchId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchRepository extends JpaRepository<Watch, WatchId>{

}