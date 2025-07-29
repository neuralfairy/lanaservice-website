"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, BarChart3, Target, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingSection from "@/components/pricing-section"
import ROICalculator from "@/components/roi-calculator"
import ExitIntentPopup from "@/components/exit-intent-popup"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const [counters, setCounters] = useState({ leads: 0, conversion: 0, revenue: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({ leads: 2500, conversion: 85, revenue: 150000 })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#1e4d91]" />,
      title: "Increase Lead Quality",
      description: "Advanced scoring algorithms identify your most promising prospects automatically.",
      metric: "+85% conversion rate",
    },
    {
      icon: <Users className="h-8 w-8 text-[#1e4d91]" />,
      title: "Pipeline Visibility",
      description: "Real-time dashboard shows exactly where every lead stands in your sales process.",
      metric: "100% transparency",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#1e4d91]" />,
      title: "Sales Automation",
      description: "Automate follow-ups, nurture sequences, and lead routing to maximize efficiency.",
      metric: "Save 20+ hours/week",
    },
  ]

  const features = [
    { name: "Lead Scoring", description: "AI-powered lead qualification", icon: <Target className="h-5 w-5" /> },
    {
      name: "Pipeline Management",
      description: "Visual sales pipeline tracking",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    { name: "Automated Workflows", description: "Smart automation sequences", icon: <Zap className="h-5 w-5" /> },
    {
      name: "Real-time Analytics",
      description: "Live performance dashboards",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    { name: "CRM Integration", description: "Seamless third-party connections", icon: <Shield className="h-5 w-5" /> },
    { name: "24/7 Support", description: "Expert assistance when you need it", icon: <Clock className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ExitIntentPopup />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e4d91] via-[#2563eb] to-[#1e40af] text-white">
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                🚀 Trusted by 500+ Sales Teams
              </Badge>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" variants={fadeInUp}>
              Streamline Your Leads.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Score More Sales.
              </span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto" variants={fadeInUp}>
              Transform your lead management with iLMS - the intelligent CRM platform that turns prospects into profits
              with AI-powered automation.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-white text-[#1e4d91] hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
                onClick={() => window.open("https://salescentri.com/get-started/free-trial", "_blank")}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e4d91] px-8 py-4 text-lg font-semibold bg-transparent"
                onClick={() => window.open("https://salescentri.com/pricing", "_blank")}
              >
                Get Pricing
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex justify-center items-center gap-8 text-sm text-blue-200"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                14-Day Free Trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Setup in 5 Minutes
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-[#1e4d91] mb-2">
                {counters.leads.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Leads Processed</div>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-[#1e4d91] mb-2">{counters.conversion}%</div>
              <div className="text-gray-600 font-medium">Conversion Rate</div>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="text-4xl md:text-5xl font-bold text-[#1e4d91] mb-2">
                ${counters.revenue.toLocaleString()}K+
              </div>
              <div className="text-gray-600 font-medium">Revenue Generated</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Sales Teams Choose iLMS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent lead management system transforms how you capture, qualify, and convert prospects into
              customers.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="mb-6">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 mb-6">{benefit.description}</p>
                    <Badge variant="secondary" className="bg-blue-50 text-[#1e4d91] font-semibold">
                      {benefit.metric}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Ribbon */}
      <section className="py-12 bg-gradient-to-r from-[#1e4d91] to-[#2563eb] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Sales Process?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Calculate your potential ROI and see how much revenue you could generate.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1e4d91] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() =>
                window.open("https://salescentri.com/solutions/use-case-navigator/recommendations/features", "_blank")
              }
            >
              Calculate ROI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Sales Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage leads, automate workflows, and close more deals.
            </p>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <Tabs defaultValue="scoring" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="scoring" className="text-lg py-3">
                  Lead Scoring
                </TabsTrigger>
                <TabsTrigger value="pipeline" className="text-lg py-3">
                  Pipeline Visibility
                </TabsTrigger>
                <TabsTrigger value="automation" className="text-lg py-3">
                  Sales Automation
                </TabsTrigger>
              </TabsList>

              <TabsContent value="scoring" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Lead Scoring</h3>
                    <p className="text-gray-600 mb-6">
                      Our intelligent algorithms analyze lead behavior, demographics, and engagement patterns to
                      automatically score and prioritize your prospects.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Behavioral scoring based on website activity</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Demographic and firmographic analysis</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Real-time score updates and alerts</span>
                      </li>
                    </ul>
                    <Button
                      className="bg-[#1e4d91] hover:bg-[#1a4282]"
                      onClick={() =>
                        window.open(
                          "https://salescentri.com/platforms/lead-management/automated-cloud-dialer",
                          "_blank",
                        )
                      }
                    >
                      Learn More About Automated Workflow
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Lead Scoring Dashboard</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                          <span className="font-medium">John Smith - Acme Corp</span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Score: 95
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                          <span className="font-medium">Sarah Johnson - Tech Inc</span>
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Score: 72
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                          <span className="font-medium">Mike Davis - StartupXYZ</span>
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                            Score: 34
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pipeline" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Pipeline Visibility</h3>
                    <p className="text-gray-600 mb-6">
                      Get a bird's-eye view of your entire sales pipeline with real-time updates, stage progression
                      tracking, and performance analytics.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Visual pipeline management</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Stage-by-stage conversion tracking</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Bottleneck identification and alerts</span>
                      </li>
                    </ul>
                    <Button
                      className="bg-[#1e4d91] hover:bg-[#1a4282]"
                      onClick={() =>
                        window.open("https://salescentri.com/platforms/lead-management/voice-ai-agent", "_blank")
                      }
                    >
                      Explore AI Agent Features
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Sales Pipeline Overview</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Prospects</span>
                          <span className="text-sm font-bold">124 leads</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Qualified</span>
                          <span className="text-sm font-bold">89 leads</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">Proposal</span>
                          <span className="text-sm font-bold">34 leads</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automation" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Sales Automation</h3>
                    <p className="text-gray-600 mb-6">
                      Automate repetitive tasks, nurture leads with personalized sequences, and ensure no opportunity
                      falls through the cracks.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Automated follow-up sequences</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Smart lead routing and assignment</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Personalized email and SMS campaigns</span>
                      </li>
                    </ul>
                    <Button
                      className="bg-[#1e4d91] hover:bg-[#1a4282]"
                      onClick={() =>
                        window.open("https://salescentri.com/solutions/psa-suite/integrations/pricing", "_blank")
                      }
                    >
                      View CRM Integrations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Active Automations</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Welcome Email Sequence</span>
                            <span className="text-green-600 text-sm font-semibold">Active</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Sent to 45 new leads this week</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Follow-up Reminders</span>
                            <span className="text-blue-600 text-sm font-semibold">Active</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">12 reminders scheduled today</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-purple-500">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Lead Scoring Updates</span>
                            <span className="text-purple-600 text-sm font-semibold">Active</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Real-time scoring for 234 leads</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Pricing Section */}
      <PricingSection />

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and features designed to streamline your sales process from lead capture to deal
              closure.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-50 rounded-lg text-[#1e4d91]">{feature.icon}</div>
                      <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e4d91] via-[#2563eb] to-[#1e40af] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sales Results?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of sales teams who have already increased their conversion rates by 85% with iLMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#1e4d91] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
              >
                Book Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e4d91] px-8 py-4 text-lg font-semibold bg-transparent"
                onClick={() => window.open("https://salescentri.com/get-started/free-trial", "_blank")}
              >
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
