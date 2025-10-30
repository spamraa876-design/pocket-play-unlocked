import { Card } from "@/components/ui/card";
import { Globe, Rocket, Sparkles, Target } from "lucide-react";

const Vision = () => {
  const futureApplications = [
    {
      icon: Globe,
      title: "VR/AR Control",
      description: "Next-gen interfaces for virtual worlds",
    },
    {
      icon: Rocket,
      title: "Drone Control",
      description: "Consumer drone navigation platform",
    },
    {
      icon: Sparkles,
      title: "Robotics",
      description: "Universal robotics control interface",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building more than a gaming platform - we're creating the future of universal input control
          </p>
        </div>

        {/* Mission statement */}
        <Card className="p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-primary glow-primary mb-16">
          <div className="text-center">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-4xl font-bold mb-6">
              "Make gaming accessible to <span className="gradient-text">every person on the planet</span>"
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Breaking down barriers and democratizing premium gaming experiences for billions of people worldwide
            </p>
          </div>
        </Card>

        {/* Long-term goals */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-card/50 border-primary/20 text-center">
            <div className="text-5xl font-bold text-primary mb-3">100M</div>
            <p className="text-xl font-semibold mb-2">Users by Year 5</p>
            <p className="text-sm text-muted-foreground">Global platform domination</p>
          </Card>
          <Card className="p-8 bg-card/50 border-secondary/20 text-center">
            <div className="text-5xl font-bold text-secondary mb-3">$500M+</div>
            <p className="text-xl font-semibold mb-2">Exit Valuation</p>
            <p className="text-sm text-muted-foreground">Strategic acquisition target</p>
          </Card>
          <Card className="p-8 bg-card/50 border-accent/20 text-center">
            <div className="text-5xl font-bold text-accent mb-3">50+ Countries</div>
            <p className="text-xl font-semibold mb-2">Global Presence</p>
            <p className="text-sm text-muted-foreground">Worldwide market penetration</p>
          </Card>
        </div>

        {/* Beyond gaming */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">
            Beyond Gaming: <span className="gradient-text">Future Applications</span>
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our core technology opens doors to massive adjacent markets, positioning us as a universal control platform
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {futureApplications.map((app, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 mx-auto glow-primary">
                  <app.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-center mb-3">{app.title}</h4>
                <p className="text-sm text-muted-foreground text-center">{app.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic positioning */}
        <Card className="mt-16 p-8 bg-card/50 border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Strategic Acquisition Targets</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-bold">Gaming Giants</p>
              <p className="text-sm text-muted-foreground mt-2">Sony, Microsoft, Nintendo</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <p className="font-bold">Tech Platforms</p>
              <p className="text-sm text-muted-foreground mt-2">Meta, Apple, Google</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="font-bold">Hardware OEMs</p>
              <p className="text-sm text-muted-foreground mt-2">Samsung, Xiaomi, OnePlus</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-bold">Streaming</p>
              <p className="text-sm text-muted-foreground mt-2">Nvidia, Amazon, Valve</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Vision;
