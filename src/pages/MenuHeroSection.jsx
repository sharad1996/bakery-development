import imagemenu from "../assets/RoseKajukatli.webp";

const MenuHeroSection = () => {
  const img = imagemenu;
  return (



    <div className="lg:max-w-[1400px] w-800px py-7 px-4 mb-6 lg:mb-0 lg:h-[780px]">
    <div
      style={{ backgroundImage: `url(${imagemenu})` }}
      className="w-full h-[500px] rounded-2xl bg-center bg-cover"
    ></div>

    <div className="text-center md:my-6">
      <h1 className="text-3xl mb-7">Pure Veg:Pure Bliss</h1>

      <p className="mb-10">
        As one of the best veg restaurants Dubai, Gangour brings you iconic Indian
        dishes made with love, tradition, and bold flavours. Whether you’re
        exploring street food, classic thalis, or comforting South Indian meals,
        we’re the go-to spot among veg restaurants in Dubai where every bite
        reminds you of home. From spicy chaats to royal thalis, our menu celebrates
        the best Indian food in Dubai; 100% vegetarian, 100% authentic.
      </p>

      <p className="mb-5">
        From spicy chaats to royal thalis, our menu celebrates the best Indian food
        in Dubai; 100% vegetarian, 100% authentic.
      </p>
    </div>
  </div>

  );
};

export default MenuHeroSection;
