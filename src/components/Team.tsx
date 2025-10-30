import { Card } from "@/components/ui/card";
import { Users, Briefcase, Award, Target } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Priya Sharma",
      role: "CEO & Co-Founder",
      background: "Ex-Product Manager at leading gaming company",
      expertise: "5+ years in gaming, launched 3 successful titles",
      image: "👩‍💼",
    },
    {
      name: "Rahul Verma",
      role: "CTO & Co-Founder",
      background: "Ex-Senior Engineer specializing in low-latency systems",
      expertise: "10+ years in real-time systems, 2 patents filed",
      image: "👨‍💻",
    },
    {
      name: "Anjali Patel",
      role: "CPO & Co-Founder",
      background: "Award-winning UX Lead from top design agency",
      expertise: "8+ years in product design, multiple design awards",
      image: "👩‍🎨",
    },
  ];

  const advisors = [
    {
      name: "David Chen",
      role: "Strategic Advisor",
      background: "Former VP at Electronic Arts (EA)",
      expertise: "Led mobile gaming division, $500M+ revenue",
    },
    {
      name: "Amit Kumar",
      role: "Hardware Advisor",
      background: "20+ years in hardware manufacturing",
      expertise: "3 successful exits, deep Asia manufacturing network",
    },
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            World-Class <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A perfect blend of gaming expertise, technical prowess, and design excellence
          </p>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Founding Team</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 border-primary/20 hover:border-primary transition-all hover:-translate-y-2"
              >
                <div className="text-6xl mb-4 text-center">{founder.image}</div>
                <h4 className="text-2xl font-bold mb-2 text-center">{founder.name}</h4>
                <p className="text-primary text-center mb-4">{founder.role}</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{founder.background}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{founder.expertise}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team strengths */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
            <h3 className="text-2xl font-bold mb-6 text-center">Combined Team Strengths</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">23+ years</div>
                <p className="text-sm text-muted-foreground">Gaming industry experience</p>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">5 launches</div>
                <p className="text-sm text-muted-foreground">Successful product launches</p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">2 patents</div>
                <p className="text-sm text-muted-foreground">Filed and pending</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">$500M+</div>
                <p className="text-sm text-muted-foreground">Combined revenue managed</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Advisors */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Strategic Advisors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 border-secondary/20 hover:border-secondary transition-all"
              >
                <h4 className="text-2xl font-bold mb-2">{advisor.name}</h4>
                <p className="text-secondary mb-4">{advisor.role}</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{advisor.background}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{advisor.expertise}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
