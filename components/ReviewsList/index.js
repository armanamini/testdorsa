import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ReviewCard from "../ReviewCard";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [main, setMain] = useState();

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(
        `https://kodoumo.ir/wp-json/api/v2/reviews-category/animations?page=${page}&sortby=${sortBy}`
      );
      const data = response.data;
      setMain(data)
      if (page === 1) {
        setReviews(data?.data);
      } else {
        setReviews((prevReviews) => [...prevReviews, ...data?.data]);
      }
    };

    fetchReviews();
  }, [page, sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setPage(1);
  };

  return (
    <div className="reviews-list">
<div className="w-full py-4">

      <h1 className="py-3 text-lg font-bold text-center">{main?.pageTitle}</h1>
      <div className="border-black rounded-[8px] border-[1px] p-2 ml-4 w-fit">
        <label htmlFor="sort-by-select">Sort by:</label>
        <select className="px-2 bg-white" id="sort-by-select" value={sortBy} onChange={handleSortChange}>
          <option value="newest">Newest</option>
          <option value="rate">Rating</option>
          <option value="view">view</option>
        </select>
      </div>
</div>


      <InfiniteScroll
        dataLength={reviews?.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
        loader={<h4 className="text-center text-black text-[30px]">Loading...</h4>}
      >
        <div className={`bg-gray-100  w-full`}>
          <section className={`container mx-auto px-0 md:px-4 py-4`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4`}>
              {reviews?.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ReviewsList;
