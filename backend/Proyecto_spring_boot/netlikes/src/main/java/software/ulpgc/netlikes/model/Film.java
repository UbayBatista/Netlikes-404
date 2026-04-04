package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity 
@Table(name = "film")
@Data
@NoArgsConstructor
public class Film{
    @Id
    private Integer ID_Film;

    @Column(nullable = false)
    private boolean Adult;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String FilmUrl;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String Summary;

    @Column(columnDefinition = "TEXT")
    private String Trailer;

    @ManyToMany
    @JoinTable(name = "available", 
        joinColumns = @JoinColumn(name = "ID_Film"),
        inverseJoinColumns = @JoinColumn(name = "ID_Platform")    
    )

    private List<Platform> platforms;

}