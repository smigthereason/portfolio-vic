import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const contactPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 sm:px-6 lg:px-0">
      <Badge variant="secondary" className="gap-1.5 py-1 p-2">
        <Phone className="h-4 w-4" />
        Contact Us
      </Badge>

      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact Me!</Heading>

        <div className="h-auto w-full flex justify-center items-center">
          <FramerWrapper
            y={0}
            scale={0.8}
            className="w-full max-w-md md:max-w-lg"
          >
            <ContactForm />
          </FramerWrapper>
        </div>

        {/* Empty paragraph removed as it serves no purpose */}
      </div>
    </div>
  );
};

export default contactPage;
