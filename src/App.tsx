import { useRandom } from "./hooks/useRandom"
import "./App.css"

export const App = () => {
  const query = useRandom()

  return (
    <>
      {query.isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Random number: {query.data}</h2>
      )}
      {!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "wait..." : "Fetch new number"}
      </button>
    </>
  )
}
