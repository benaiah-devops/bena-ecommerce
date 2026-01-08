interface Store {
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

const stores: Store[] = [
  {
    name: "Bena Galle Road",
    address: "123 Galle Road, Colombo 03, Sri Lanka",
    phone: "+94 (11) 234-5678",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    lat: 6.9271,
    lng: 79.8612
  },
  {
    name: "Bena Cinnamon Gardens", 
    address: "456 Ward Place, Colombo 07, Sri Lanka",
    phone: "+94 (11) 234-5679",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    lat: 6.9147,
    lng: 79.8570
  },
  {
    name: "Bena Kollupitiya",
    address: "789 Duplication Road, Colombo 04, Sri Lanka", 
    phone: "+94 (11) 234-5680",
    hours: "Mon-Sat: 11AM-8PM, Sun: 12PM-7PM",
    lat: 6.9106,
    lng: 79.8578
  }
];

const StoreMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-border bg-muted/10 relative">
      {/* Static Map using Google Maps Embed API */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63101234567!2d79.8!3d6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      
      {/* Overlay with store markers */}
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <h4 className="text-sm font-medium text-foreground mb-3">Our Locations</h4>
        <div className="space-y-2">
          {stores.map((store, index) => (
            <div key={index} className="text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="font-medium text-foreground">{store.name}</span>
              </div>
              <p className="text-muted-foreground ml-4">{store.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreMap;