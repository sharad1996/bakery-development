


const data = [1, 2, 3, 4];


const CardSection = ({data}) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 mx-10">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-[300px] h-[400px] bg-white shadow-xl rounded-xl p-5
          ${index % 2 === 1 ? "mt-10" : "mt-0"}`}
        >
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <img className="hover:scale-105 rounded-xl" src={item.image} />
          <p> {item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;