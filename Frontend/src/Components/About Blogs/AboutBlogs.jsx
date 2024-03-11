import React from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
const AboutBlogs = () => {
  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "30px" }}
      >
        The Magic of Mexican Tacos
      </h1>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <img
            src="https://images.pexels.com/photos/3642718/pexels-photo-3642718.jpeg?auto=compress&cs=tinysrgb&w=1080&dpr=1"
            alt=""
            height="500px"
            width="70%"
          />
          <div
            className="d-flex flex-wrap justify-content-around"
            style={{ marginTop: "10px" }}
          >
            <div style={{ fontSize: "20px" }}>
              <FaUser style={{ color: "yellow", marginRight: "5px" }} />
              Ajay Tyagi
            </div>
            <div>
              <MdOutlineDateRange style={{ marginRight: "5px" }} />
              Aug 10, 2023
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <p>
            Mexican tacos are a true representation of the country's vibrant
            culinary heritage, capturing the hearts and taste buds of food
            enthusiasts worldwide. These handheld delights are a celebration of
            bold flavors and fresh ingredients, making them a quintessential
            Mexican street food.
          </p>
          <p>
            The beauty of Mexican tacos lies in their versatility. From
            traditional carne asada and al pastor to innovative options like
            fish tacos and vegan-friendly fillings, there's a taco for everyone.
            Each region of Mexico adds its own twist to the classic taco,
            resulting in a diverse and exciting taco landscape.
          </p>
          <p>
            Carne Asada tacos are a beloved classic, featuring grilled and
            marinated beef that's tender and bursting with smoky flavors. Served
            with a sprinkling of onions, cilantro, and a squeeze of lime, these
            tacos embody the essence of Mexican street food simplicity.
          </p>
          <p>
            Another crowd-pleaser is the Al Pastor taco, inspired by Middle
            Eastern shawarma. Al Pastor is made with marinated pork that's
            cooked on a vertical spit and served with pineapple and onion for a
            tantalizing sweet and savory combination.
          </p>
          <p>
            For seafood enthusiasts, Baja-style Fish Tacos are a must-try.
            Crispy battered fish is paired with creamy slaw and a drizzle of
            chipotle mayo, creating a delightful contrast of textures and
            flavors.
          </p>
          <p>
            Mexico's taco culture is deeply rooted in communal dining and social
            gatherings. Street food stalls and taquerias are the heart of
            Mexican neighborhoods, where locals and tourists come together to
            enjoy the shared experience of savoring tacos.
          </p>
          <p>
            To enhance your taco adventure, try different salsa options like the
            fiery Salsa Roja, the tangy Salsa Verde, or the creamy Guacamole.
            These condiments add an extra layer of zest and authenticity to your
            tacos.
          </p>
          <p>
            One of the best ways to experience the magic of Mexican tacos is to
            attend a taco tour or visit local markets. The aroma of sizzling
            meat, the vibrant colors of fresh toppings, and the lively
            atmosphere create an immersive culinary experience that's hard to
            replicate elsewhere.
          </p>
          <p>
            Whether you're enjoying tacos on the streets of Mexico or creating
            your own at home, Mexican tacos are a true fiesta for your taste
            buds. So, grab a taco, dig in, and let the magic unfold one bite at
            a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutBlogs;
