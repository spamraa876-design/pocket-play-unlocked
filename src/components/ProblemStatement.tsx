import { AlertCircle, Lock, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProblemStatement = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "High Cost of Entry",
      description: "Console gaming costs over ₹75,000 on average",
      stat: "450M gamers",
      detail: "priced out of premium gaming",
      color: "text-destructive",
    },
    {
      icon: Lock,
      title: "Platform Lock-In",
      description: "Trapped in closed ecosystems",
      stat: "0 compatibility",
      detail: "with existing PC game libraries",
      color: "text-accent",
    },
    {
      icon: Settings,
      title: "Complex Setup",
      description: "Local multiplayer requires 30+ minutes of configuration",
      stat: "30+ minutes",
      detail: "just to set up multiplayer",
      color: "text-secondary",
    },
  ];

  return (
    <section id="problem" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="gradient-text">Problem</span> We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gaming in India is broken. The barriers to entry are too high, and the experience is too fragmented.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-b from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <problem.icon className={`w-12 h-12 ${problem.color} mb-6`} />
              <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground mb-6">{problem.description}</p>
              <div className="pt-6 border-t border-border">
                <div className={`text-3xl font-bold ${problem.color} mb-2`}>{problem.stat}</div>
                <div className="text-sm text-muted-foreground">{problem.detail}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Impact visualization */}
        <div className="mt-16 p-8 rounded-2xl bg-destructive/10 border border-destructive/30 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">The Gap is Massive</h3>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <div className="text-5xl font-bold text-destructive mb-2">₹75,000+</div>
                <p className="text-muted-foreground">Average console setup cost</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-destructive mb-2">95%</div>
                <p className="text-muted-foreground">Of gamers can't afford it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
