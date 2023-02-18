import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import useFavoriteReposStore from "./store/favoriteRepos";

export default function App() {
  const { data, isLoading } = useFetchRepositories('sgbenav');
  const {favoriteReposIds} = useFavoriteReposStore()
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data?.map((repository) => (
        <Card key={repository.id} repository={repository} isFavorite={favoriteReposIds.includes(repository.id)}/>
      ))}
    </>
  );
}
