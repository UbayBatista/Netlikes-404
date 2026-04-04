package software.ulpgc.netlikes.service;
import software.ulpgc.netlikes.model.Film;
import software.ulpgc.netlikes.repository.FilmRepository;
import org.springframework.stereotype.Service;
import java.util.List;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FilmService{

    private final FilmRepository filmrepository;

    public List<Film> getAllFilms(){
        return filmrepository.findAll();
    }

    public Film saveFilm(Film film){
        return filmRepository.save(film);
    }

    public Film getFilmById(Integer id) {
        return filmRepository.findById(id).orElse(null);
    }

    public Film updateFilm(Integer id, Film updatedFilm) {
        return filmrepository.findById(id)
                .map(film -> {
                    film.setAdult(updatedFilm.isAdult());
                    film.setFilmUrl(updatedFilm.getFilmUrl());
                    film.setSummary(updatedFilm.getSummary());
                    film.setTrailer(updatedFilm.getTrailer());
                    film.setPlatforms(updatedFilm.getPlatforms());
                    return filmRepository.save(film);
                })
                .orElse(null);
    }

    public void deleteFilm(Integer id) {
        filmrepository.deleteById(id);
    }

}