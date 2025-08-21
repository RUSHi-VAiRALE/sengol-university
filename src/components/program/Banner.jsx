"use client";

const Banner = ({ title, subtitle }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/banner/01.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "160px 20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#fffefd",
          marginBottom: "10px",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "1.8rem",
          color: "#ffffffcc",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Banner;
