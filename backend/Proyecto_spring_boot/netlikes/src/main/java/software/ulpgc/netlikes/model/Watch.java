package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity 
@Table(name = "watch")
@Data
@NoArgsConstructor

public class Watch {

    @EmbeddedId
    private WatchId id = new WatchId();

    @ManyToOne
    @MapsId("email")
    @JoinColumn(name = "emailUser")
    private User user;

    @ManyToOne
    @MapsId("filmId")
    @JoinColumn(name = "idFilm")
    private Film film;

    @Column(nullable = false)
    private String type;
    
}