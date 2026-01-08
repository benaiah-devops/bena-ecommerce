import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    {
      name: "Bena Galle Road",
      address: "123 Galle Road, Colombo 03, Sri Lanka",
      phone: "+94 (11) 234-5678",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      services: ["Personal Shopping", "Custom Design", "Repairs", "Consultations"]
    },
    {
      name: "Bena Cinnamon Gardens",
      address: "456 Ward Place, Colombo 07, Sri Lanka",
      phone: "+94 (11) 234-5679",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
      services: ["Personal Shopping", "Custom Design", "VIP Services", "Repairs"]
    },
    {
      name: "Bena Kollupitiya",
      address: "789 Duplication Road, Colombo 04, Sri Lanka",
      phone: "+94 (11) 234-5680",
      hours: "Mon-Sat: 11AM-8PM, Sun: 12PM-7PM",
      services: ["Browse & Buy", "Repairs", "Gift Wrapping"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Store Locator" 
          subtitle="Spaces designed for contemplation and connection"
        />
        
        <ContentSection title="Interactive Store Map">
          <StoreMap />
        </ContentSection>

        <ContentSection title="Our Locations">
          <div className="grid gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{store.address}</p>
                      <p>{store.phone}</p>
                      <p>{store.hours}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" className="rounded-none">
                        Get Directions
                      </Button>
                      <Button className="rounded-none">
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-light text-foreground">Available Services</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {store.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Private Appointments">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reserve time in our private consultation space, where the pace slows and attention deepens. Our specialists work with you to understand your preferences, explore our collections without distraction, and collaborate on bespoke creations in an environment designed for thoughtful consideration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Curated Selection</h4>
                <p className="text-muted-foreground text-sm">
                  Dedicated time with our specialists to discover pieces that resonate with your personal aesthetic
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Bespoke Creation</h4>
                <p className="text-muted-foreground text-sm">
                  Collaborate with our design team to bring your vision to life through a process of careful refinement
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Ongoing Care</h4>
                <p className="text-muted-foreground text-sm">
                  Comprehensive support including authentication, restoration, and preservation of your Bena pieces
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="rounded-none">
                Schedule Your Appointment
              </Button>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Virtual Consultations">
          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-foreground mb-4">Distance is no barrier</h3>
            <p className="text-muted-foreground mb-6">
              Our virtual consultations bring the Bena experience to you, wherever you are. Through video connection, we present pieces in detail, discuss your preferences, and guide you toward selections that align with your vision, all from the comfort of your own space.
            </p>
            <Button variant="outline" className="rounded-none">
              Book Virtual Consultation
            </Button>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;