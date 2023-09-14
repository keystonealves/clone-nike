import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Oferta </span>
          <span className="">Especial</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Embarque em uma jornada de compras que redefine sua experiência com ofertas imbatíveis. Desde seleções de primeira linha até economias incríveis, nós oferecemos um valor incomparável que nos diferencia.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Navegue por um reino de possibilidades projetadas para atender às suas necessidades únicas de desejos, superando as mais elevadas expectativas. Sua jornada conosco é nada menos que excepcional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Compre agora" iconURL={arrowRight} />

          <Button
            label="Saiba mais"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
