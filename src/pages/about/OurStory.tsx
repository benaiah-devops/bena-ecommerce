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
            subtitle="A journey of passion, craftsmanship, and timeless elegance"
          />
          
          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="Company founders"
              title="Established 1989"
              content="Bena was founded with a vision to create luxury accessories that stand the test of time. Since our establishment, we have remained committed to exceptional craftsmanship, refined design, and the belief that true luxury is found in simplicity and precision. Every piece we create is a testament to our dedication to excellence."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Our Heritage">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Master Craftsmanship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece in our collection is meticulously handcrafted by skilled artisans who have perfected their craft over decades. We honor traditional techniques while embracing contemporary innovation, ensuring each piece meets our exacting standards for quality and beauty.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Refined Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe luxury is defined by the quality of materials and the precision of execution. Our commitment to sourcing the finest materials and ethical practices ensures that every piece you wear represents the pinnacle of craftsmanship and design.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue perfection in every detail, from the initial design concept to the final polish.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Each piece reflects genuine craftsmanship and tells an authentic story of artistry and care.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our designs and techniques while honoring timeless aesthetic principles.
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