"use client"

import { motion } from "framer-motion"
import { Search, MessageCircle, Book } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is iLMS and how does it work?",
          answer:
            "iLMS (intelligent Lead Management System) is a comprehensive CRM platform that uses AI-powered algorithms to score, track, and manage your leads. It integrates with your existing tools to provide real-time insights and automate your sales processes, helping you convert more prospects into customers.",
        },
        {
          question: "How quickly can I get started with iLMS?",
          answer:
            "You can be up and running in less than 5 minutes! Our setup process is designed to be simple and intuitive. Just sign up for your free trial, connect your existing tools, and our system will automatically start analyzing your leads. Our onboarding team is also available to help you get the most out of the platform.",
        },
        {
          question: "Do I need technical expertise to use iLMS?",
          answer:
            "Not at all! iLMS is designed for sales teams, not technical teams. Our intuitive interface makes it easy for anyone to use, regardless of technical background. We also provide comprehensive training materials and support to ensure your success.",
        },
      ],
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "How does the AI-powered lead scoring work?",
          answer:
            "Our AI analyzes multiple data points including lead behavior, demographics, engagement patterns, and historical conversion data to assign each lead a score from 1-100. The system continuously learns from your sales outcomes to improve accuracy over time, helping you focus on the most promising prospects.",
        },
        {
          question: "What integrations are available?",
          answer:
            "iLMS integrates with over 50+ popular tools including Salesforce, HubSpot, Pipedrive, Mailchimp, Zapier, and many more. We also offer API access for custom integrations. Our integration library is constantly growing based on customer requests.",
        },
        {
          question: "Can I customize the lead scoring criteria?",
          answer:
            "Yes! While our AI provides intelligent default scoring, you can customize the criteria based on your specific business needs. You can adjust weights for different factors, add custom fields, and set up industry-specific scoring models.",
        },
        {
          question: "How does the automated workflow feature work?",
          answer:
            "Our workflow automation allows you to create custom sequences based on lead behavior and scores. You can automatically send personalized emails, assign leads to team members, schedule follow-ups, and trigger actions across your integrated tools - all without manual intervention.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "Is there a free trial available?",
          answer:
            "Yes! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you can upgrade to a paid plan at any time during or after the trial period.",
        },
        {
          question: "What's included in each pricing plan?",
          answer:
            "Our Starter plan ($49/month) includes basic lead scoring and up to 1,000 leads. The Pro plan ($99/month) adds advanced features and supports up to 10,000 leads. Enterprise ($199/month) offers unlimited leads, custom integrations, and dedicated support. All plans include mobile access and standard integrations.",
        },
        {
          question: "Can I change plans or cancel anytime?",
          answer:
            "You can upgrade, downgrade, or cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll retain access to your account until the end of your current billing period.",
        },
        {
          question: "Do you offer discounts for annual billing?",
          answer:
            "Yes! You save 20% when you choose annual billing. For example, the Pro plan costs $79/month when billed annually instead of $99/month when billed monthly.",
        },
      ],
    },
    {
      category: "Security & Support",
      questions: [
        {
          question: "How secure is my data?",
          answer:
            "Security is our top priority. We use enterprise-grade encryption, secure data centers, and comply with SOC 2 Type II standards. Your data is backed up regularly and we never share it with third parties. We also offer SSO and advanced security features for Enterprise customers.",
        },
        {
          question: "What kind of support do you provide?",
          answer:
            "We offer multiple support channels including email, live chat, and phone support. Starter plan customers receive standard support, Pro customers get priority support, and Enterprise customers have access to dedicated account managers and 24/7 support.",
        },
        {
          question: "Do you provide training and onboarding?",
          answer:
            "Yes! All customers receive access to our comprehensive knowledge base, video tutorials, and webinar training sessions. Pro and Enterprise customers also get personalized onboarding sessions with our customer success team.",
        },
      ],
    },
  ]

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1e4d91] via-[#2563eb] to-[#1e40af] text-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial="initial" animate="animate" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Find answers to common questions about iLMS and how it can transform your lead management process.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <motion.div
                className="space-y-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {filteredFAQs.map((category, categoryIndex) => (
                  <motion.div key={categoryIndex} variants={fadeInUp}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-[#1e4d91]">
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#1e4d91] py-6">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <p className="text-xl text-gray-600 mb-6">
                  No results found for "{searchTerm}". Try a different search term or browse our categories above.
                </p>
                <Button
                  onClick={() => setSearchTerm("")}
                  variant="outline"
                  className="border-[#1e4d91] text-[#1e4d91] hover:bg-[#1e4d91] hover:text-white"
                >
                  Clear Search
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-12">Our support team is here to help you succeed with iLMS.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1e4d91] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h3>
                  <p className="text-gray-600 mb-6">Get instant answers from our support team during business hours.</p>
                  <Button
                    className="bg-[#1e4d91] hover:bg-[#1a4282]"
                    onClick={() =>
                      window.open("https://salescentri.com/contact/support-request/submit-ticket", "_blank")
                    }
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1e4d91] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Knowledge Base</h3>
                  <p className="text-gray-600 mb-6">Browse our comprehensive guides and tutorials.</p>
                  <Button
                    variant="outline"
                    className="border-[#1e4d91] text-[#1e4d91] hover:bg-[#1e4d91] hover:text-white bg-transparent"
                  >
                    Browse Guides
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1e4d91] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule Demo</h3>
                  <p className="text-gray-600 mb-6">Book a personalized demo with our product experts.</p>
                  <Button
                    className="bg-[#1e4d91] hover:bg-[#1a4282]"
                    onClick={() => window.open("https://salescentri.com/get-started/calendly/", "_blank")}
                  >
                    Book Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
