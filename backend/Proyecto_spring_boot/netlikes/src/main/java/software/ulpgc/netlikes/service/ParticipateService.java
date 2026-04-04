package software.ulpgc.netlikes.service;

import software.ulpgc.netlikes.model.Participate;
import software.ulpgc.netlikes.model.ParticipateId;
import software.ulpgc.netlikes.repository.ParticipateRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ParticipateService {
    private final ParticipateRepository participateRepository;

    public ParticipateService(ParticipateRepository participateRepository) {
        this.participateRepository = participateRepository;
    }

    public List<Participate> getAllParticipations() {
        return participateRepository.findAll();
    }

    public Participate getParticipationById(Integer actorId, Integer filmId) {
        return participateRepository.findById(new ParticipateId(actorId, filmId)).orElse(null);
    }

    public List<Participate> getParticipationsByFilmId(Integer filmId) {
        return participateRepository.findByFilmId(filmId);
    }

    public Participate createParticipation(Participate participate) {
        return participateRepository.save(participate);
    }

    public void deleteParticipation(Integer actorId, Integer filmId) {
        participateRepository.deleteById(new ParticipateId(actorId, filmId));
    }
    
}
