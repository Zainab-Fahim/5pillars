import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../Css/Home.css";
import ScrollTigger from "react-scroll-trigger";
import CountUp from "react-countup";
import mosque from "../assets/mosque.png";
import myImage from "../assets/BG-Page.png";
import { Parallax } from "react-parallax";
import boy from "../assets/Boy.png";
import girl from "../assets/Girl.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Habibi from "../assets/vsd.png";

const Home = () => {
  const [counteOn, setCounterOn] = useState(false);
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const rotateX = useTransform(y, [-100, 100], [30, -30]);
  // const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // const colors = [
  //   { value: "#b6a179" },
  //   { value: "#272425" },
  //   { value: "#6389cb" },
  //   { value: "#f2c758" },
  //   { value: "#ffffff" },
  // ];
  return (
    <>
      {/* <Parallax strength={-600} bgImage={myImage}> */}
      <div className="background" />
      <div className="container">
        <Navbar />
        <h1>
          Learn Quran <br /> Online With Us!
        </h1>

        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="register-btn"> Register Now</h2>
        </Link>

        <img src={mosque} alt="mosque image" className="mosque"></img>
        <div className="course">
          <div className=" coo c1">
            <div className="circle cir1"></div>
            <div className="loader"></div>
            <h3>Quran Recitation</h3>
            <p>
              We have highly qualified tutors who can deliver lessons in Qaida
              and Quran recitation, working with you to achieve your goals.
            </p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="learn-btn"> Learn more</h2>
            </Link>
            <hr className="line" />
          </div>
          <div className=" coo c2">
            <div className="circle cir2"></div>
            <div className="loader"></div>
            <h3>Hifdh Lessons</h3>
            <p>
              Our Hifdh program is ideal for students who wish to memorise the
              Quran and our Selected Surahs program is for anyone who wants to
              memorise the important and often recited surahs
            </p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="learn-btn"> Learn more</h2>
            </Link>
            <hr className="line" />
          </div>
          <div className="coo  c3">
            <div className="circle cir3"></div>
            <div className="loader"></div>
            <h3>Islamic Lessons</h3>
            <p>
              Our comprehensive curriculum covers areas such as Hadith, Fiqh,
              Seerah & Islamic History, Aqeedah and contemporary issues
            </p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="learn-btn"> Coming Soon</h2>
            </Link>
            <hr className="line" />
          </div>
        </div>
      </div>
      {/* </Parallax> */}

      <div className="wording-cont">
        <img src={girl} alt="girl image" className="word-img girl"></img>
        <div className="wording">
          <h2>
            5 Pillars Academy is an ideal online solution for learning <br />
            the Quran & enhancing your Islamic knowledge
          </h2>
          <p>
            We cater to individuals of all ages and levels of learning, and our
            solution is tailored to meet the specific needs and pace of each
            student.
          </p>
        </div>
        <img src={boy} alt="boy image" className="word-img boy"></img>
      </div>
      <ScrollTigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="count">
          <div className="count-in">
            <h3>
              {counteOn && (
                <CountUp start={0} end={493} duration={2} delay={0} />
              )}
              + <br />
            </h3>
            <p> Registered Student</p>
          </div>
          <div className="count-in">
            <h3>
              {counteOn && (
                <CountUp start={0} end={76} duration={2} delay={2} />
              )}
              + <br />
            </h3>
            <p> Available Tutors</p>
          </div>
          <div className="count-in">
            <h3>
              {counteOn && (
                <CountUp start={0} end={2763} duration={2} delay={1} />
              )}
              + <br />
            </h3>
            <p> Hours Studied</p>
          </div>
          <div className="count-in">
            <h3>
              {counteOn && <CountUp start={0} end={5} duration={2} delay={3} />}
              + <br />
            </h3>
            <p> Countries Served</p>
          </div>
        </div>
      </ScrollTigger>
      <div className="missions">
        <div className="mission">
          <h2>Why Choose us</h2>
          <p>
            At 5Pillars Academy, we are committed to delivering the highest
            quality online learning experience to our students.We carefully
            select our tutors based on their qualifications and track record
            ,ensuring that our students are taught from the best in the
            field.Our tutors are passionate,experienced and dedicated to
            teaching and they are commited to providing our students with the
            knowledge,skills, and guidance needed to succeed
          </p>
          <hr className="line2" />
        </div>

        <div className="mission">
          <h2>What we will do</h2>
          <p>
            We strive to create an environment that is inclusive,accessible,and
            welcoming to all, regardless of their backround or level of
            understanding. Our goal is to provide a comprehensive curriculum
            that covers all aspect of islam ,including the Quran,Ijaza
            programs,Hadith,Arabic Language ,Fiqh and Islamic history ,and to
            deliver it in a way that is engaging .interactive ,and meaningful to
            who seek Ilm
          </p>
        </div>
      </div>
      <div className="tutor">
        <div className="tutor-register">
          <div className="tutor-text">
            <h1>
              Become a Tutor <br /> with 5 Pillars
            </h1>

            <button className="tutor-btn">Register</button>
            <p>As a Tutor</p>
          </div>
          <div className="tutor-image">
            <img className="habibi" src={Habibi} alt="Habibi"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
