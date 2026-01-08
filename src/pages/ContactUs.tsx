import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageHeader from "../components/about/PageHeader";
import ContentSection from "../components/about/ContentSection";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6">
          <PageHeader 
            title="Contact Us" 
            subtitle="We're here to assist you with any questions or inquiries"
          />
          
          <ContentSection title="Get in Touch">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-foreground">Visit Our Showroom</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>123 Galle Road</p>
                    <p>Colombo 03, Sri Lanka</p>
                    <p className="mt-4">Mon-Sat: 10AM-8PM</p>
                    <p>Sun: 12PM-6PM</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-foreground">Contact Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Phone: +94 (11) 234-5678</p>
                    <p>Email: hello@bena.com</p>
                    <p>Response within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-light text-foreground">First Name</label>
                      <Input className="rounded-none" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-light text-foreground">Last Name</label>
                      <Input className="rounded-none" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground">Email</label>
                    <Input type="email" className="rounded-none" placeholder="Enter your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground">Phone (Optional)</label>
                    <Input className="rounded-none" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground">Subject</label>
                    <Input className="rounded-none" placeholder="What is your inquiry about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground">Message</label>
                    <Textarea 
                      className="rounded-none min-h-[150px]" 
                      placeholder="Please share your thoughts or questions..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full rounded-none">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Additional Resources">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Customer Care</h4>
                <p className="text-sm text-muted-foreground">
                  For order inquiries, returns, or product questions
                </p>
                <Button variant="outline" className="rounded-none mt-4" asChild>
                  <a href="/about/customer-care">Visit Customer Care</a>
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Store Locator</h4>
                <p className="text-sm text-muted-foreground">
                  Find our showroom locations and schedule appointments
                </p>
                <Button variant="outline" className="rounded-none mt-4" asChild>
                  <a href="/about/store-locator">Find a Store</a>
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Size Guide</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure the perfect fit with our comprehensive sizing guide
                </p>
                <Button variant="outline" className="rounded-none mt-4" asChild>
                  <a href="/about/size-guide">View Size Guide</a>
                </Button>
              </div>
            </div>
          </ContentSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;

