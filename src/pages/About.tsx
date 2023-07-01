import React from "react";
import Team from "../components/Team";
import Population from "../components/Population";
import Address from "../components/Address";

const About = () => {
  return (
    <div className=" text-[1.3em]">
      <div className="flex  flex-col justify-center items-center gap-3">
        <p>Who we are</p>

        <h1 className="text-4xl">Who are we?</h1>
        <h3 className="text-2xl">Our Vision</h3>
        <p>
          We were and are here to help you and all of us to aid and help each
        </p>
        <p>and every of us all to save more than time through this project</p>
        <h3 className="text-2xl">Our Mission</h3>
        <p>
          As a history this project was created and put in place by the team as
          below. This project and the developed
        </p>
        <p>
          {" "}
          program that came as the final project is to aid people and all users
          to have an easy and organised mean
        </p>
        <p>
          of transport through contacting the person to whom they are going to
          be going in the same direction and give him/her a ride
        </p>
      </div>
      <div className=" flex justify-center items-center flex-col gap-5 mt-5">
        <h1 className="my-5 text-4xl">What we offer</h1>
        <div className="flex flex-row  gap-10">
          <div>
            <p>We offer and provide a mean through which we connect</p>
            <p> individuals and individuals so as the large of people a way</p>
            <p> to move together when they are going to the same direction</p>
            <p> a way for the people to go together by which one of them</p>
            <p> give another a ride by them talking to each other about the</p>
            <p>
              price. We also offer them a mean of talking through a well build
              chat app.
            </p>
          </div>
          <div>
            <img
              src="/assets/driver.png"
              alt="driver"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Population />
      </div>
      <div>
        <Address />
      </div>
    </div>
  );
};

export default About;
