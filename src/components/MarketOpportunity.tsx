import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Globe, Target } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MarketOpportunity = () => {
  const marketGrowthData = [
    { year: "2024", value: 2.8 },
    { year: "2025", value: 4.2 },
    { year: "2026", value: 6.1 },
    { year: "2027", value: 8.6 },
  ];

  const segmentData = [
    { name: "Target (16-35)", value: 125, color: "hsl(180 100% 50%)" },
    { name: "Secondary", value: 175, color: "hsl(270 100% 65%)" },
    { name: "Future", value: 150, color: "hsl(30 100% 55%)" },
  ];

  const regionalData = [
    { region: "India", gamers: 450 },
    { region: "SE Asia", gamers: 250 },
    { region: "Global", gamers: 3200 },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            A <span className="gradient-text">Massive</span> Market Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tapping into India's booming gaming market with clear global expansion potential
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
            <Users className="w-8 h-8 text-primary mb-3" />
            <div className="text-4xl font-bold mb-2">450M</div>
            <p className="text-muted-foreground">Indian Mobile Gamers</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30">
            <TrendingUp className="w-8 h-8 text-secondary mb-3" />
            <div className="text-4xl font-bold mb-2">$8.6B</div>
            <p className="text-muted-foreground">Market by 2027</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30">
            <Target className="w-8 h-8 text-accent mb-3" />
            <div className="text-4xl font-bold mb-2">125M</div>
            <p className="text-muted-foreground">Target Segment (16-35)</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
            <Globe className="w-8 h-8 text-primary mb-3" />
            <div className="text-4xl font-bold mb-2">₹3,750Cr</div>
            <p className="text-muted-foreground">Total Addressable Market</p>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Market Growth Trajectory</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 25%)" />
                <XAxis dataKey="year" stroke="hsl(0 0% 70%)" />
                <YAxis stroke="hsl(0 0% 70%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220 20% 14%)",
                    border: "1px solid hsl(180 100% 50%)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Market Size ($B)"
                  stroke="hsl(180 100% 50%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(180 100% 50%)", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-8 bg-card/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Market Segmentation</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}M`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220 20% 14%)",
                    border: "1px solid hsl(180 100% 50%)",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Regional expansion */}
        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
          <h3 className="text-2xl font-bold mb-6">Global Expansion Potential</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 25%)" />
              <XAxis dataKey="region" stroke="hsl(0 0% 70%)" />
              <YAxis stroke="hsl(0 0% 70%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220 20% 14%)",
                  border: "1px solid hsl(180 100% 50%)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="gamers" name="Gamers (Millions)" fill="hsl(180 100% 50%)" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-2xl font-bold text-primary mb-2">Phase 1</div>
              <p className="text-sm text-muted-foreground">India Launch (Current)</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <div className="text-2xl font-bold text-secondary mb-2">Phase 2</div>
              <p className="text-sm text-muted-foreground">Southeast Asia Expansion</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="text-2xl font-bold text-accent mb-2">Phase 3</div>
              <p className="text-sm text-muted-foreground">Global Scale (3.2B gamers)</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MarketOpportunity;
