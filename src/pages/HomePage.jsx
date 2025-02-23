
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#FFC107", minHeight: "100vh", padding: "20px" }}>
      <div className="text-center">
        <h1 className="mb-4">Delicious Food</h1>

        <div className="row">
          <div className="col-md-4">
            <img src="/pizza.jpeg" alt="Pizza" className="img-fluid rounded" />
          </div>
          <div className="col-md-4">
            <img src="/burger.jpeg" alt="Burger" className="img-fluid rounded" />
          </div>
          <div className="col-md-4">
            <img src="/pasta.jpeg" alt="Pasta" className="img-fluid rounded" />
          </div>
        </div>

        <h2 className="mt-5">Top Restaurants in Hyderabad</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="/ambiance -1.jpg" alt="Restaurant 1" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src="/golconda-pavilion.jpg" alt="Restaurant 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src="/altitude-rooftop-outside.jpg" alt="Restaurant 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src="/daily-treats-greets-you.jpg" alt="Restaurant 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src="/dum-pukht-begum-s-corridor.jpg" alt="Restaurant 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src="/jewel-of-nizam-the-minar.jpg" alt="Restaurant 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src="/yi-jing.jpg" alt="Restaurant 2" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <img src="/bidri-ambience.jpg" alt="Restaurant 2" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
