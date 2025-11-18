import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, Image as ImageIcon } from "lucide-react";

const Dataset = () => {
  const datasetClasses = [
    {
      name: "Lung Adenocarcinoma (LUAD)",
      count: "5,000 images",
      description: "Malignant tumor originating from glandular cells in the lung",
    },
    {
      name: "Lung Squamous Cell Carcinoma (LUSC)",
      count: "5,000 images",
      description: "Malignant tumor arising from squamous epithelial cells",
    },
    {
      name: "Lung Benign Tissue",
      count: "5,000 images",
      description: "Healthy, non-cancerous lung tissue samples",
    },
    {
      name: "Colon Adenocarcinoma",
      count: "5,000 images",
      description: "Malignant tumor from colon glandular tissue (for comparison)",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Dataset</span> Overview
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lung and Colon Cancer Histopathological Images - High-quality medical imagery
            for training and validation
          </p>
        </div>

        {/* Dataset Info */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              Dataset Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-hero rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
                <div className="text-muted-foreground">Total Images</div>
              </div>
              <div className="text-center p-6 bg-gradient-hero rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">4</div>
                <div className="text-muted-foreground">Classification Classes</div>
              </div>
              <div className="text-center p-6 bg-gradient-hero rounded-lg">
                <div className="text-4xl font-bold text-accent mb-2">768×768</div>
                <div className="text-muted-foreground">Image Resolution</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Source</h3>
              <p className="text-muted-foreground">
                The dataset consists of histopathological images from the LC25000 collection,
                available on Kaggle. It includes augmented samples to ensure robust model training
                and generalization.
              </p>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open("https://www.kaggle.com/datasets/andrewmvd/lung-and-colon-cancer-histopathological-images", "_blank")}
              >
                View on Kaggle <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Classes */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-center">
            Classification Classes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {datasetClasses.map((cls, idx) => (
              <Card key={idx} className="shadow-card hover:shadow-glow transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    {cls.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block">
                    {cls.count}
                  </div>
                  <p className="text-muted-foreground">{cls.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample Images Placeholder */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Sample Images</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-hero rounded-lg flex items-center justify-center border border-border"
                >
                  <ImageIcon className="w-12 h-12 text-muted-foreground" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Sample histopathological images from each class (demonstration placeholders)
            </p>
          </CardContent>
        </Card>

        {/* Preprocessing */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Data Preprocessing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-primary font-bold">1</span>
                </div>
                <div>
                  <strong className="text-foreground">Resizing:</strong>
                  <span className="text-muted-foreground"> Images standardized to 256×256 pixels for model input</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-secondary font-bold">2</span>
                </div>
                <div>
                  <strong className="text-foreground">Normalization:</strong>
                  <span className="text-muted-foreground"> Pixel values scaled to [0, 1] range</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-accent font-bold">3</span>
                </div>
                <div>
                  <strong className="text-foreground">Augmentation:</strong>
                  <span className="text-muted-foreground"> Rotation, flipping, and color jittering for robustness</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-primary font-bold">4</span>
                </div>
                <div>
                  <strong className="text-foreground">Train/Val/Test Split:</strong>
                  <span className="text-muted-foreground"> 70% training, 15% validation, 15% testing</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dataset;
