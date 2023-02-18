import React from "react";
import { Repository } from "../hooks/types";
import useFavoriteReposStore from "../store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

function Card({ repository, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );

  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  function toggleFavorite() {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
    } else {
      addFavoriteRepo(repository.id);
    }
  }
  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? "dislike" : "like"}
      </button>
    </div>
  );
}

export default Card;
