import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>

      <label
        htmlFor="subscribe"
        className="lg:max-w-[45%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 border border-slate-gray sm:rounded-full rounded-lg"
      >
        {/* <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 border border-slate-gray rounded-full"> */}
        <input
          type="text"
          placeholder="subscribe@nike.com"
          name="subscribe"
          id="subscribe"
          className="input text-lg"
        />
        <div className="flex max-sm justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
        {/* </div> */}
      </label>
    </section>
  );
};

export default Subscribe;
