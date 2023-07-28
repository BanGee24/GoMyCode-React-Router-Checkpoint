import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Extraction 2",
      description:
        "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.",
      posterURL: '../images/extraction.webp',
      rating: 7.1,
      videoLink: "https://www.youtube.com/embed/mO0OuR26IZM"
    },

    {
      title: "The Flash",
      description:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      posterURL: "../images/flash.webp",
      rating: 7.0,
      videoLink: "https://www.youtube.com/embed/hebWYacbdvc"
    },

    {
      title: "Guardians of the Galaxy Volume 3",
      description:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      posterURL: "../images/guardians.webp",
      rating: 8.1,
      videoLink: "https://www.youtube.com/embed/u3V5KDHRQvk"
    },

    {
      title: "Transformers: Rise of the Beasts",
      description:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      posterURL: "../images/transformer.webp",
      rating: 6.2,
      videoLink: "https://www.youtube.com/embed/itnqEauWQZM"
    },

  ]);

//Filter the mvie you want by title and rating.

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filterType, filterValue) => {
    let filtered = movies;

    if (filterType === "title") {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else if (filterType === "rating") {
      filtered = movies.filter((movie) => movie.rating >= filterValue);
    }

    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
    videoLink: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(formData);
    setFormData({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
      videoLink: "",
    });
  };

// Add more movies as needed

  return (
    <div className="app" style=
    {{ textAlign: "left" }}>
      <h1>My Movie App</h1>
      <Link to="/">Home</Link>
      <Outlet />

      <Filter handleFilter={handleFilter} />
      <MovieList movies={filteredMovies} />

      

      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Poster URL:
          <input
            type="text"
            name="posterURL"
            value={formData.posterURL}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            step="0.1"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Trailer-link:
          <input
            type="string"
            name="videoLink"
            value={formData.videoLink}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;
