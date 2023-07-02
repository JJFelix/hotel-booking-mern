import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {dataByManyParams, loading, error} = useFetch('/hotels?featured=true&min=10&max=500')
  // console.log(data)
  return (
    <div className="fp">
      {loading ? (
        "Loading.Please wait..."
        ) : (
          <>
          {dataByManyParams.map((item)=>(
            <div className="fpItem" key={item._id}>
            <img
              // src={item.photos[0]}
              src='https://picsum.photos/300/200'
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating &&
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>
            }
          </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
