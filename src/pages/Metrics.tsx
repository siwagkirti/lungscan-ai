import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Award } from "lucide-react";

const Metrics = () => {
  const comparisonData = [
    { model: "CCAL (Ours)", accuracy: 99.54, precision: 99.52, recall: 99.51, f1: 99.51 },
    { model: "VGG16", accuracy: 96.33, precision: 96.12, recall: 96.08, f1: 96.10 },
    { model: "ResNet50", accuracy: 97.02, precision: 96.89, recall: 96.85, f1: 96.87 },
    { model: "InceptionV3", accuracy: 97.50, precision: 97.42, recall: 97.38, f1: 97.40 },
    { model: "EfficientNet", accuracy: 98.12, precision: 98.05, recall: 98.01, f1: 98.03 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            Performance <span className="bg-gradient-primary bg-clip-text text-transparent">Metrics</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CCAL achieves state-of-the-art results on lung cancer histopathology classification
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="shadow-glow border-primary/50">
            <CardContent className="pt-6 text-center">
              <Target className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-4xl font-bold text-primary mb-1">99.54%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <Award className="w-10 h-10 mx-auto mb-3 text-secondary" />
              <div className="text-4xl font-bold text-secondary mb-1">99.52%</div>
              <div className="text-sm text-muted-foreground">Precision</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-accent" />
              <div className="text-4xl font-bold text-accent mb-1">99.51%</div>
              <div className="text-sm text-muted-foreground">Recall</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-4xl font-bold text-primary mb-1">99.51%</div>
              <div className="text-sm text-muted-foreground">F1-Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Model Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold text-foreground">Model</th>
                    <th className="text-right py-3 px-4 font-bold text-foreground">Accuracy</th>
                    <th className="text-right py-3 px-4 font-bold text-foreground">Precision</th>
                    <th className="text-right py-3 px-4 font-bold text-foreground">Recall</th>
                    <th className="text-right py-3 px-4 font-bold text-foreground">F1-Score</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border ${
                        idx === 0 ? "bg-primary/5 font-bold" : ""
                      }`}
                    >
                      <td className="py-3 px-4 text-foreground">{row.model}</td>
                      <td className="py-3 px-4 text-right text-foreground">{row.accuracy}%</td>
                      <td className="py-3 px-4 text-right text-foreground">{row.precision}%</td>
                      <td className="py-3 px-4 text-right text-foreground">{row.recall}%</td>
                      <td className="py-3 px-4 text-right text-foreground">{row.f1}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Confusion Matrix & ROC Placeholder */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Confusion Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-hero rounded-lg flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="w-16 h-16 mx-auto mb-2" />
                  <p>Confusion Matrix Visualization</p>
                  <p className="text-sm">(Integrate with model output)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">ROC-AUC Curve</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-hero rounded-lg flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <Target className="w-16 h-16 mx-auto mb-2" />
                  <p>ROC Curve Visualization</p>
                  <p className="text-sm">(AUC: 0.998)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Per-Class Performance */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Per-Class Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Lung Adenocarcinoma (LUAD)", accuracy: 99.6 },
              { name: "Lung Squamous Cell Carcinoma (LUSC)", accuracy: 99.5 },
              { name: "Lung Benign Tissue", accuracy: 99.8 },
              { name: "Colon Adenocarcinoma", accuracy: 99.3 },
            ].map((cls, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{cls.name}</span>
                  <span className="text-primary font-bold">{cls.accuracy}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-primary h-full rounded-full transition-all duration-1000"
                    style={{ width: `${cls.accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Metrics;
