import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Sustainability" 
          subtitle="Responsibility woven into every thread of our practice"
        />
        
        <ContentSection title="Our Environmental Commitment">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Conscious Origins</h3>
              <p className="text-muted-foreground leading-relaxed">
                We trace the journey of every material that enters our workshop. Our partnerships are built on shared values of respect—for the earth, for the hands that extract and refine, and for the communities that make our work possible. Transparency isn't a marketing term for us; it's a fundamental requirement.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Renewed Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                We see beauty in transformation. The majority of our materials have lived previous lives, and we honor that history by giving them new form. This approach reduces our environmental footprint while creating pieces that carry the quiet wisdom of materials that have already proven their durability.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">Measured Progress</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Carbon neutral operations by 2025</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">90%</div>
                <p className="text-sm text-muted-foreground">Recycled packaging materials</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">Zero</div>
                <p className="text-sm text-muted-foreground">Waste to landfill policy</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Circular Economy">
          <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
              We design for longevity, not obsolescence. Each piece is created with the understanding that it may outlive its original owner, passing through generations or returning to us to be transformed once more. This circular thinking informs every design decision we make.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Enduring Support</h3>
                <p className="text-muted-foreground">
                  Your Bena piece is not a transaction; it's the beginning of a relationship. We commit to maintaining and restoring your accessories for as long as they exist, ensuring they continue to serve their purpose beautifully.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Return to Source</h3>
                <p className="text-muted-foreground">
                  When the time comes to part with your piece, we welcome it back. Through our return program, materials find new life in future collections, continuing the cycle of thoughtful creation.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Certifications & Partnerships">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              We submit our practices to independent verification, not for accolades, but for accountability. These partnerships ensure we remain honest in our commitments and transparent in our progress.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">RJC Certified</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">B Corp</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">SCS Certified</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Fair Trade</span>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sustainability;