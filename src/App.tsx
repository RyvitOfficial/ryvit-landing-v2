import Footer from './containers/Footer';
import Header from './containers/Header';
import PaymentsSection from './containers/PaymentsSection';
import ProblemSection from './containers/ProblemSection';
import SolutionSection from './containers/SolutionSection';
import WhyRyvitSection from './containers/WhyRyvitSection';
import Hero from './containers/HeroSection';
import BeyondCoreSection from './containers/BeyondCoreSection';
import NewsLatter from './containers/NewsLatterSection';

function App() {
  return (
    <div className="font-inter bg-background text-foreground antialiased max-w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BeyondCoreSection />
        <PaymentsSection />
        <WhyRyvitSection />
        <NewsLatter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
