import { Button } from "@/components/ui/button";
import { ChevronDown, Gamepad2, Smartphone, Zap } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-float mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Revolutionizing Gaming Access</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Turn Your Phone Into a
          <span className="gradient-text block mt-2">Pro Game Controller</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Making console-grade gaming accessible to India's 450 million gamers at 1/10th the cost
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" onClick={scrollToNext}>
            Explore the Solution
          </Button>
          <Button variant="heroOutline" size="lg">
            Watch Demo
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-primary/20">
            <Smartphone className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Universal Compatibility</h3>
            <p className="text-sm text-muted-foreground">Works with any PC game</p>
          </div>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-primary/20">
            <Gamepad2 className="w-8 h-8 text-secondary mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">8-Player Support</h3>
            <p className="text-sm text-muted-foreground">True local multiplayer</p>
          </div>
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-primary/20">
            <Zap className="w-8 h-8 text-accent mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">Auto-configures controls</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="mt-16 animate-bounce hover:scale-110 transition-transform"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
