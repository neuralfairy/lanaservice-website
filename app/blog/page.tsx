"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      title: "10 Proven Strategies to Increase Lead Conversion by 85%",
      excerpt:
        "Discover the exact methods our top-performing customers use to dramatically improve their conversion rates.",
      category: "Lead Generation",
      readTime: "8 min read",
      date: "2024-01-15",
      redirectUrl:
        "https://salescentri.com/blog/lead-conversion-strategies?utm_source=lanaservice&utm_medium=blog&utm_campaign=traffic",
    },
    {
      title: "The Complete Guide to AI-Powered Lead Scoring",
      excerpt:
        "Learn how artificial intelligence is revolutionizing lead qualification and helping sales teams focus on the right prospects.",
      category: "AI & Technology",
      readTime: "12 min read",
      date: "2024-01-12",
      redirectUrl:
        "https://salescentri.com/blog/ai-lead-scoring-guide?utm_source=lanaservice&utm_medium=blog&utm_campaign=traffic",
    },
    {
      title: "CRM Integration Best Practices for 2024",
      excerpt:
        "Maximize your CRM's potential with these proven integration strategies that streamline your sales process.",
      category: "CRM",
      readTime: "6 min read",
      date: "2024-01-10",
      redirectUrl:
        "https://salescentri.com/blog/crm-integration-best-practices?utm_source=lanaservice&utm_medium=blog&utm_campaign=traffic",
    },
    {
      title: "Sales Automation: What to Automate and What to Keep Human",
      excerpt: "Find the perfect balance between automation efficiency and personal touch in your sales process.",
      category: "Sales Automation",
      readTime: "10 min read",
      date: "2024-01-08",
      redirectUrl:
        "https://salescentri.com/blog/sales-automation-balance?utm_source=lanaservice&utm_medium=blog&utm_campaign=traffic",
    },
    {
      title: "Building a High-Converting Sales Pipeline in 30 Days",
      excerpt: "Step-by-step guide to creating a sales pipeline that consistently delivers results for your business.",
      category: "Sales Strategy",
      readTime: "15 min read",
      date: "2024-01-05",
      redirectUrl:
        "https://salescentri.com/blog/building-sales-pipeline?utm_source=lanaservice&utm_medium=blog&utm_campaign=traffic",
    },
    {
      title: "Lead Nurturing Campaigns That Actually Work",
      excerpt: "Discover the email sequences and touchpoints that turn cold leads into hot prospects ready to buy.",
      category: "Lead Nurturing",
      readTime: "9 min read",
      date: "2024-01-03",
      redirectUrl:
        "https://salescentri.com/blog/lead-nurturing-campaigns?utm_source=lanaservice&utm_medium=blog&utm_campaign=traffic",
    },
  ]

  const categories = [
    "All",
    "Lead Generation",
    "AI & Technology",
    "CRM",
    "Sales Automation",
    "Sales Strategy",
    "Lead Nurturing",
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handlePostClick = (redirectUrl: string) => {
    window.open(redirectUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1e4d91] via-[#2563eb] to-[#1e40af] text-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" initial="initial" animate="animate" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sales & Lead Management Blog</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert insights, strategies, and tips to help you master lead management and accelerate your sales growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-white border-gray-200"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-[#1e4d91] hover:bg-[#1a4282]" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                {filteredPosts.map((post, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <Card
                      className="h-full cursor-pointer hover:shadow-xl transition-all duration-300 group"
                      onClick={() => handlePostClick(post.redirectUrl)}
                    >
                      <div className="aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-[#1e4d91] to-[#2563eb] flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <span className="text-2xl font-bold">{post.category.charAt(0)}</span>
                          </div>
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="bg-blue-50 text-[#1e4d91]">
                            {post.category}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e4d91] transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
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
                  No articles found matching your criteria. Try adjusting your search or filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  variant="outline"
                  className="border-[#1e4d91] text-[#1e4d91] hover:bg-[#1e4d91] hover:text-white"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-[#1e4d91] via-[#2563eb] to-[#1e40af] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Latest Insights</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get weekly tips, strategies, and industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900 border-0" />
              <Button
                className="bg-white text-[#1e4d91] hover:bg-gray-100 whitespace-nowrap"
                onClick={() => window.open("https://salescentri.com/resources/whitepapers-ebooks/", "_blank")}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
