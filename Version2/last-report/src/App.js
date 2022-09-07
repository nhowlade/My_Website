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
import Golang from "./images/golang.jpeg";
import Docker from "./images/docker.webp";
import Git from "./images/version-control.jpg"
import Testing from "./images/software-testing.jpg"

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
        <Bullet
          imgsrc={Wolf}
          id="arctic-wolf"
          name="arctic-wolf"
          title=""
          content={[
            "Arctic Wolf specializes in providing its clients with security operations. Over the years, many new technologies, vendors, and software solutions have emerged, but cyber incidents still seem to be a threat to the cyberspace we have wrapped ourselves in. Arctic Wolf envisions to exterminate these risks and create a cyberspace that is free from all malicious activity. They provide 24×7 monitoring, detection and response, as well as ongoing risk management to proactively protect organizations while continually strengthening their security posture. Their solutions include Arctic Wolf® Managed Detection and Response (MDR), Managed Risk, Managed Cloud Monitoring, and Managed Security Awareness.",
            "With specialized personnel, Arctic Wolf has set out to make their presence known in the CyberSecurity Industry. They are currently expanding outside of North America in order to protect more clients and reach a point where cyber risk is essentially zero.",
          ]}
        />
        <Paragraph
          linkpresent="false"
          name="my-role"
          title="My time @ Arctic Wolf"
          content={[
            "I joined Arctic Wolf as a Software Developer Co-op in Arctic Wolf’s Research and Development (RnD) department. At first I was assigned to the Carebears team, where I spent my first 4 months. I was assigned technical tickets to solve, help run daily standups, organize team retrospectives etc. I also had an amazing mentor to help me get up to speed with the products we managed and get familiarized with the workflows within the team.",
            "The entire team was very supportive of each other and everyone was willing to help one another in time of need. Our manager always had weekly one-on-one meetings with each and everyone of us and worked hard to make sure we were all reaching both our personal and the company’s goals. Besides solving programming problems, we had many interesting conferences and events across the company.",
            "For the last few months of my term, I was with the Bladerunners team. I retained similar responsibilities as before but we were more focussed with a few specific products. I met a lot of new people during my time and collaborated with many talented individuals. Arctic Wolf’s work culture is great and it provides everyone with an opportunity to grow within the company.",
          ]}
        />
        <div id="goals">
          <h1>Goals and Learnings</h1>
          <hr style={{ border: "2px solid black" }} />
          <Bullet
            imgsrc={Python}
            id="python"
            title="Learn and become proficient in Python"
            content={[
              "My first ticket at Arctic wolf helped me get started on my journey to polish my Python skills. It was a very interesting language to pick up, since it was pretty versatile and a high-level language. Coming from working in C and Java, Python was pretty amazing. With its extensive collection of external libraries, it was able to solve anything I wanted to do.",
              "I took a few introductory courses on Python to get the hang of it and by the end of each course I felt more and more confident in myself. I used Python to fix a feature within our product line, where strings were being used. This also gave me exposure to regular expressions and the strings library for Python.",
            ]}
          />
          <Bullet
            imgsrc={AWS}
            id="aws"
            title="Learn to use Amazon Web Services"
            content={[
              "Amazon Web Services consists of a huge collection of services that all helps to provide cloud computing power to various organizations. Throughout my time at Arctic Wolf, I have worked closely with Elastic Container Service (ECS) and Elastic Kubernetes Service (EKS). Both ECS and EKS come with a layer of abstraction for containers and are used to run, stop, and manage containers in a cluster.",
              "I first started to work with ECS where I was dealing with scaling ECS clusters to accomodate a much larger workload. The support for ECS was dwindling and so a joint decision was made to migrate all our clusters to use EKS. EKS allowed us to easily run tooling and plugins developed by the Kubernetes and integrate it with our containers. It also drastically helped to automate load distribution and made carrying out maintenance quite easier for us.",
            ]}
          />
          <Bullet
            imgsrc={Golang}
            id="golang"
            title="Learn to use Golang"
            content={[
              "Once I was comfortable using Python, I moved on to explore Golang. I picked up the language pretty well and within a few days I was able to get my first ticket in Golang. I started to build a command-line tool in Golang that would help to automate a workflow for my team. Go comes with a lot of external libraries and the most helpful ones for this project was Cobra and Tablewriter.",
              "Cobra provided a simple interface to create command-line interfaces and Tablewriter helped to generate ASCII tables with ease. Cobra helped to lay down the foundation for my tool while Tablewriter took care of processing the output. At the end of the project, I was able to get a good grasp on references, string manipulation and typed collections in Go. I really enjoyed developing the tool in Go because of the faster execution, as it has the ability to compile directly to machine code. Moreover, the community support for Golang is active and growing day by day.",
            ]}
          />
          <Bullet
            imgsrc={Docker}
            id="docker"
            title="Learn to use Docker"
            content={[
              "Docker is an open platform for developing, shipping, and running applications. Using containers, we were able to standardize our development environments. This drastically improved the rate at which we would make changes to our code repositories. Starting off, I was looking into how containers were working and soon I found them to be very interesting. I wrote some container configuration files that helped deploy my command-line tool into production. I have also used docker containers to test changes to my code and catch any bugs, without compromising the integrity of our shared repositories and was much faster on compiling these changes."
            ]}
          />
          <Bullet
            imgsrc={Git}
            id="git"
            title="Properly utilize version control and implement good coding practises"
            content={[
              "The use of version control systems allows us to compare files, identify differences, and merge changes. At Arctic Wolf, I have used Github extensively for this reason. I have also used JIRA to keep in check the issues that were opened for us to investigate and solve. JIRA tickets were used to raise an issue to a team and a github branch would be opened, where we would stash our changes for the ticket. Once the changes were complete, a pull request would be created.",
              "Then someone from the respective team was to follow through the changes, comment where needed and then approve the changes once it looks good. Since many team members could work on a specific issue, it was important to maintain a specific styling when writing code. We also had Linters in place which helped to detect any piece of code that deviated from the usual code-style. This took a little time for me to get used to but overtime I realized this was extremely helpful. Uniform code-style improves code readability and  helps to spot bugs easily."
            ]}
          />
          <Bullet
            imgsrc={Testing}
            id="testing"
            title="Get into the habit of using test frameworks to thoroughly test code"
            content={[
              "Testing is a very important part of software development. I have started my testing journey with Python’s Pylint and Pytest library. Pylint has helped to keep my code clean by statically analyzing my code without running it. This has helped to catch any corner cases like array indexes going out of bounds, improper initialization of variables etc. and this consequently helped to make my code much cleaner. Unittest package also helped to validate methods in Python.",
              "I have also used Postman to mock backend Responses. This came in handy when I was manually testing out a new feature we deployed for one of our products. I have also used the Go testing framework to write tests for my methods and make sure each of them behave as expected. Getting exposure to test frameworks has also helped me to pick up test-driven development."
            ]}
          />
        </div>
        <Paragraph
          linkpresent="false"
          name="takeaways"
          title="Takeaways"          
          content={[
            "These last 8 months passed by really quickly, but I am confident that I have picked up many good things during this time. My programming skills have improved drastically and I have added two new languages to my toolkit as well. Being part of a software development team, exposed me to a number of workflows and organizational values that would definitely help me to grow as a developer. Teamwork was important and maintaining a healthy work environment was one of the things I was blessed with at Arctic Wolf.",
            "Even though most of my time was spent working from home, I took occasional trips to the office and it gave me a very different experience. The team treated me not like a co-op but as any other developer. This helped to enforce accountability on myself and pushed me to work harder. Overall, it was an amazing experience and I can leverage this experience moving forward into my career.",
          ]}
        />
        <Paragraph
          linkpresent="false"
          name="acknowledgements"
          title="Acknowledgements"
          content={[
            "Being a Software Developer coop has been an adventure for me and I am glad that I could work in such an amazing team.",
            "I would love to credit my team for giving me such a wonderful experience. I personally would like to thank Akshay, Alex and Hasnat for helping me to catch up with the duties of my position. Along with my team members, I would also like to extend my thanks to Sola, Raj and Doug for working alongside me, even if it was for a short time.",
            "To our manager, Ray Ruvinskiy, I would say your words were always motivating me to work at my best and I am always enlightened to hear your suggestions, from feedback related to my performance. Another person who has always been encouraging me along was Jacob Sawatzky, he is an exceptional human being and an awesome mentor. I feel I would not be able to reach this point without his support and guidance.",
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
