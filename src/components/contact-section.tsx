"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Send, Globe } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Since this is a demo, we'll just simulate success
      console.log("Form submitted:", formState);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <Separator className="my-4 w-16 mx-auto" />
          <p className="text-muted-foreground max-w-[600px]">
            Feel free to reach out for job opportunities, collaborations, or any
            questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Here are the ways you can reach me directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:rzafh79@gmail.com"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    rzafh79@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href="tel:+447351036696"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    +447351036696
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Website</p>
                  <a
                    href="https://rfhosseini.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    rfhosseini.me
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                    className="min-h-[120px]"
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                {isSuccess && (
                  <div className="bg-green-500/10 text-green-500 p-3 rounded-md text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}

                {isError && (
                  <div className="bg-red-500/10 text-red-500 p-3 rounded-md text-sm">
                    There was an error sending your message. Please try again
                    later.
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
