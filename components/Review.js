import { urlFor } from "../sanity"

const Review = ({ review }) => {

  return (
    <div className="review-box">
      <h1>{review.rating}</h1>
      <h2>{review.traveller.name}</h2>
      <img
        src={urlFor(review.traveller.image)
          .width(50)
          .height(50)
          .crop("focalpoint")
          .auto("format")}
      />
    </div>
  )
}

export default Review
