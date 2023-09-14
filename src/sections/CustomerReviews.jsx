import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        O que nossos
        <span className="text-coral-red"> Clientes </span>
        estão falando?
      </h3>

      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Conheça histórias genuínas de nossos clientes satisfeitos sobre seus experiência excepcional conosco.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
