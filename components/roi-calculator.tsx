"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ROICalculator() {
  const [leads, setLeads] = useState([500])
  const [conversionRate, setConversionRate] = useState([15])
  const [dealValue, setDealValue] = useState(5000)
  const [salesCycle, setSalesCycle] = useState(30)

  const currentRevenue = ((leads[0] * conversionRate[0]) / 100) * dealValue * 12
  const improvedConversionRate = Math.min(conversionRate[0] * 1.85, 95) // 85% improvement cap
  const improvedRevenue = ((leads[0] * improvedConversionRate) / 100) * dealValue * 12
  const additionalRevenue = improvedRevenue - currentRevenue
  const roiPercentage = ((additionalRevenue - 1188) / 1188) * 100 // Assuming $99/month Pro plan

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-[#1e4d91]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ROI Calculator</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue you could generate with iLMS. Our customers typically see an 85% improvement
            in conversion rates.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#1e4d91]" />
                  Your Current Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Monthly Leads: {leads[0].toLocaleString()}
                  </Label>
                  <Slider value={leads} onValueChange={setLeads} max={5000} min={100} step={50} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>100</span>
                    <span>5,000</span>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Current Conversion Rate: {conversionRate[0]}%
                  </Label>
                  <Slider
                    value={conversionRate}
                    onValueChange={setConversionRate}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="dealValue" className="text-sm font-medium text-gray-700">
                    Average Deal Value ($)
                  </Label>
                  <Input
                    id="dealValue"
                    type="number"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="mt-1"
                    min="100"
                    step="100"
                  />
                </div>

                <div>
                  <Label htmlFor="salesCycle" className="text-sm font-medium text-gray-700">
                    Sales Cycle (days)
                  </Label>
                  <Input
                    id="salesCycle"
                    type="number"
                    value={salesCycle}
                    onChange={(e) => setSalesCycle(Number(e.target.value))}
                    className="mt-1"
                    min="1"
                    max="365"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-lg bg-gradient-to-br from-[#1e4d91] to-[#2563eb] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Your Potential Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">${currentRevenue.toLocaleString()}</div>
                    <div className="text-sm text-blue-100">Current Annual Revenue</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">${improvedRevenue.toLocaleString()}</div>
                    <div className="text-sm text-blue-100">Projected Revenue</div>
                  </div>
                </div>

                <div className="bg-white/20 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">+${additionalRevenue.toLocaleString()}</div>
                  <div className="text-lg font-semibold mb-1">Additional Annual Revenue</div>
                  <div className="text-sm text-blue-100">{roiPercentage.toFixed(0)}% ROI in Year 1</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Improved Conversion Rate:</span>
                    <span className="font-semibold">{improvedConversionRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Additional Deals/Month:</span>
                    <span className="font-semibold">
                      {Math.round((leads[0] * (improvedConversionRate - conversionRate[0])) / 100)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Payback Period:</span>
                    <span className="font-semibold">{Math.ceil(1188 / (additionalRevenue / 12))} months</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-white text-[#1e4d91] hover:bg-gray-100 font-semibold"
                  onClick={() =>
                    window.open(
                      "https://salescentri.com/solutions/use-case-navigator/recommendations/features",
                      "_blank",
                    )
                  }
                >
                  Get Detailed ROI Report
                </Button>
              </CardContent>
            </Card>
          </div>

          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <p className="text-gray-600 mb-6">
              These calculations are based on average improvements seen by our customers. Individual results may vary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#1e4d91] hover:bg-[#1a4282]"
                onClick={() => window.open("https://salescentri.com/get-started/free-trial", "_blank")}
              >
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1e4d91] text-[#1e4d91] hover:bg-[#1e4d91] hover:text-white bg-transparent"
                onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
