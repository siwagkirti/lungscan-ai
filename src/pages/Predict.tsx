import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Predict = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (PNG, JPEG, etc.)",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    
    // Simulate AI processing (replace with real API call)
    setTimeout(() => {
      const mockResults = [
        {
          class: "Lung Adenocarcinoma (LUAD)",
          confidence: 0.9234,
          description: "Malignant tumor originating in glandular cells",
        },
        {
          class: "Lung Squamous Cell Carcinoma (LUSC)",
          confidence: 0.9512,
          description: "Malignant tumor from squamous epithelial cells",
        },
        {
          class: "Lung Benign Tissue",
          confidence: 0.9876,
          description: "Healthy, non-cancerous lung tissue",
        },
        {
          class: "Colon Adenocarcinoma",
          confidence: 0.8943,
          description: "Malignant tumor in colon glandular tissue",
        },
      ];

      const selectedResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      
      setResult({
        prediction: selectedResult,
        gradcam: previewUrl, // In real implementation, this would be the Grad-CAM overlay
        shap: previewUrl, // In real implementation, this would be the SHAP visualization
      });
      
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `Classification: ${selectedResult.class}`,
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            Try the <span className="bg-gradient-primary bg-clip-text text-transparent">CCAL Model</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload a lung histopathology image to get instant classification with explainable AI visualizations
          </p>
        </div>

        {/* Upload Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Upload Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer bg-muted/20"
              onClick={() => fileInputRef.current?.click()}
            >
              {previewUrl ? (
                <div className="space-y-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-64 mx-auto rounded-lg shadow-card"
                  />
                  <p className="text-sm text-muted-foreground">{selectedFile?.name}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="w-16 h-16 mx-auto text-muted-foreground" />
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PNG, JPG, JPEG (max 10MB)
                    </p>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <Button
              onClick={handleAnalyze}
              disabled={!selectedFile || isAnalyzing}
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Image"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {result && (
          <div className="space-y-6 animate-fade-in">
            {/* Classification Result */}
            <Card className="shadow-glow border-primary/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Classification Result
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-gradient-hero rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {result.prediction.class}
                  </div>
                  <div className="text-lg text-muted-foreground mb-4">
                    {result.prediction.description}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">Confidence:</span>
                    <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-primary h-full rounded-full transition-all duration-1000"
                        style={{ width: `${result.prediction.confidence * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-primary">
                      {(result.prediction.confidence * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Note:</strong> This is a demonstration using mock predictions.
                    For real clinical use, integrate with trained CCAL model backend.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* XAI Visualizations */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Grad-CAM Heatmap</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={result.gradcam}
                    alt="Grad-CAM visualization"
                    className="w-full rounded-lg shadow-card"
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    Red regions indicate areas most influential for the classification decision.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">SHAP Explanation</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={result.shap}
                    alt="SHAP visualization"
                    className="w-full rounded-lg shadow-card"
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    Feature importance scores showing contribution to the prediction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
