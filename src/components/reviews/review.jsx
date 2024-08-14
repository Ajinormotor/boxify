import ReviewInput from "./reviewInput"
import ReviewList from "./reviewList"


const Review = () => {
  return (
<section className="flex flex-col md:flex-row relative gap-[10px]  justify-between w-full py-[2rem]">
    
    <div>
      <ReviewInput />
    </div>

  <div className="md:w-[400px]">
    <ReviewList />
  </div>
</section>
  )
}

export default Review