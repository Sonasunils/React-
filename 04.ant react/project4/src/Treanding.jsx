import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function Trending() {

  const movies = [
    {
      title: "Stranger Things",
      image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
    },
    {
      title: "Wednesday",
      image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
    },
    {
      title: "Money Heist",
      image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
    },
    {
      title: "Dark",
      image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
    }
  ];

  return (
    <div className="bg-black p-5">

      <h2 className="text-white mb-4">
        Trending Now
      </h2>

      <Carousel>

        <Carousel.Item>

          <div className="d-flex gap-3">

            {movies.map((movie, index) => (

              <Card
                key={index}
                className="bg-dark text-white"
                style={{ width: "220px" }}
              >

                <Card.Img
                  src={movie.image}
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title>
                    {movie.title}
                  </Card.Title>
                </Card.Body>

              </Card>

            ))}

          </div>

        </Carousel.Item>

      </Carousel>

    </div>
  );
}

export default Trending;