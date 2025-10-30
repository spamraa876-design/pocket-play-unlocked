import { Card } from "@/components/ui/card";
import { Rocket, TrendingUp, Globe, Target, Users, Megaphone } from "lucide-react";

const MarketingStrategy = () => {
  const phases = [
    {
      phase: "Phase 1: Launch",
      icon: Rocket,
      timeline: "Months 1-6",
      color: "primary",
      strategies: [
        {
          title: "Influencer Marketing",
          description: "Partner with 50+ top gaming creators",
          impact: "Reach 10M+ gaming audience",
        },
        {
          title: "PR Campaign",
          description: "Target tech & gaming media outlets",
          impact: "Build brand credibility",
        },
        {
          title: "Beta Community",
          description: "Leverage existing 10K users for word-of-mouth",
          impact: "Organic growth engine",
        },
      ],
    },
    {
      phase: "Phase 2: Growth",
      icon: TrendingUp,
      timeline: "Months 7-18",
      color: "secondary",
      strategies: [
        {
          title: "Retail Partnerships",
          description: "Croma, Reliance Digital placements",
          impact: "Mainstream visibility",
        },
        {
          title: "College Campaigns",
          description: "Campus ambassadors & tournaments",
          impact: "Tap into youth market",
        },
        {
          title: "Gaming Cafe Network",
          description: "Free products to cafes in Tier 3-4 cities",
          impact: "Grassroots penetration",
        },
        {
          title: "Performance Marketing",
          description: "Social media ads & app store optimization",
          impact: "Scalable user acquisition",
        },
      ],
    },
    {
      phase: "Phase 3: Scale",
      icon: Globe,
      timeline: "Months 19-36",
      color: "accent",
      strategies: [
        {
          title: "National Coverage",
          description: "Expand to all major Indian cities",
          impact: "Market leadership",
        },
        {
          title: "International Expansion",
          description: "Launch in Southeast Asia markets",
          impact: "250M+ new addressable users",
        },
        {
          title: "B2B Partnerships",
          description: "Esports tournaments & bulk licenses",
          impact: "Enterprise revenue stream",
        },
      ],
    },
  ];

  const channels = [
    {
      icon: Users,
      channel: "Influencer Marketing",
      investment: "25%",
      expectedROI: "4x",
    },
    {
      icon: Megaphone,
      channel: "Performance Marketing",
      investment: "30%",
      expectedROI: "3.5x",
    },
    {
      icon: Target,
      channel: "Grassroots Activation",
      investment: "20%",
      expectedROI: "5x",
    },
    {
      icon: Globe,
      channel: "Retail & Partnerships",
      investment: "25%",
      expectedROI: "3x",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Go-to-Market</span> Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A three-phase plan designed for market domination
          </p>
        </div>

        {/* Marketing channels overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {channels.map((channel, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary transition-all"
            >
              <channel.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{channel.channel}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Investment</span>
                <span className="text-xl font-bold text-primary">{channel.investment}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Expected ROI</span>
                <span className="text-lg font-bold text-secondary">{channel.expectedROI}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Three-phase strategy */}
        <div className="space-y-12">
          {phases.map((phase, phaseIndex) => (
            <Card
              key={phaseIndex}
              className={`p-8 bg-gradient-to-br from-${phase.color}/20 to-${phase.color}/5 border-${phase.color}/30`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${phase.color} to-${phase.color}/50 flex items-center justify-center glow-${phase.color}`}>
                  <phase.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{phase.phase}</h3>
                  <p className="text-muted-foreground">{phase.timeline}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {phase.strategies.map((strategy, strategyIndex) => (
                  <div
                    key={strategyIndex}
                    className="p-6 rounded-xl bg-background/50 backdrop-blur border border-border"
                  >
                    <h4 className="text-xl font-bold mb-3">{strategy.title}</h4>
                    <p className="text-muted-foreground mb-3">{strategy.description}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${phase.color}/20 text-${phase.color} text-sm font-semibold`}>
                      <TrendingUp className="w-4 h-4" />
                      {strategy.impact}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Grassroots activation spotlight */}
        <Card className="mt-16 p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Unique Grassroots Strategy</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-4">Gaming Cafe Network</h4>
              <p className="text-muted-foreground mb-4">
                We're creating a unique marketing channel by providing free products to gaming cafes and parlors in
                Tier 3 & 4 cities. This gives us:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p className="text-sm">Direct access to aspiring gamers who can't afford consoles</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-secondary">2</span>
                  </div>
                  <p className="text-sm">Word-of-mouth marketing in underserved markets</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">3</span>
                  </div>
                  <p className="text-sm">Venue for organizing local tournaments and events</p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-background/50 backdrop-blur text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Target gaming cafes</p>
              </div>
              <div className="p-6 rounded-xl bg-background/50 backdrop-blur text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Local tournaments/month</p>
              </div>
              <div className="p-6 rounded-xl bg-background/50 backdrop-blur text-center">
                <div className="text-4xl font-bold text-accent mb-2">2M+</div>
                <p className="text-sm text-muted-foreground">Cafe visitors reached</p>
              </div>
              <div className="p-6 rounded-xl bg-background/50 backdrop-blur text-center">
                <div className="text-4xl font-bold text-primary mb-2">5x</div>
                <p className="text-sm text-muted-foreground">ROI on this channel</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MarketingStrategy;
