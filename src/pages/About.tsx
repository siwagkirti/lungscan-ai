import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Layers, Focus, GitMerge, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            About the <span className="bg-gradient-primary bg-clip-text text-transparent">CCAL Model</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Modified End-to-End CNN-Attention Framework for Lung Cancer Classification
            with Explainable AI
          </p>
        </div>

        {/* Architecture Overview */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              Model Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              CCAL (CNN-CNN-Attention-Layers) is a hybrid deep learning architecture that combines
              the strengths of Convolutional Neural Networks with advanced Attention mechanisms
              for superior feature extraction and classification.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Parallel CNN Extractors</h3>
                    <p className="text-muted-foreground">
                      Two independent CNN branches extract complementary feature representations
                      from the input histopathology images.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Focus className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Multi-Head Attention</h3>
                    <p className="text-muted-foreground">
                      Attention layers dynamically focus on the most discriminative features,
                      improving model interpretability and accuracy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GitMerge className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Feature Concatenation</h3>
                    <p className="text-muted-foreground">
                      Outputs from both CNN branches and attention mechanism are concatenated
                      to form a rich, multi-perspective feature vector.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Dense Classification</h3>
                    <p className="text-muted-foreground">
                      Final dense layers with dropout regularization provide robust
                      multi-class classification with high confidence scores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Diagram */}
        <Card className="shadow-card bg-gradient-hero">
          <CardHeader>
            <CardTitle className="text-2xl">CCAL Architecture Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-card rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 flex-wrap justify-center text-sm md:text-base">
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                  Input Image (256×256)
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium">
                  CNN Branch 1
                </div>
                <div className="text-muted-foreground hidden md:block">↓</div>
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-center text-sm md:text-base">
                <div className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium">
                  CNN Branch 2
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium">
                  Multi-Head Attention
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                  Concatenation
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-center text-sm md:text-base">
                <div className="px-4 py-2 bg-gradient-primary text-white rounded-lg font-medium">
                  Dense Layers + Softmax
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="px-4 py-2 bg-gradient-secondary text-white rounded-lg font-medium">
                  Classification Output
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why CCAL */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl">Why CCAL Outperforms Traditional Models</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Traditional CNNs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Single feature extraction pathway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Limited interpretability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Black-box predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Lower accuracy on complex patterns</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-secondary">CCAL Framework</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Dual parallel feature extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Attention-guided focus on critical regions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Explainable AI with Grad-CAM & SHAP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>99.54% accuracy on lung cancer classification</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Explainability */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl">Explainable AI Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Unlike traditional black-box models, CCAL provides transparent, interpretable results
              through state-of-the-art explainability techniques:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Grad-CAM Heatmaps</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Gradient-weighted Class Activation Mapping visualizes which regions of the
                  histopathology image are most influential for the model's classification decision.
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">SHAP Values</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  SHapley Additive exPlanations provide feature importance scores, helping clinicians
                  understand the contribution of different image regions to the final prediction.
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
