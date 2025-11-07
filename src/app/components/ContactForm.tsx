"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message. We will be in touch shortly.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="w-full bg-tertiary py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-light tracking-wider text-primary sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-quaternary/70 font-light tracking-wide">
            We look forward to hearing from you
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-light tracking-wide text-quaternary mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full rounded-none border border-secondary/30 bg-white px-4 py-3 text-primary placeholder:text-quaternary/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                placeholder="John"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-light tracking-wide text-quaternary mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full rounded-none border border-secondary/30 bg-white px-4 py-3 text-primary placeholder:text-quaternary/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-light tracking-wide text-quaternary mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-none border border-secondary/30 bg-white px-4 py-3 text-primary placeholder:text-quaternary/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-light tracking-wide text-quaternary mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-none border border-secondary/30 bg-white px-4 py-3 text-primary placeholder:text-quaternary/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-light tracking-wide text-quaternary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-none border border-secondary/30 bg-white px-4 py-3 text-primary placeholder:text-quaternary/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          {submitStatus.type && (
            <div
              className={`p-4 text-center font-light tracking-wide ${
                submitStatus.type === "success"
                  ? "bg-secondary/10 text-secondary"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary px-12 py-4 text-tertiary font-light tracking-wider transition-all hover:bg-quaternary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
