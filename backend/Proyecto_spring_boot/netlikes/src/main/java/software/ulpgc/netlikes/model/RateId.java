package software.ulpgc.netlikes.model;

import lombok.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RateId implements Serializable {
    private String user;
    private Integer film;
}