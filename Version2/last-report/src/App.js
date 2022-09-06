import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Paragraph from "./components/Paragraph";
import Bullet from "./components/Bullet";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Lego from "./images/Hola.jpg";
import Wolf from "./images/ArcticWolf-logo.png";
import Python from "./images/python-programming-language-word-concept-qa-concept_198568-68.jpg";
import AWS from "./images/AWS.jpg";
import doc from "./images/doc.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <h1 className="p-2">Workterm Report Winter & Summer 2022</h1>
        <Image
          style={{ textAlign: "center" }}
          className="p-2 first-img"
          src={Lego}
          fluid
        />
        <Paragraph
          linkpresent="false"
          name="intro"
          title="Introduction"
          content={[
            "Winter’22 was looking very promising for me. We were entering the new normal phase of our daily lives, after the struggles of Lockdowns and the whole “COVID” situation. At the same time, I was excited to accept a co-op position at Arctic Wolf for 8 months. It was a developer position and I was ready to put in the work and learn as much as I could from this opportunity.",
          ]}
        />
        <Paragraph
          linkpresent="false"
          name="arctic-wolf"
          title="Arctic Wolf"
          content={[
            "Arctic Wolf specializes in providing its clients with security operations. Over the years, many new technologies, vendors, and software solutions have emerged, but cyber incidents still seem to be a threat to the cyberspace we have wrapped ourselves in. Arctic Wolf envisions to exterminate these risks and create a cyberspace that is free from all malicious activity. They provide 24×7 monitoring, detection and response, as well as ongoing risk management to proactively protect organizations while continually strengthening their security posture. Their solutions include Arctic Wolf® Managed Detection and Response (MDR), Managed Risk, Managed Cloud Monitoring, and Managed Security Awareness.",
            "With specialized personnel, Arctic Wolf has set out to make their presence known in the CyberSecurity Industry. They are currently expanding outside of North America in order to protect more clients and reach a point where cyber risk is essentially zero.",
          ]}
        />
        <Bullet
          imgsrc={Wolf}
          name="my-role"
          title="My time @ Arctic Wolf"
          content={[
            "I joined Arctic Wolf as a Software Developer Co-op in Arctic Wolf’s Research and Development(RnD) department. At first I was assigned to the Carebears team, where I spent my first 4 months. I was assigned technical tickets to solve, help run daily standups, organize team retrospectives etc. I also had an amazing mentor to help me get up to speed with the products we managed and get familiarized with the workflows within the team.",
            "The entire team was very supportive of each other and everyone was willing to help one another in time of need. Our manager always had weekly one-on-one meetings with each and everyone of us and worked hard to make sure we were all reaching both our personal and the company’s goals. Besides solving programming problems, we had many interesting conferences and events across the company.",
            "For the last few months of my term, I was with the Bladerunners team. I retained similar responsibilities as before but we were more focussed with a few specific products. I met a lot of new people during my time and collaborated with many talented individuals. Arctic Wolf’s work culture is great and it provides everyone with an opportunity to grow within the company.",
          ]}
        />
        <div id="goals">
          <h1>Goals and Learnings</h1>
          <hr style={{ border: "2px solid black" }} />
          <Bullet
            imgsrc={Python}
            title="Learn and become proficient in Python"
            content={[
              "My first ticket at Arctic wolf helped me get started on my journey to polish my Python skills. It was a very interesting language to pick up, since it was pretty versatile and a high-level language. Coming from working in C and Java, Python was pretty amazing. With its extensive collection of external libraries, it was able to solve anything I wanted to do.",
              "I took a few introductory courses on Python to get the hang of it and by the end of each course I felt more and more confident in myself. I used Python to fix a feature within our product line, where strings were being used. This also gave me exposure to regular expressions and the strings library for Python.",
            ]}
          />
          <Bullet
            imgsrc={AWS}
            title="Learn to use Amazon Web Services"
            content={[
              "Amazon Web Services consists of a huge collection of services that all helps to provide cloud computing power to various organizations. Throughout my time at Arctic Wolf, I have worked closely with Elastic Container Service (ECS) and Elastic Kubernetes Service (EKS). Both ECS and EKS come with a layer of abstraction for containers and are used to run, stop, and manage containers in a cluster.",
              "I first started to work with ECS where I was dealing with scaling ECS clusters to accomodate a much larger workload. The support for ECS was dwindling and so a joint decision was made to migrate all our clusters to use EKS. EKS allowed us to easily run tooling and plugins developed by the Kubernetes and integrate it with our containers. It also drastically helped to automate load distribution and made carrying out maintenance quite easier for us.",
            ]}
          />
          <Bullet
            imgsrc={doc}
            title="Prepare training documentation for new hires"
            content={[
              "When installing any software, we are always presented with a long and boring block of text that explains to us how to use the software itself. Majority of us tend to ignore it, however, in a workplace, it’s always a good idea to keep note of the procedures we are to follow. In our case, we have procedures for deploying Operating Systems into machines, pushing out software, and even for wiping old machines and recycling them. These procedures are quite long and even though we had some documentation surrounding them, but we wanted to update and add more pictures to them, to help any newcomers on the team to catch up on these procedures faster than ever.",
              "We have also helped to create some knowledge-based articles for extraordinary issues we faced during our time. This helped to act as reference for anyone who were to face these issues again. The initiative for the update on these documents was brought to attention by one of my colleagues, later we collaborated with the entire team to help improve our existing documentation to a noticeable degree.",
            ]}
          />
        </div>
        <Paragraph
          linkpresent="false"
          name="takeaways"
          title="Takeaways"
          content={[
            "Although Summer’21 was over quite soon before I was aware, these past 4 months I have gained a lot of technical expertise regarding various IT management tasks. My work with SCCM has got me quite used to it and the time invested in learning React has been more than helpful to create this webpage. Troubleshooting both hardware and software seems more fun now with the more hands-on experience I got this summer, while keeping our clients satisfied with our service was also another thing I have kept my focus on.",
            "Being in a hybrid work environment also helped to give me experience about the office-work culture, to a certain extent. Being absorbed into a team to help all our clients and successfully take care of their daily IT issues always made me feel proud of myself at work. The responsibility of a technician is quite big, but I can claim that I worked on myself enough to fulfill those responsibilities at the best of my abilities.",
          ]}
        />
        <Paragraph
          linkpresent="false"
          name="acknowledgements"
          title="Acknowledgements"
          content={[
            "Being an IT Student Technician has been an adventure for me and I am glad that I could work in such an amazing team.",
            "I would love to credit the entire MD team for giving me such a wonderful experience. I personally would like to thank Bogdan, Garrett, Simon, Riley, and Jeff for helping me to catch up with the duties of my position. Among side the technicians I would also like to extend my thanks to Amr, Ragib and Shamsi for working alongside me. I hope all of you have had an awesome summer working with me for I can clearly say we had a good teamwork going into the office.",
            "To our manager, Brian Thomson, I would say your words were always motivating me to work at my best and I am always enlightened to hear your suggestions, from feedback related to our service. Another person who has always been encouraging me along was Jill Hogg, she is an amazing supervisor and I feel I would not be able to reach this point without her guidance.",
            "To Laura Gatto and Kate McRoberts, I am thankful to have been under your supervision while securing my co-op.",
            "Lastly, I would like to thank my parents, siblings, and friends for their support. It truly means a lot to me and I promise to work hard to achieve my dreams and goals in the near future.",
          ]}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
