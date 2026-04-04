package software.ulpgc.netlikes.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ParticipateId implements Serializable {
    private Integer actorId;
    private Integer filmId;
}


