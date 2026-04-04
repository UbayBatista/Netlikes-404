package software.ulpgc.netlikes.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "participate")
@IdClass(ParticipateId.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Participate {

    @Id
    @Column(name = "actor_id")
    private Integer actorId;

    @Id
    @Column(name = "film_id")
    private Integer filmId;
}

