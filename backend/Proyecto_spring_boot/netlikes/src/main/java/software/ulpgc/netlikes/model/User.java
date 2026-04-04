package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name="user")
@Getter 
@Setter
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
}
