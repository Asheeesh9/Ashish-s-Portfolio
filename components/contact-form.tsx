"use client"

import type React from "react"
import emailjs from '@emailjs/browser';
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const serviceId = "service_6plqu5x";  
      const templateId = "template_1y4z6ci";  
      const publicKey = "at0sEHsjTHfD4cmwO"; 
      const templateIdtoUser = "template_52zzdk7";
  
      const templateParams1 = {
        name: formData.name,
        email: formData.email, 
        title: formData.subject,
        message: formData.message
      };
      const templateParams2 = {
        name: formData.name,
        email: formData.email, 
        title: formData.subject,
      };
  
      const response1 = await emailjs.send(serviceId, templateId, templateParams1, publicKey);
      const response2 = await emailjs.send(serviceId, templateIdtoUser, templateParams2, publicKey);
  
      console.log("Email sent successfully. Response:", response1);
      console.log("Email sent successfully. Response:", response2);
  
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "", 
      });
  
      setSubmitStatus("success");
  
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
  
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <Card>
      <CardContent className="p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                className="flex items-center gap-2 p-3 rounded-md bg-green-50 text-green-700 border border-green-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <CheckCircle className="h-5 w-5" />
                <p>Your message has been sent successfully!</p>
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                className="flex items-center gap-2 p-3 rounded-md bg-red-50 text-red-700 border border-red-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <AlertCircle className="h-5 w-5" />
                <p>There was an error sending your message. Please try again.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border ${errors.name ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                placeholder="John Doe"
              />
              {errors.name && (
                <motion.p className="text-sm text-red-500" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  {errors.name}
                </motion.p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border ${errors.email ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                placeholder="hello@example.com"
              />
              {errors.email && (
                <motion.p className="text-sm text-red-500" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  {errors.email}
                </motion.p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`flex h-10 w-full rounded-md border ${errors.subject ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              placeholder="Project Inquiry"
            />
            {errors.subject && (
              <motion.p className="text-sm text-red-500" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                {errors.subject}
              </motion.p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`flex min-h-[120px] w-full rounded-md border ${errors.message ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <motion.p className="text-sm text-red-500" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                {errors.message}
              </motion.p>
            )}
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  )
}
