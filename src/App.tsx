import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TechnicalSpecifications from './pages/TechnicalSpecifications';
import WorkTimeline from './pages/WorkTimeline';
import AssetsManpower from './pages/AssetsManpower';
import FloorPlans from './pages/FloorPlans';
import ProjectPhotos from './pages/ProjectPhotos';
import ProjectVideos from './pages/ProjectVideos';
import Contact from './pages/Contact';
import PremiumPackage from './pages/PremiumPackage';
import CivilLaborPackage from './pages/CivilLaborPackage';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technical-specifications" element={<TechnicalSpecifications />} />
          <Route path="/work-timeline" element={<WorkTimeline />} />
          <Route path="/assets-manpower" element={<AssetsManpower />} />
          <Route path="/floor-plans" element={<FloorPlans />} />
          <Route path="/project-photos" element={<ProjectPhotos />} />
          <Route path="/project-videos" element={<ProjectVideos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium-package" element={<PremiumPackage />} />
          <Route path="/civil-labor-package" element={<CivilLaborPackage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
