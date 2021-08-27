import './testimonials.scss';

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="asset/arr.jpg" alt="" className="left" />
            <img src="asset/wr.png" alt="" className="center" />
            <img src="asset/arr1.jpg" alt="" className="right" />
          </div>
          <div className="center">center</div>
          <div className="bottom">bottom</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
