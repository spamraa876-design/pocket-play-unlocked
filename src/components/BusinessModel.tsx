import { Card } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Building2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const BusinessModel = () => {
  const revenueData = [
    { name: "Hardware Sales", value: 45, color: "hsl(180 100% 50%)" },
    { name: "Subscriptions", value: 40, color: "hsl(270 100% 65%)" },
    { name: "Ads", value: 10, color: "hsl(30 100% 55%)" },
    { name: "B2B", value: 5, color: "hsl(0 0% 70%)" },
  ];

  const streams = [
    {
      icon: DollarSign,
      title: "Hardware Sales",
      percentage: "45%",
      description: "Premium trigger grips",
      details: "68% profit margin on physical accessories",
      color: "primary",
    },
    {
      icon: Users,
      title: "Subscription Revenue",
      percentage: "40%",
      description: "PRO plan at ₹149/month",
      details: "8-player support, ad-free, premium features",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Ad Revenue",
      percentage: "10%",
      description: "Free tier monetization",
      details: "Highly engaged user base with 2.5hr daily usage",
      color: "accent",
    },
    {
      icon: Building2,
      title: "B2B Partnerships",
      percentage: "5%",
      description: "Gaming cafes & tournaments",
      details: "Bulk licenses and sponsorship opportunities",
      color: "muted",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Diversified</span> Revenue Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four complementary revenue streams designed for profitability and scale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Revenue breakdown chart */}
          <Card className="p-8 bg-card/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Revenue Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
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
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Revenue streams details */}
          <div className="space-y-6">
            {streams.map((stream, index) => (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-r from-${stream.color}/10 to-transparent border-${stream.color}/30 hover:border-${stream.color} transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-${stream.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <stream.icon className={`w-6 h-6 text-${stream.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{stream.title}</h3>
                      <span className={`text-2xl font-bold text-${stream.color}`}>{stream.percentage}</span>
                    </div>
                    <p className="text-foreground mb-2">{stream.description}</p>
                    <p className="text-sm text-muted-foreground">{stream.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Unit economics */}
        <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Exceptional Unit Economics</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">68%</div>
              <p className="text-muted-foreground">Hardware Margin</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">16.7x</div>
              <p className="text-muted-foreground">LTV/CAC Ratio</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">18%</div>
              <p className="text-muted-foreground">Free-to-Paid Conversion</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">51%</div>
              <p className="text-muted-foreground">EBITDA Margin (Y3)</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BusinessModel;
