import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <Card className="w-full max-w-md border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-xl">
        <form
          action={async (FormData) => {
            "use server";
            await SendEmail(FormData);
          }}
        >
          <CardHeader>
            <CardTitle className="icon_underline text-white">
              Send me a mail.
            </CardTitle>
            <CardDescription className="text-white/60">
              Once form is submit you will be redirect to home page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="name" className="text-white/80">
                Name
              </Label>
              <Input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="email" className="text-white/80">
                Email
              </Label>
              <Input
                type="email"
                name="SenderEmail"
                required
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-white/30"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="message" className="text-white/80">
                Your Message
              </Label>
              <textarea
                placeholder="Your message here..."
                name="message"
                required
                className="resize-none flex min-h-[80px] w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 ring-offset-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-white/20 hover:bg-[#2f7df4] text-white border border-white/25 backdrop-blur-sm"
            >
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
export default ContactForm;
