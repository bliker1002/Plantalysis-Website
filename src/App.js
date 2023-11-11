import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  // Function to handle scroll to specific section
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
        <section id="introduction">
          {/* Content for Introduction */}
        </section>
        <section id="supported-equipment">
          {/* Content for Supported Equipment */}
        </section>
        <div className="divider"></div>
        <section id="services">
          <article id="food-beverage">
            {/* Content for Food & Beverage */}
          </article>
          <article id="cannabis">
            {/* Content for Cannabis */}
          </article>
          <article id="supplements">
            {/* Content for Supplements */}
          </article>
          <article id="nootropics">
            {/* Content for Nootropics */}
          </article>
          <article id="psychedelics">
            {/* Content for Psychedelics */}
          </article>
        </section>
      </main>
      <footer>
        {/* Footer content here */}
      </footer>
    </div>
  );
}

export default App;
