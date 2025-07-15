import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import valorant from "../../Assets/Projects/valorant.png";
import tourist from "../../Assets/Projects/tourist.png";
import grili from "../../Assets/Projects/grili.png";
import food from "../../Assets/Projects/food.png";
import travel from "../../Assets/Projects/travel.png";
import foodie from "../../Assets/Projects/foodie.png";
import tourindia from "../../Assets/Projects/tourindia.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Munch"
              description="Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers

Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.

Technologies used: HTML, CSS, Bootstrap."
              ghLink="https://github.com/Keerthana-de190623"
              demoLink="https://food-munch-website-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie "
              description="Foodie is a fully responsive restaurant website, Responsive for all devices, build using HTML, CSS, and JavaScript."
              ghLink="https://github.com/Keerthana-de190623"
              demoLink="https://foodie-website-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grili}
              isBlog={false}
              title="Grili"
              description="Grilli is a fully responsive restaurant website, Responsive for all devices, build using HTML, CSS, and JavaScript."
              ghLink="https://github.com/Keerthana-de190623"
              demoLink="https://food-ordering-website-steel.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={valorant}
              isBlog={false}
              title="Valorant"
              description="About
This project is a clone of the Valorant gaming website built using Tailwind CSS, React JS, and the Valorant API. It replicates the user interface and offers features such as displaying realtime information of game agents, maps."
              ghLink="https://github.com/Keerthana-de190623"
              demoLink="https://valorant-web-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel"
              description="Travel is a fully responsive restaurant website, Responsive for all devices, build using HTML, CSS, and JavaScript."
              ghLink="https://github.com/Keerthana-de190623/"
               demoLink="https://tour-website-blond.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourist}
              isBlog={false}
              title="tourist"
              description="Tourist is a fully responsive restaurant website, Responsive for all devices, build using HTML, CSS, and JavaScript."
              ghLink="https://github.com/Keerthana-de190623"
               demoLink="https://tourist-website-blush.vercel.app/"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourindia}
              isBlog={false}
              title="tourist"
              description="Tourism Website Portfolio which displays travel destinations across Country. Features several sections, a portfolio grid (tourist-places), Blogs and About us Section."
              ghLink="https://github.com/Keerthana-de190623"
               demoLink="https://tourindia-phi.vercel.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
