package software.ulpgc.netlikes.controller;

import software.ulpgc.netlikes.model.Participate;
import software.ulpgc.netlikes.service.ParticipateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/participate")
public class ParticipateController {
    private final ParticipateService participateService;

    public ParticipateController(ParticipateService participateService) {
        this.participateService = participateService;
    }

    @PostMapping
    public Participate createParticipate(@RequestBody Participate participate) {
        return participateService.createParticipation(participate);
    }

    @GetMapping
    public List<Participate> getAllParticipations() {
        return participateService.getAllParticipations();
    }

    @GetMapping("/{actorId}/{filmId}")
    public Participate getParticipate(@PathVariable Integer actorId, @PathVariable Integer filmId) {
        return participateService.getParticipationById(actorId, filmId);
    }
    
    @GetMapping("/{filmId}")
    public List<Participate> getParticipationsByFilm(@PathVariable Integer filmId) {
        return participateService.getParticipationsByFilmId(filmId);
    }

    @DeleteMapping("/{actorId}/{filmId}")
    public void deleteParticipate(@PathVariable Integer actorId, @PathVariable Integer filmId) {
        participateService.deleteParticipation(actorId, filmId);
    }
}
