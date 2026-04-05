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
    @Column(name = "userEmail")
    private String userId;

    @Id
    @Column(name = "filmId")
    private Integer filmId;

    @Column(nullable = false)
    private String score;
}
