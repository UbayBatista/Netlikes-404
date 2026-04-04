package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;

@Entity 
@Table(name = "Films")
@Data
@NoArgsConstructor
public class Film{
    @Id
    private Integer ID_Film;

    @Column(nullable = false)
    private boolean Adult;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String FilmURL;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String Summary;

    @Column(columnDefinition = "TEXT")
    private String Trailer;

}