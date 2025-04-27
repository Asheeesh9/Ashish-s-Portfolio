"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectDetails() {
  return (
    <div className="container max-w-4xl py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {/* <Button variant="ghost" asChild className="mb-8">
          <Link href="/#projects" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </Button> */}

        <div className="space-y-8">
          <div>
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              House Price Predictor Model
            </motion.h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>React</Badge>
              <Badge>Flask</Badge>
              <Badge>Python</Badge>
              <Badge>NumPy</Badge>
              <Badge>Pandas</Badge>
            </div>
            <div className="flex gap-4 mb-8">
              <Button variant="outline" asChild>
                <Link href="https://github.com/Asheeesh9/House-Price-Predictor.git" target ="_blank" className="inline-flex items-center gap-1">
                  <Github className="h-4 w-4" /> View Code
                </Link>
              </Button>
              {/* <Button asChild>
                <Link href="#" className="inline-flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </Link>
              </Button> */}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border ">
            <img
              src="/project2.png?height=600&width=1200&text=Project+2+Screenshot"
              alt="Project 2 Screenshot"
              width={500}
              height={600}
              className="w-full object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Project Idea</h2>
              <p className="text-muted-foreground mb-6">
              The House Price Predictor is a web application designed to predict house prices based on various input features. The model aims to assist real estate professionals and homebuyers in estimating the value of properties by analyzing historical data on house prices and their associated features.
              </p>

              <h2 className="text-2xl font-bold mb-4">Need & Problem Statement</h2>
              <p className="text-muted-foreground mb-6">
              The real estate market is highly dynamic, and determining the right price for a house can be challenging due to the influence of multiple factors such as location, size, condition, and local market trends. Manual pricing is often time-consuming and subjective. The need for an automated, data-driven model to predict house prices accurately is critical for decision-making in the real estate sector. <br/> This project focuses on leveraging machine learning and data preprocessing to create an efficient model that predicts house prices, helping stakeholders make informed decisions based on historical data.
              </p>

              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>React for building an interactive and dynamic user interfacet</li>
                    <li>Flask for setting up the backend and API to interact with the model</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Python for model development and data processing</li>
                    <li>NumPy and Pandas for data manipulation and analysis</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
              <ul className="list-disc list-inside text-muted-foreground mb-6">
                <li>Real Estate Agents: <br/>Can use the model to provide prospective buyers with price estimates for homes based on specific features (e.g., square footage, number of bedrooms, etc.).</li>
                <li>Homebuyers: <br/>Get an approximate price range for properties they are interested in, helping them decide if the price is reasonable or within their budget.</li>
                <li>Property Developers: <br/>Utilize price predictions to assess potential returns on investment before purchasing new properties for development.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-bold">Challenge: Handling Missing Data</h3>
                  <p className="text-muted-foreground">
                  One of the challenges encountered during the data preprocessing phase was dealing with missing values in 10% of the features. To solve this, I employed advanced imputation techniques, ensuring the model could make accurate predictions even when some data was unavailable.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Challenge: Model Training Time</h3>
                  <p className="text-muted-foreground">
                  With over 5000 records to process, training the model initially took a significant amount of time. I optimized the training process by normalizing the data, which reduced training time by 20%, and fine-tuned the regression parameters to further improve efficiency.
                  </p>
                </div>
              </div>

              {/* <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground">
                The app has been downloaded over 50,000 times and has helped users collectively reduce their carbon
                emissions by an estimated 1,200 tons. User surveys indicate that 78% of active users have made at least
                one significant lifestyle change based on the app's recommendations, demonstrating its effectiveness in
                driving real-world impact.
              </p> */}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
