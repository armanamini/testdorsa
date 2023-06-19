import React from 'react';

import { MdStarRate } from "react-icons/md";
import { GrView } from "react-icons/gr";

const ReviewCard = ({ review }) => {


return (

  <div className="flex flex-col max-h-[400px] items-center justify-center w-full bg-white shadow-xl cursor-pointer hover:bg-gray-800 hover:shadow-none rounded-3xl wrapper wrapperAnime">
  <div className="relative mx-2 mt-2 header">
    <div className="h-56 overflow-hidden rounded-2xl imageWrapper">
      <img src={review.reviewsThumbnailUrl} className="object-contain w-full h-full image" alt="" />
    </div>
    <div className="absolute bottom-0 left-0 flex flex-row ml-3 -mb-4 badgeWrapper">
      <div className="flex items-center justify-center w-16 h-10 text-xl text-yellow-500 bg-white shadow-xl hover:bg-red-500 hover:text-white rounded-2xl dangerBadge badgeAnime">
        <MdStarRate />
        <span className="ml-2 text-gray-800 p counter group-hover:text-white">
        {review.reviewsRate}
        </span>
      </div>
      <div className="flex items-center justify-center w-16 h-10 ml-2 font-medium text-blue-600 bg-white shadow-xl hover:bg-blue-600 hover:text-white rounded-2xl primaryBadge badgeAnime group">
        <GrView />
        <span className="ml-2 text-gray-800 counter group-hover:text-white">
        {review.viewsCount}
        </span>
      </div>
    </div>
  </div>
  <div className="w-full px-4 pt-10 pb-6 textWrapper">
    
    <h1 className="text-base font-medium leading-none tracking-wider text-gray-400 text">{`${review.reviewsTitle}`}</h1>
  </div>
</div>

);
  
};

export default ReviewCard;