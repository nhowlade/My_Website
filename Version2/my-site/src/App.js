import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paragraph from './components/paragraph';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Paragraph title="Introduction" content={['Summer’21 was another spectacular summer of my life and to top everything off, I am dedicating this blog post to showcase the things I have picked up from my third co-op placement. This time the University of Guelph’s CCS has decided to give me a return offer to work with the Managed Desktops team this summer.']}/>
        <Paragraph title="The MD Team" content={['You might want to look at my previous work term report to know about my last summer’s experience with them.', 'This time I was working for the Managed Desktops (MD) Team. For the summer there was 4 co-op students, including me, in the team. The MD team primarily provides IT support to a wide variety of clients across the University of Guelph. Access to MD support is only limited to paying clients and we flag these clients as MD clients.', 'The team provides support for various technical and hardware-related issues like hardware troubleshooting and diagnosis, technical consultation for workflow and procedures, centrally managed proactive security scanning and monitoring, etc. Within the team, we maintain a very professional service culture, where we always put the needs of our clients as our top priority.']}/>
      </Container>
    </div>
  );
}

export default App;
