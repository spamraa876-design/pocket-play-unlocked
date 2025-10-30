import { Card } from "@/components/ui/card";
import { CheckCircle2, X, Zap, Shield, Users, Brain } from "lucide-react";

const CompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Universal Compatibility",
      description: "Works with any PC game from any platform",
      ourSolution: "✓ Steam, Epic, Origin, all games",
      competitors: "✗ Platform-specific games only",
    },
    {
      icon: Shield,
      title: "Price Disruption",
      description: "10x cheaper than traditional console setups",
      ourSolution: "₹999 for complete setup",
      competitors: "₹75,000+ average cost",
    },
    {
      icon: Users,
      title: "True Multiplayer",
      description: "Support for up to 8 players simultaneously",
      ourSolution: "✓ 8 players with own phones",
      competitors: "✗ Max 4 players, need controllers",
    },
    {
      icon: Brain,
      title: "AI-Powered Setup",
      description: "Intelligent auto-configuration",
      ourSolution: "✓ Auto-detects & configures",
      competitors: "✗ Manual 30+ min setup",
    },
  ];

  const comparison = [
    {
      feature: "Setup Cost",
      pocketJoystick: "₹999",
      console: "₹75,000+",
      otherApps: "Free but limited",
    },
    {
      feature: "Game Library",
      pocketJoystick: "Entire PC library",
      console: "Platform-specific",
      otherApps: "Select titles only",
    },
    {
      feature: "Players Supported",
      pocketJoystick: "Up to 8",
      console: "Up to 4",
      otherApps: "1-2",
    },
    {
      feature: "Setup Time",
      pocketJoystick: "< 30 seconds",
      console: "Instant",
      otherApps: "30+ minutes",
    },
    {
      feature: "Tactile Feel",
      pocketJoystick: "Premium grips",
      console: "Excellent",
      otherApps: "Touchscreen only",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Competitive Moat</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A defensible position built on technology, price, and user experience
          </p>
        </div>

        {/* Key advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 border-primary/20 hover:border-primary transition-all hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 glow-primary">
                <advantage.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{advantage.description}</p>
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{advantage.ourSolution}</p>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{advantage.competitors}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison table */}
        <Card className="p-8 bg-card/50 border-primary/20 overflow-x-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Competitive Comparison</h3>
          <div className="min-w-[600px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-left py-4 px-4">
                    <span className="gradient-text font-bold">PocketJoystick</span>
                  </th>
                  <th className="text-left py-4 px-4 text-muted-foreground">Traditional Console</th>
                  <th className="text-left py-4 px-4 text-muted-foreground">Other Apps</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        {row.pocketJoystick}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{row.console}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.otherApps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Market positioning */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 inline-block">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Unique Market Position</span>
            </h3>
            <p className="text-xl mb-6">The Only Solution That Combines:</p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <p className="font-semibold">Affordability</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎮</div>
                <p className="font-semibold">Universal Gaming</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <p className="font-semibold">8-Player Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <p className="font-semibold">AI Automation</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
