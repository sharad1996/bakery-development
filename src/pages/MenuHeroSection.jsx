import imagemenu from "../assets/RoseKajukatli.webp";

const MenuHeroSection = () => {
  const img = imagemenu;
  return (
    <div className="w-full max-w-[1400px] mx-auto py-7 px-4 mb-6 ">

      <div
        style={{ backgroundImage: `url(${imagemenu})` }}
        className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-2xl bg-center bg-cover"
      ></div>


      <div className="text-center md:my-6 mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-7">
          Pure Veg: Pure Bliss
        </h1>

        <p className="text-sm sm:text-base md:text-lg  mb-8">
          As one of the best veg restaurants Dubai, Gangour brings you iconic
          Indian dishes made with love, tradition, and bold flavours. Whether
          you’re exploring street food, classic thalis, or comforting South
          Indian meals, we’re the go-to spot among veg restaurants in Dubai
          where every bite reminds you of home. From spicy chaats to royal
          thalis, our menu celebrates the best Indian food in Dubai; 100%
          vegetarian, 100% authentic.
        </p>

        <p className="text-sm sm:text-base md:text-lg  mb-5">
          From spicy chaats to royal thalis, our menu celebrates the best Indian
          food in Dubai; 100% vegetarian, 100% authentic.
        </p>
      </div>
    </div>
  );
};

export default MenuHeroSection;
