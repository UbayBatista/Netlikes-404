package software.ulpgc.netlikes.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "rate")
@IdClass(RateId.class)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rate {
    @Id
    @Column(name = "user_email")
    private User user;

    @Id
    @Column(name = "film_id")
    private Film film;

    @Column(nullable = false)
    private String score;
}
