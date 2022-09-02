import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Paragraph from "./components/Paragraph";
import Bullet from "./components/Bullet";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Lego from "./images/Hola.jpg";
import REACT from "./images/react.jpg";
import SCCM from "./images/sccm.jpg";
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
            "Summer’21 was another spectacular summer of my life and to top everything off, I am dedicating this blog post to showcase the things I have picked up from my third co-op placement. This time the University of Guelph’s CCS has decided to give me a return offer to work with the Managed Desktops team this summer.",
          ]}
        />
        <Paragraph
          linkpresent="true"
          link="https://nadeemhowlader.com/views/work_term_reports.html"
          name="md-team"
          title="The MD Team"
          content={[
            "This time I was working for the Managed Desktops (MD) Team. For the summer there was 4 co-op students, including me, in the team. The MD team primarily provides IT support to a wide variety of clients across the University of Guelph. Access to MD support is only limited to paying clients and we flag these clients as MD clients.",
            "The team provides support for various technical and hardware-related issues like hardware troubleshooting and diagnosis, technical consultation for workflow and procedures, centrally managed proactive security scanning and monitoring, etc. Within the team, we maintain a very professional service culture, where we always put the needs of our clients as our top priority.",
            "You might want to look at my previous work term report to know about my last summer’s experience with them.",
          ]}
        />
        <Paragraph
          linkpresent="false"
          name="my-role"
          title="My role in the Managed Desktop team"
          content={[
            "I joined the MD team under the title of Student IT Consultant. Mostly my work revolved around helping the tech analysts resolve the issues raised by our clients. On a regular day, we would be looking at tickets containing issues reported by clients. Our ticket leader would assign these tickets to analysts and co-ops to reach out to the client and help to resolve their issues.",
            "Teamwork is very integral, and I am glad to say that we all worked together to meet and go beyond the expectations of our clients. Whenever we got stuck on any tickets, our analysts were there to support us through it. We worked in a hybrid setting for the summer, where we spent three weeks on site and one week from home. On site we would be dealing with clients face-to-face sometimes to help with hardware troubleshooting, to provide support to other departments and to manage machines we had ordered. When working from home, we would be focussed on following up with clients and go on remote sessions to fix their issues.",
            "My experience from the IT Help Centre came handy when I was communicating with my clients. I am glad to say that I gave my best to provide the best service to our clients. We also took part in deploying machines for our clients. This involved a standard procedure which was quite easy to catch up within days into the job. Our communication within the team was so good that we were able to grab hold of all our responsibilities diligently early. We also managed to bring some changes to the process flow in the office to make things more efficient.",
          ]}
        />
        <div id="goals">
          <h1>Goals and Learnings</h1>
          <hr style={{ border: "2px solid black" }} />
          <Bullet
            imgsrc={SCCM}
            title="Learn to work with windows configuration managers(SCCM) and understand how software deployment works"
            content={[
              "Microsoft System Center Configuration Manager (SCCM) is a Windows product that enables the management, deployment and security of devices and applications across an organisation. The use of this software has been a key part in managing machines for our clients. Using SCCM we were able to push out software updates, operating system updates, deploy software packages and even perform real-time actions on the managed machines.",
              "We have over 2,100 computers under the Managed Desktops’ client’s list, using SCCM made it quite easy for us to keep track of all these machines. From the status of a machine to a detailed report of its internal updates, the SCCM can be useful when troubleshooting a machine remotely. Since SCCM was created by Microsoft, we were able to load our machines with a customized Windows Operating System, which enabled the IT technicians to manage the machines easily. I have been given the task of adding machines to SCCM, performing software updates and pushing software to machines on various occasions. There were also times where I was asked to track machines’ status and notice if any odd reports were being received from them or not. Since we took away the need to bring in a machine to our office for a software installation, our clients appreciated how we pushed software remotely via SCCM.",
            ]}
          />
          <Bullet
            imgsrc={REACT}
            title="Learning and working with React"
            content={[
              "React is a very interesting JavaScript library, used to create front-end components for web page or app. Since summer is the only time, I am away from school, I decided to build-up on my web development skills. I previously had experience with JavaScript so React was not too difficult to catch up to. I decided to code out my current work term report in React, just so I can have something to apply my knowledge on.",
              "React gives web developers the flexibility to use various component-based approach to their web application and this becomes very handy when managing a large-scale project. React also had many additional packages which could be used to further enhance any project. I had the opportunity to work with Material-UI and React-strap this summer. Overall, learning React was a solid experience and would come in handy for my career.",
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
