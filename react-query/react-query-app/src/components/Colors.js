import React from "react";
import useColors from "../hooks/useColors";

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
  } = useColors();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.pages.map((group, index) => {
        return (
          <React.Fragment key={index}>
            {group.data.map((color) => {
              return (
                <div key={color.id}>
                  {color.id} . {color.name}
                </div>
              );
            })}
          </React.Fragment>
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
