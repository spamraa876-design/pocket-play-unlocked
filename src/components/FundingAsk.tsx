import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Target, TrendingUp, Award } from "lucide-react";

const FundingAsk = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Main ask */}
          <Card className="p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-primary glow-primary mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="font-semibold">Series A Funding Round</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Raising <span className="gradient-text">₹15 Crores</span>
              </h2>
              <p className="text-2xl mb-4">for 15% equity</p>
              <p className="text-xl text-muted-foreground">
                Pre-money valuation: ₹85 Crores | Post-money: ₹100 Crores
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">5x - 10x</div>
                <p className="text-muted-foreground">Expected return in 3-5 years</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-background/50 backdrop-blur">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">100M+</div>
                <p className="text-muted-foreground">Users by Year 5</p>
              </div>
            </div>
          </Card>

          {/* Why invest */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              Why <span className="gradient-text">Invest Now</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 border-primary/20">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-3">Massive Market</h4>
                <p className="text-muted-foreground">
                  Targeting 450M Indian gamers in a ₹3,750 Cr TAM with clear path to global expansion (3.2B gamers worldwide)
                </p>
              </Card>
              <Card className="p-6 bg-card/50 border-secondary/20">
                <TrendingUp className="w-10 h-10 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-3">Proven Traction</h4>
                <p className="text-muted-foreground">
                  10K+ beta users, ₹2.2L MRR growing 35% monthly, 18% conversion rate, and strong media validation
                </p>
              </Card>
              <Card className="p-6 bg-card/50 border-accent/20">
                <Award className="w-10 h-10 text-accent mb-4" />
                <h4 className="text-xl font-bold mb-3">Strong Economics</h4>
                <p className="text-muted-foreground">
                  68% hardware margins, 16.7x LTV/CAC ratio, and clear path to 51% EBITDA margin by Year 3
                </p>
              </Card>
              <Card className="p-6 bg-card/50 border-primary/20">
                <Rocket className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-3">Strategic Exit</h4>
                <p className="text-muted-foreground">
                  Built for acquisition by gaming giants (Sony, Microsoft, Meta) or major tech platforms seeking gaming exposure
                </p>
              </Card>
            </div>
          </div>

          {/* Investment terms */}
          <Card className="p-8 bg-card/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Investment Terms</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Series A</div>
                <p className="text-muted-foreground">Funding Stage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">18 months</div>
                <p className="text-muted-foreground">Runway to profitability</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Q2 2025</div>
                <p className="text-muted-foreground">Expected close date</p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="px-12">
              Schedule Investor Meeting
            </Button>
            <p className="text-muted-foreground mt-4">
              Contact: founders@pocketjoystick.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingAsk;
