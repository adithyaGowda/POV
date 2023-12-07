import "./App.css";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Header from "./components/Header";
import { Cards } from "./components/Cards";
import { Hero } from "./components/Hero";
import Footer from "./components/Footer";
import { Card, Typography } from "@material-tailwind/react";

function App() {
  const [open, setOpen] = useState(true);
  const images = [
    // boots
    {
      source1: "/sho1.jpeg",
      source2: "/sho2.jpeg",
      name: "PUMA RS FAST",
      price: 2800,
      description: "size avail 41 - 45 limited stock book now!",
      item: 2,
    },
    {
      source1: "/nike1.jpeg",
      source2: "/nike2.jpeg",
      name: "NIKE GUIDE 10",
      price: 2750,
      description: "Sports shove Premium Quality",
      item: 2,
    },
    {
      source1: "/puma1.jpeg",
      source2: "/puma2.jpeg",
      name: "PUMA",
      price: 550,
      description: "Premium 5@ Quality Size 6-7-8-9-10",
      item: 2,
    },
    // cloths
    {
      source1: "/blue1.jpeg",
      source2: "/blue2.jpeg",
      name: "BURBERRY",
      price: 850,
      description: "Soft cotton cloths",
      item: 2,
    },
    {
      source1: "/brown1.jpeg",
      source2: "/brown2.jpeg",
      name: "BURBERRY",
      price: 850,
      description: "Soft cotton cloths",
      item: 2,
    },
    {
      source1: "/cloth1.jpeg",
      source2: "/cloth1.jpeg",
      name: "BURBERRY",
      price: 850,
      description: "Soft cotton cloths",
      item: 1,
    },
    {
      source1: "/wc1.jpeg",
      source2: "/wc2.jpeg",
      name: "US POLO",
      price: 450,
      description: "Matty Fabric Half Sleeves",
      item: 2,
    },
    {
      source1: "/bc1.jpeg",
      source2: "/bc2.jpeg",
      name: "US POLO",
      price: 450,
      description: "Matty Fabric Half Sleeves",
      item: 2,
    },
    {
      source1: "/wcone.jpeg",
      source2: "/wcone.jpeg",
      name: "Spun Fleece",
      price: 650,
      description: "Winter track suit ",
      item: 1,
    },
    {
      source1: "/bcone.jpeg",
      source2: "/bcone.jpeg",
      name: "Spun Fleece",
      price: 650,
      description: "Winter track suit ",
      item: 1,
    },
    // watchs

    {
      source1: "/watch1.jpeg",
      source2: "/watch1.jpeg",
      name: "Heuer Carrera Calibre 36",
      price: 3500,
      description: "water Resistant Rosegold stainless steel case",
      item: 1,
    },
    // earphone
    {
      source1: "/ear1.jpeg",
      source2: "/ear1.jpeg",
      name: "Combo Offers",
      price: 1500,
      description: "Ultra pods heavy quality OnePluse & Boat",
      item: 1,
    },

    // bag
    {
      source1: "/bag1.jpeg",
      source2: "/bag2.jpeg",
      name: "LOUIS VUITTON",
      price: 800,
      description: "high quality backpack",
      item: 2,
    },

    // saree
    {
      source1: "/saree1.jpeg",
      source2: "/saree1.jpeg",
      name: "Fancy Mena Works",
      price: 1600,
      description: "Lite weight sarees with grand design",
      item: 1,
    },
    {
      source1: "/saree3.jpeg",
      source2: "/saree3.jpeg",
      name: "Fancy Mena Works",
      price: 1600,
      description: "Lite weight sarees with grand design",
      item: 1,
    },
  ];

  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <Typography variant="h5">Welcome to P.O.V 🎉 </Typography>
        <Card className=" h-full w-full p-3 text-center">
          <img
            src="/pov.png"
            className=" w-full h-screen max-h-[400px]  md:max-h-[500px]  "
            alt=""
          />
        </Card>
      </Modal>
      <div className=" overflow-y-auto snap-y snap-mandatory">
        <section className=" fixed w-full z-50">
          <Header />
        </section>

        <section
          id="home"
          className=" h-screen w-full px-5 md:mt-5  mx-auto flex items-center justify-center "
        >
          <Hero />
        </section>

        <section id="menu" className="flex flex-col p-1 pt-16 w-full ">
          <div className=" w-full text-center">
            <Typography variant="h2" className=" text-[#7d7d7d]">
              Our Collections
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center p-1 snap-center">
            {images.map((img, i) => (
              <div key={i} className="flex items-center justify-center my-5">
                <Cards img={img} />
              </div>
            ))}
          </div>
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
