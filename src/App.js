import cloud from "./assets/cloud.png";
import coding from "./assets/coding-language.png";
import content from "./assets/content-management.png";
import girl from "./assets/girl.png";
import { NextUIProvider } from "@nextui-org/react";

import "./App.css";

import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./components/Layout.js";

export default function App() {
  return (
    <NextUIProvider>
      <Layout>
        <Navbar isBordered variant="floating">
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
              Parisa Khodadadinejad
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#">Projects</Navbar.Link>
            <Navbar.Link
              href="/files/Parisa.Khodadadinejad.Resume.pdf"
              download
            >
              Resume
            </Navbar.Link>
          </Navbar.Content>
        </Navbar>

        <div className="App">
          <div class="top-container">
            <img class="top-cloud" src={cloud} alt="cloud-img" />
            <h1>I'm Parisa.</h1>
            <h3>a Web Developer.</h3>
            <img class="bottom-cloud" src={cloud} alt="cloud-img" />
          </div>

          <div class="middle-container">
            <div class="profile">
              <img class="girl-img" src={girl} alt="girl-img" />
              <h2>Hi.</h2>
              <p>
                My name is Prisa and I'm a web developer based in Canada.I love
                to create for web and mobile devices.
              </p>
            </div>
            <hr />
            <div class="skills">
              <h2>My Skills.</h2>
              <div class="skill-row">
                <img class="coding-img" src={coding} alt="coding-img" />
                <h3>Design what you want</h3>
                <p>
                  I like to keep it simple.My goals are to focus on
                  typography,content and conveying the message that you want to
                  send.
                </p>
              </div>
              <div class="skill-row">
                <img class="content-img" src={content} alt="content-img" />
                <h3>Develop what you need</h3>
                <p>
                  I'm a developer,so I know how to create your website to run
                  across devices using the latest technologies available.
                </p>
              </div>
            </div>
            <hr />
            <div class="contact-me">
              <h2>Get In Touch</h2>
              <h3>I'm currently available for freelance work.</h3>
              <p>
                If you have a project that you want to get started,think you
                need my help with something or just fancy saying hey,then get in
                touch.
              </p>
              <a class="btn" href="mailto:paris.khnjd@email.com">
                CONTACT ME
              </a>
            </div>
          </div>

          <div class="bottom-container">
            <a
              class="footer-link"
              href="https://www.linkedin.com/in/parisa-khodadadinejad/"
            >
              LinkedIn
            </a>
            <a class="footer-link" href="https://twitter.com/ParisaParising/">
              Twitter
            </a>
            <a class="footer-link" href="https://www.geektech20.com/">
              Website
            </a>
            <p class="copyright">© parising.</p>
          </div>
        </div>
      </Layout>
    </NextUIProvider>
  );
}
