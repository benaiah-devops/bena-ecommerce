import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader 
            title="Our Story" 
            subtitle="Three decades of quiet dedication to the art of restraint"
          />
          
          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="Company founders"
              title="Established 1989"
              content="In 1989, Bena emerged from a simple conviction: that the most profound luxury is found not in excess, but in what remains after everything unnecessary has been removed. Our founders understood that true elegance speaks in whispers, not shouts. Over three decades, we have remained steadfast in this philosophy, creating accessories that honor the space between elements as much as the elements themselves. Each piece is born from countless hours of refinement, where every curve is questioned, every line justified, until only essential beauty remains."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Our Heritage">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">The Art of Subtraction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our artisans understand that mastery lies not in adding more, but in knowing what to leave behind. Each piece undergoes a process of careful reduction, where form is refined until it achieves a state of quiet perfection. We work with materials that age gracefully, techniques that honor tradition while embracing subtle innovation, and a pace that allows for true contemplation of each detail.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Material Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We select materials not for their ostentation, but for their inherent character and ability to tell a story over time. Each material is chosen for how it responds to touch, how it captures and reflects light, how it ages with dignity. Our sourcing practices reflect our belief that true luxury cannot exist without ethical responsibility, ensuring that beauty extends beyond the object itself.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Discipline</h3>
                <p className="text-muted-foreground">
                  We practice the discipline of restraint, knowing that true refinement comes from what we choose not to include as much as what we do.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  Every creation carries the weight of honest intention, free from pretense or unnecessary embellishment.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Evolution</h3>
                <p className="text-muted-foreground">
                  We move forward thoughtfully, allowing our craft to evolve naturally while remaining true to our foundational principles of simplicity and purpose.
                </p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStory;