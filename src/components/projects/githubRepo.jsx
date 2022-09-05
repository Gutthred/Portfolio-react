import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./Projects.css";
import DefaultIMG from "../../assets/default-project.png";

const githubRepo = () => {
  const { data, isFetching } = useQuery("repos", async () => {
    const reponse = await axios.get(
      "https://api.github.com/users/gutthred/repos"
    );

    return reponse.data;
  });

  return (
    <article>
      {isFetching && <span className="loading">Loading ...</span>}
      {data?.map((repo) => {
        return (
          <article key={repo.id} className="project__card">
            <div className="project__title-img">
              <figure className="project__card-img">
                <img src={DefaultIMG} alt={repo.full_name} />
              </figure>
              <h3>{repo.name}</h3>
            </div>
            <small className="repo_description">{repo.description}</small>
            <div className="project__a">
              <a
                href={repo.html_url}
                target="__blank"
                className="btn btn-primary"
              >
                Source code
              </a>
            </div>
          </article>
        );
      })}
    </article>
  );
};

export default githubRepo;
