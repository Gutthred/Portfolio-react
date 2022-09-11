import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./Projects.css";
import DefaultIMG from "../../assets/default-project.png";

const githubRepo = () => {
  const { data, isFetching } = useQuery(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/gutthred/repos"
      );

      return response.data;
    },
    {
      staleTime: 2000 * 60, // two minutes
    }
  );

  return (
    <article>
      {isFetching && (
        <span className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </span>
      )}
      {data?.map((repo) => {
        const repoTopics = repo.topics;

        return (
          <article key={repo.id} className="project__card">
            <div className="main__content">
              <div className="project__title-img-description">
                <div className="project__title-img">
                  <figure className="project__card-img">
                    <img src={DefaultIMG} alt={repo.full_name} />
                  </figure>
                  <h3>{repo.name}</h3>
                </div>
                <small className="repo_description">{repo.description}</small>
              </div>
              <div className="project__a">
                <a
                  href={repo.html_url}
                  target="__blank"
                  className="btn btn-primary"
                >
                  Source code
                </a>
              </div>
            </div>
            <div className="project__tecnologies">
              <div>
                <small>Topics (tags):</small>
              </div>
              <div className="project__topics">
                <article className="project__topic">
                  {repoTopics.map((e) => {
                    return (
                      <p className="topic__text" key={e}>
                        {e}
                      </p>
                    );
                  })}
                </article>
              </div>
            </div>
          </article>
        );
      })}
    </article>
  );
};

export default githubRepo;
