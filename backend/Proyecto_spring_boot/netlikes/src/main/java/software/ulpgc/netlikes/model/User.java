package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="user")
@Data
@NoArgsConstructor 
@AllArgsConstructor
public class User {
    @Id private String email;
    @Column(nullable=false) private String password;
    @Column(nullable=false) private String securityAnswer;
    @Column(nullable=false) private String respuesta;
    @Column(nullable=false) private String name;
    @Column(nullable=false) private Date birthdate;
    @Column(nullable=false) private boolean accountPrivacity;
    @Column(nullable=false) private boolean watchedFilms;
    @Column(nullable=false) private boolean filmsToWatchLater;
    @Column(nullable=false) private boolean recommendedFilms;
    @Column(nullable=true) private String accountImage;
    @Column(nullable=true) private String bio;

    @ManyToMany
    @JoinTable(
        name = "favorites",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private List<Genre> favoriteGenres;
}
