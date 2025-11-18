import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <Zap className="w-4 h-4" />
              99.54% Accuracy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Advanced Lung Cancer
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Classification AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A Modified End-to-End CNN-Attention Framework (CCAL) with Explainable AI
              for accurate, interpretable lung cancer detection from histopathological images.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
                onClick={() => navigate("/predict")}
              >
                Try the Model <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Why Early Detection Matters
              </h2>
              <p className="text-lg text-muted-foreground">
                Lung cancer is one of the leading causes of cancer-related deaths worldwide.
                Early and accurate detection is critical for improving patient outcomes and survival rates.
              </p>
              <p className="text-lg text-muted-foreground">
                Traditional methods rely heavily on manual examination, which is time-consuming
                and prone to human error. Our AI-powered solution provides rapid, accurate classification
                with explainable insights.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card hover:shadow-glow transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">1.8M+</div>
                  <div className="text-sm text-muted-foreground">Annual lung cancer cases globally</div>
                </CardContent>
              </Card>
              <Card className="shadow-card hover:shadow-glow transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-secondary mb-2">5-Year</div>
                  <div className="text-sm text-muted-foreground">Survival rate improves with early detection</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Makes CCAL Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our hybrid CNN-Attention architecture delivers state-of-the-art performance
              with full interpretability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-glow transition-all hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Dual CNN Architecture
                </h3>
                <p className="text-muted-foreground">
                  Two parallel feature extractors capture complementary patterns for comprehensive analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Multi-Head Attention
                </h3>
                <p className="text-muted-foreground">
                  Advanced attention mechanism focuses on critical diagnostic features automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all hover:-translate-y-1 duration-300">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Explainable AI
                </h3>
                <p className="text-muted-foreground">
                  Grad-CAM and SHAP visualizations provide transparent, interpretable results for clinicians.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Highlight */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            99.54% Classification Accuracy
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Outperforming VGG16, ResNet50, InceptionV3, and EfficientNet on lung cancer histopathology
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
            onClick={() => navigate("/metrics")}
          >
            View Detailed Metrics
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-glow bg-gradient-primary">
            <CardContent className="pt-12 pb-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Try CCAL?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Upload a lung histopathology image and get instant classification with explainable AI visualizations
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/predict")}
              >
                Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
