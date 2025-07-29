"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 1,000 leads per month",
        "Basic lead scoring",
        "Email integration",
        "Standard support",
        "Basic reporting",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      description: "Ideal for growing sales teams",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 10,000 leads per month",
        "Advanced lead scoring",
        "CRM integrations",
        "Automated workflows",
        "Advanced analytics",
        "Priority support",
        "Custom fields",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Unlimited leads",
        "AI-powered insights",
        "Custom integrations",
        "Advanced automation",
        "White-label options",
        "Dedicated support",
        "Custom reporting",
        "SSO & security",
        "Training & onboarding",
      ],
      cta: "Book Demo",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include a 14-day free trial with no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-[#1e4d91]" />
            <span className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>Annual</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Save 20%
            </Badge>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
          {plans.map((plan, index) => (
            <motion.div key={plan.name} variants={fadeInUp}>
              <Card
                className={`h-full relative ${plan.popular ? "border-[#1e4d91] border-2 shadow-xl" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#1e4d91] text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-gray-500 mt-1">Billed annually (${plan.annualPrice * 12})</p>
                    )}
                  </div>

                  <Button
                    className={`w-full ${plan.popular ? "bg-[#1e4d91] hover:bg-[#1a4282]" : "bg-gray-900 hover:bg-gray-800"} group`}
                    onClick={() => {
                      if (plan.cta === "Book Demo") {
                        window.open("https://salescentri.com/get-started/book-demo", "_blank")
                      } else {
                        window.open("https://salescentri.com/get-started/free-trial", "_blank")
                      }
                    }}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer enterprise packages tailored to your specific requirements.
          </p>
          <Button
            variant="outline"
            className="border-[#1e4d91] text-[#1e4d91] hover:bg-[#1e4d91] hover:text-white bg-transparent"
            onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
          >
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
