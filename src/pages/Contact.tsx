import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, Award, BookOpen } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            Contact & <span className="bg-gradient-primary bg-clip-text text-transparent">Credits</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Research, development, and implementation
          </p>
        </div>

        {/* Author Card */}
        <Card className="shadow-glow bg-gradient-hero">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <User className="w-8 h-8 text-primary" />
              Researcher & Developer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-foreground">Kirtika Siwag</h2>
              <p className="text-lg text-muted-foreground">
                AI Researcher & Deep Learning Engineer
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:kirtika@example.com" className="hover:text-primary transition-colors">
                kirtika@example.com
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Research Credits */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-secondary" />
              Research Paper
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 bg-muted/30 rounded-lg space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                A Modified End-to-End CNN-Attention Framework (CCAL) for Lung Cancer
                Classification with Explainable AI
              </h3>
              <p className="text-muted-foreground">
                This research introduces a novel hybrid deep learning architecture combining
                dual CNN feature extractors with multi-head attention mechanisms for superior
                lung cancer classification accuracy and interpretability.
              </p>
              <div className="pt-2">
                <span className="text-sm font-medium text-foreground">Author:</span>
                <span className="text-sm text-muted-foreground ml-2">Kirtika Siwag</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dataset Credits */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Dataset Attribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-foreground">
                LC25000 - Lung and Colon Cancer Histopathological Images
              </h3>
              <p className="text-muted-foreground">
                The dataset used for training and validation is sourced from the Kaggle repository,
                containing 25,000 histopathological images across four classes.
              </p>
              <a
                href="https://www.kaggle.com/datasets/andrewmvd/lung-and-colon-cancer-histopathological-images"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-primary-light transition-colors font-medium"
              >
                View Dataset on Kaggle →
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "TensorFlow / PyTorch",
                "OpenCV",
                "NumPy & Pandas",
                "Grad-CAM",
                "SHAP",
                "React & TypeScript",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 bg-gradient-hero border border-border rounded-lg text-center font-medium text-foreground"
                >
                  {tech}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="shadow-card border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-foreground">Disclaimer:</strong> This model is intended for
              research and educational purposes. Clinical decisions should not be made solely based
              on AI predictions without professional medical consultation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
