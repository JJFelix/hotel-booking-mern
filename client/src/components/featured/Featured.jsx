import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data, loading, error} = useFetch('/hotels/countByCity?cities=berlin,madrid,london,mombasa,nairobi,sanfransisco')
  // console.log("data:=>",data)
  return (
    
    <div className="featured">
      
      {loading ? 
      ("Loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <p>Berlin</p>
              <p>{data[0]} properties</p>
            </div>
          </div>
          
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <p>Madrid</p>
              <p>{data[1]} properties</p>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <p>London</p>
              <p>{data[2]} properties</p>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <p>Mombasa</p>
              <p>{data[3]} properties</p>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <p>Nairobi</p>
              <p>{data[4]} properties</p>
            </div>            
          </div>

          <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <p>San Fransisco</p>
                <p>{data[5]} properties</p>
              </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
