import React from "react";
import { useQuery } from "react-query";

const fetchColors = ({ queryKey }) => {
  const pageNumber = queryKey[1];
  return fetch(
    `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
  ).then((response) => response.json());
};

const Paginated = () => {
  const [currPageNum, setCurrPageNum] = React.useState(1);

  const { data: colors, isFetching } = useQuery(
    ["colors", currPageNum],
    fetchColors,
    {
      keepPreviousData: true,
    }
  );

  return (
    <div>
      {colors?.map((color) => (
        <h1 key={color.id}>{color.name}</h1>
      ))}
      <br />
      <button
        onClick={() => setCurrPageNum((currPageNum) => currPageNum - 1)}
        disabled={currPageNum === 1}
      >
        <h3>previous</h3>
      </button>
      <button
        onClick={() => setCurrPageNum((currPageNum) => currPageNum + 1)}
        disabled={currPageNum === 5}
      >
        <h3>next</h3>
      </button>
      <br />
      <h3>{isFetching ? "loading..." : null}</h3>
    </div>
  );
};

export default Paginated;
