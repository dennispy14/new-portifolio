import { AboutSection } from './sections/AboutSection'
import { AiSection } from './sections/AiSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { StackSection } from './sections/StackSection'

function App() {
  return (
    <div className="page-shell">
      <HeroSection />

      <main>
        <AboutSection />
        <StackSection />
        <ExperienceSection />
        <ProjectsSection />
        <AiSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
