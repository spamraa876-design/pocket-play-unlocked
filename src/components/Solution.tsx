import { CheckCircle2, Smartphone, Cpu, Gamepad } from "lucide-react";
import { Card } from "@/components/ui/card";

const Solution = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Universal Platform",
      description: "Transform any smartphone into a high-performance game controller",
      benefit: "No new hardware needed",
    },
    {
      icon: Cpu,
      title: "Software Ecosystem",
      description: "Free mobile app + desktop bridge with AI-powered auto-configuration",
      benefit: "Setup in seconds",
    },
    {
      icon: Gamepad,
      title: "Premium Hardware",
      description: "Optional console-grade grips with 68% profit margin",
      benefit: "Superior tactile experience",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet <span className="gradient-text">PocketJoystick</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The universal gaming platform that makes console-grade gaming accessible to everyone
          </p>
        </div>

        {/* Main value prop */}
        <div className="max-w-5xl mx-auto mb-16 p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 text-center">
          <div className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Phone + App + Grip</span>
          </div>
          <p className="text-2xl mb-8">=</p>
          <div className="text-4xl md:text-5xl font-bold">Universal Gaming Platform</div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 glow-primary">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">{feature.benefit}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Cost comparison */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">10x Cheaper</span> Than Traditional Consoles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card/50 border-muted">
              <h4 className="text-xl font-bold mb-4 text-muted-foreground">Traditional Console</h4>
              <div className="text-5xl font-bold text-destructive mb-4">₹75,000+</div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Console hardware</li>
                <li>• Controllers</li>
                <li>• Games (₹4,000 each)</li>
                <li>• Accessories</li>
              </ul>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary glow-primary">
              <h4 className="text-xl font-bold mb-4">PocketJoystick</h4>
              <div className="text-5xl font-bold text-primary mb-4">₹999</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Free app (existing phone)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Optional grip (₹999)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Existing PC games</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Unlimited compatibility</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
