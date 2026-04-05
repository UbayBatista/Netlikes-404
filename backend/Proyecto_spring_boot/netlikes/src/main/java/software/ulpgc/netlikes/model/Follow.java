package software.ulpgc.netlikes.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "follow")
@IdClass(FollowId.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Follow {
    @Id
    @Column(name = "follower_id")
    private String followerId;

    @Id
    @Column(name = "followed_id")
    private String followedId;

    @Column(name = "state")
    private State state;

    public enum State {
        PENDING,
        ACCEPTED,
        BLOCKED
    }
}
