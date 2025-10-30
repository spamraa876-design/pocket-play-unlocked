import { Card } from "@/components/ui/card";
import { Users, TrendingUp, DollarSign, Star, Clock, Percent } from "lucide-react";
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

const TractionMetrics = () => {
  const userGrowthData = [
    { month: "Month 1", users: 1200 },
    { month: "Month 2", users: 4500 },
    { month: "Month 3", users: 10000 },
  ];

  const mrrGrowthData = [
    { month: "Month 1", mrr: 45 },
    { month: "Month 2", mrr: 118 },
    { month: "Month 3", mrr: 220 },
  ];

  const keyMetrics = [
    {
      icon: Users,
      label: "Beta Users",
      value: "10,000+",
      trend: "+35% MoM",
      color: "primary",
    },
    {
      icon: Clock,
      label: "Daily Engagement",
      value: "2.5 hours",
      trend: "Higher than social media",
      color: "secondary",
    },
    {
      icon: Percent,
      label: "Free-to-Paid Conversion",
      value: "18%",
      trend: "Above 15% benchmark",
      color: "accent",
    },
    {
      icon: DollarSign,
      label: "Monthly Revenue",
      value: "₹2.2L",
      trend: "+35% MoM",
      color: "primary",
    },
    {
      icon: Star,
      label: "Play Store Rating",
      value: "4.8/5",
      trend: "1,200+ reviews",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      label: "Churn Rate",
      value: "3.2%",
      trend: "Excellent retention",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Strong <span className="gradient-text">Product-Market Fit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our 3-month beta demonstrates exceptional user engagement and monetization potential
          </p>
        </div>

        {/* Key metrics grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br from-${metric.color}/20 to-${metric.color}/5 border-${metric.color}/30 hover:border-${metric.color} transition-all`}
            >
              <metric.icon className={`w-8 h-8 text-${metric.color} mb-3`} />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <p className={`text-xs font-semibold text-${metric.color}`}>{metric.trend}</p>
            </Card>
          ))}
        </div>

        {/* Growth charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-card/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">User Growth Trajectory</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 25%)" />
                <XAxis dataKey="month" stroke="hsl(0 0% 70%)" />
                <YAxis stroke="hsl(0 0% 70%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220 20% 14%)",
                    border: "1px solid hsl(180 100% 50%)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="users" name="Beta Users" fill="hsl(180 100% 50%)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-8 bg-card/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">MRR Growth (₹ Thousands)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mrrGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 25%)" />
                <XAxis dataKey="month" stroke="hsl(0 0% 70%)" />
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
                  dataKey="mrr"
                  name="Monthly Revenue"
                  stroke="hsl(270 100% 65%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(270 100% 65%)", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Press & validation */}
        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Media & Industry Recognition</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">TechCrunch Feature</div>
              <p className="text-muted-foreground">"Revolutionary approach to mobile gaming"</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20">
              <div className="text-3xl font-bold text-secondary mb-2">YourStory Coverage</div>
              <p className="text-muted-foreground">"Making gaming accessible to millions"</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TractionMetrics;
