import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Size Guide" 
          subtitle="Ensuring your Bena piece fits as perfectly as it was designed"
        />
        
        <ContentSection title="Ring Sizing">
          <div className="space-y-8">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-6">Determining Your Ring Size</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Using an Existing Ring</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Select a ring that fits comfortably on the finger where you'll wear your Bena piece</li>
                    <li>Place it flat on a ruler and measure the inside diameter in millimeters</li>
                    <li>Match this measurement to our size conversion chart below</li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Measuring Your Finger</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Wrap a narrow strip of paper or string around the base of your finger</li>
                    <li>Mark the point where the ends meet</li>
                    <li>Measure this length in millimeters</li>
                    <li>Divide by 3.14159 (π) to calculate the diameter, then reference our chart</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="border border-border p-3 text-left font-light">US Size</th>
                    <th className="border border-border p-3 text-left font-light">UK Size</th>
                    <th className="border border-border p-3 text-left font-light">EU Size</th>
                    <th className="border border-border p-3 text-left font-light">Diameter (mm)</th>
                    <th className="border border-border p-3 text-left font-light">Circumference (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { us: "5", uk: "J", eu: "49", diameter: "15.6", circumference: "49.0" },
                    { us: "5.5", uk: "K", eu: "50", diameter: "16.0", circumference: "50.2" },
                    { us: "6", uk: "L", eu: "51", diameter: "16.4", circumference: "51.5" },
                    { us: "6.5", uk: "M", eu: "52", diameter: "16.8", circumference: "52.8" },
                    { us: "7", uk: "N", eu: "54", diameter: "17.2", circumference: "54.0" },
                    { us: "7.5", uk: "O", eu: "55", diameter: "17.6", circumference: "55.3" },
                    { us: "8", uk: "P", eu: "56", diameter: "18.0", circumference: "56.5" },
                    { us: "8.5", uk: "Q", eu: "57", diameter: "18.4", circumference: "57.8" },
                    { us: "9", uk: "R", eu: "59", diameter: "18.8", circumference: "59.1" }
                  ].map((size, index) => (
                    <tr key={index} className="hover:bg-muted/10">
                      <td className="border border-border p-3">{size.us}</td>
                      <td className="border border-border p-3">{size.uk}</td>
                      <td className="border border-border p-3">{size.eu}</td>
                      <td className="border border-border p-3">{size.diameter}</td>
                      <td className="border border-border p-3">{size.circumference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Bracelet & Necklace Sizing">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Bracelet Sizing</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Petite</span>
                  <span className="text-foreground">6.25" - 6.75" (16-17cm)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Standard</span>
                  <span className="text-foreground">7" - 7.5" (18-19cm)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Extended</span>
                  <span className="text-foreground">7.75" - 8.25" (20-21cm)</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Measure around your wrist at the narrowest point, then add 0.5" to 1" for a comfortable fit.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Necklace Length Guide</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Collarbone</span>
                  <span className="text-foreground">15" - 16" (38-41cm)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Classic</span>
                  <span className="text-foreground">18" - 20" (46-51cm)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Extended</span>
                  <span className="text-foreground">22" - 24" (56-61cm)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Statement</span>
                  <span className="text-foreground">28" - 32" (71-81cm)</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Consider your neckline and personal preference. Most find 18" to 20" offers the most versatility.</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Help?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Finding the right size ensures your Bena piece sits exactly as intended. If you're uncertain, 
              our specialists can guide you through measurements or arrange a fitting at one of our locations. 
              We also offer a printable sizing guide for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="rounded-none">
                Download PDF Guide
              </Button>
              <Button className="rounded-none">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;