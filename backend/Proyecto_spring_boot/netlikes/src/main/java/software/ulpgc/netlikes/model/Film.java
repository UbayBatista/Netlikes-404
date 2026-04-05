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
    private Integer id_film;

    @Column(nullable = false)
    private boolean adult;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String filmUrl;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String summary;

    @Column(columnDefinition = "TEXT")
    private String trailer;

    @ManyToMany
    @JoinTable(name = "available", 
        joinColumns = @JoinColumn(name = "ID_Film"),
        inverseJoinColumns = @JoinColumn(name = "ID_Platform")    
    )

    private List<Platform> platforms;

    @OneToMany(mappedBy = "film")
    @JsonIgnore
    private List<Watch> watchUser;
}