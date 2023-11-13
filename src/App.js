import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction'; // Make sure the path is correct
import Supported from './components/Supported'; // Import the Supported component
import Divider from './components/Divider'; // Import the Divider component
import './App.css';


function App() {
  // Function to handle scroll to specific section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="supported-equipment-manufacturers">
          <Supported />
        </section>
        <Divider /> {/* Render the Divider component */}
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
