import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="aboutImg" />
        </div>
        <div className="banner">
          <p>Niography</p>
          <h1>Who we Are</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            ullam consectetur tempora! Vero quidem aperiam, saepe explicabo,
            accusantium molestias aliquam perferendis repudiandae deleniti
            nulla, sapiente expedita ratione. Voluptatibus, repellendus
            reiciendis.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed rerum ducimus, beatae quia voluptas eligendi nihil accusamus rem adipisci facere ipsam eaque iusto nisi eos at. Cum, nulla dolor? Eos fugit veniam aliquam adipisci.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, hic!</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
