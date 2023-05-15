package com.example.movie;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "http://localhost:3001")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> allMovies(){
        return new ResponseEntity<List <Movie>>(movieService.allMovies(),HttpStatus.OK);
    }
    @GetMapping("/{imdbID}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbID){
        return new ResponseEntity<Optional<Movie>>(movieService.findMovieByImdb(imdbID),HttpStatus.OK);
    }

}
