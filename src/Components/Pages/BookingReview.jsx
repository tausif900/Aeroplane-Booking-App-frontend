import React from "react";
import { useParams } from "react-router-dom";

const BookingReview = () => {
  const { bookingId } = useParams();
  console.log(bookingId);

  return (
    <div>
      <h1> BookingReview</h1>
    </div>
  );
};

export default BookingReview;
