import { Card } from "@/components/ui/card";
import { TrendingUp, Target, DollarSign, Calendar } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Financials = () => {
  const revenueProjection = [
    { year: "Year 1", revenue: 10, expenses: 12, profit: -2 },
    { year: "Year 2", revenue: 52, expenses: 38, profit: 14 },
    { year: "Year 3", revenue: 195, expenses: 95, profit: 100 },
  ];

  const milestones = [
    {
      icon: Calendar,
      title: "Month 6",
      milestone: "Break Even",
      description: "Positive cash flow achieved",
    },
    {
      icon: Target,
      title: "Month 18",
      milestone: "Profitability",
      description: "Sustained positive EBITDA",
    },
    {
      icon: TrendingUp,
      title: "Year 3",
      milestone: "₹195 Cr Revenue",
      description: "51% EBITDA margin",
    },
    {
      icon: DollarSign,
      title: "Year 5",
      milestone: "Exit Ready",
      description: "100M users, strategic acquisition",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Rapid Growth</span> Trajectory
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear path to profitability with exceptional margins
          </p>
        </div>

        {/* Revenue projection */}
        <Card className="p-8 bg-card/50 border-primary/20 mb-16">
          <h3 className="text-2xl font-bold mb-6">3-Year Financial Projection (₹ Crores)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueProjection}>
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
              <Bar dataKey="revenue" name="Revenue" fill="hsl(180 100% 50%)" />
              <Bar dataKey="expenses" name="Expenses" fill="hsl(270 100% 65%)" />
              <Bar dataKey="profit" name="Profit" fill="hsl(30 100% 55%)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Key financial metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
            <h3 className="text-xl font-bold mb-4">Year 1 Revenue</h3>
            <div className="text-5xl font-bold text-primary mb-2">₹10 Cr</div>
            <p className="text-muted-foreground">Foundation building phase</p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30">
            <h3 className="text-xl font-bold mb-4">Year 2 Revenue</h3>
            <div className="text-5xl font-bold text-secondary mb-2">₹52 Cr</div>
            <p className="text-muted-foreground">5.2x growth, break even achieved</p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30">
            <h3 className="text-xl font-bold mb-4">Year 3 Revenue</h3>
            <div className="text-5xl font-bold text-accent mb-2">₹195 Cr</div>
            <p className="text-muted-foreground">3.75x growth, 51% EBITDA margin</p>
          </Card>
        </div>

        {/* Milestones timeline */}
        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Milestones</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center relative">
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
                  <milestone.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">{milestone.title}</div>
                <div className="text-xl font-bold mb-2">{milestone.milestone}</div>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Use of funds */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Use of Funds</span> - ₹15 Crores
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 text-center">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p className="text-lg font-semibold mb-2">Marketing</p>
              <p className="text-sm text-muted-foreground">User acquisition & brand building</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">30%</div>
              <p className="text-lg font-semibold mb-2">Team Scaling</p>
              <p className="text-sm text-muted-foreground">Engineering, design & operations</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 text-center">
              <div className="text-4xl font-bold text-accent mb-2">25%</div>
              <p className="text-lg font-semibold mb-2">Manufacturing</p>
              <p className="text-sm text-muted-foreground">Large-scale hardware production</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10%</div>
              <p className="text-lg font-semibold mb-2">Product Dev</p>
              <p className="text-sm text-muted-foreground">R&D and new features</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financials;
