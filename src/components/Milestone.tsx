import { Card, CardContent } from "@/components/ui/card";
import { Award, Sparkles } from "lucide-react";
import milestoneImage from "@/assets/barista-milestone-100.jpeg.asset.json";

const Milestone = () => {
  return (
    <section id="milestone" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Celebrating Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            A Proud <span className="text-primary">Milestone!</span>
          </h2>
        </div>

        <Card className="overflow-hidden border-border/50 hover:shadow-strong transition-all duration-500 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden min-h-[400px] lg:min-h-[500px]">
              <img
                src={milestoneImage.url}
                alt="Ceylani Global celebrates completing the 100th Barista outlet"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-background">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                Successfully Completed the 100th Barista Outlet
              </h3>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We are delighted to have successfully completed the 100th Barista outlet — our Second Barista construction project.
                </p>
                <p>
                  A special achievement and a memorable milestone for Ceylani Global Pvt Ltd.
                </p>
                <p className="font-semibold text-foreground">
                  From vision to reality — successfully delivered.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">100</div>
                  <div className="text-muted-foreground">
                    <div className="font-semibold text-foreground">Barista Outlets</div>
                    <div>Built & Counting</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Milestone;
