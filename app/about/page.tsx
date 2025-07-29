"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, TrendingUp, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

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

export default function AboutPage() {
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Lanaservice Solutions was established in Tucson, AZ with a vision to revolutionize lead management.",
    },
    {
      year: "2021",
      title: "iLMS Platform Launch",
      description: "Launched our flagship intelligent Lead Management System with AI-powered scoring capabilities.",
    },
    {
      year: "2022",
      title: "Major Growth",
      description: "Reached 100+ enterprise clients and expanded our team to support growing demand.",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated advanced AI and machine learning capabilities for predictive lead scoring.",
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Became a recognized leader in B2B lead management with 500+ satisfied customers.",
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#1e4d91]" />,
      title: "Customer Success",
      description: "We measure our success by the growth and achievements of our clients.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#1e4d91]" />,
      title: "Innovation",
      description: "Continuously pushing the boundaries of what's possible in lead management technology.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#1e4d91]" />,
      title: "Collaboration",
      description: "Building strong partnerships with our clients to achieve mutual success.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#1e4d91]" />,
      title: "Excellence",
      description: "Delivering exceptional quality in every aspect of our platform and service.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1e4d91] via-[#2563eb] to-[#1e40af] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={fadeInUp}>
              About Lanaservice Solutions
            </motion.h1>
            <motion.p className="text-xl md:text-2xl mb-8 text-blue-100" variants={fadeInUp}>
              Transforming how businesses manage leads and accelerate sales growth through intelligent automation and
              AI-powered insights.
            </motion.p>
            <motion.div className="flex items-center justify-center gap-2 text-blue-200" variants={fadeInUp}>
              <MapPin className="h-5 w-5" />
              <span>Based in Tucson, Arizona</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We believe every business deserves access to intelligent lead management tools that were once only
              available to enterprise companies. Our mission is to democratize advanced CRM technology, making it
              accessible, affordable, and effective for businesses of all sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#1e4d91] mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1e4d91] mb-2">85%</div>
                <div className="text-gray-600">Average Conversion Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1e4d91] mb-2">24/7</div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build relationships with our customers and
              partners.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a leading CRM platform, here's how we've grown and evolved.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#1e4d91] hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div key={index} className="relative flex items-start gap-8" variants={fadeInUp}>
                    <div className="flex-shrink-0 w-16 h-16 bg-[#1e4d91] rounded-full flex items-center justify-center text-white font-bold relative z-10">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-[#1e4d91]">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e4d91] via-[#2563eb] to-[#1e40af] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experienced team combines decades of sales, technology, and business expertise to deliver exceptional
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#1e4d91] hover:bg-gray-100"
                onClick={() => window.open("https://salescentri.com/company/about-us/leadership-team", "_blank")}
              >
                Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e4d91] bg-transparent"
                onClick={() => window.open("https://salescentri.com/company/team-advisors/career-openings/", "_blank")}
              >
                Advisory Board
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
