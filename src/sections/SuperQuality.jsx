import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-10"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="">Todos nossos modelos contém </span>
          <span className="text-coral-red"> Qualidade máxima </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Garantindo conforto e estilo premium, nossos calçados são meticulosamente elaborados, projetados para elevar sua experiência, proporcionando-lhe uma experiência incomparável de qualidade, inovação e um toque de elegância.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nossa dedicação aos detalhes e excelência garante sua satisfação.
        </p>
        <div className="mt-11">
          <Button label="Conheça os Detalhes" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
