import React from "react";
import { useInfiniteQuery } from "react-query";

const fetchColors = async ({ pageParam = 1 }) => {
  return fetch(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`).then(
    (response) => response.json()
  );
};

const Details = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("games", fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      return pages.length < 5 ? pages.length + 1 : undefined;
    },
  });

  if (isLoading) {
    return <h4>loading</h4>;
  }

  if (isError) {
    return <h4>{error.message}</h4>;
  }

  return (
    <div>
      {data?.pages.map((group, index) => {
        return (
          <div key={index}>
            {group.map((game) => {
              return <h3 key={game.id}>{game.name}</h3>;
            })}
          </div>
        );
      })}

      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        load more
      </button>
      <div>{isFetching && isFetchingNextPage ? "loading..." : null}</div>
    </div>
  );
};

export default Details;
