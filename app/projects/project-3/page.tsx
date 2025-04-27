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
              Medical Inventory Management System
            </motion.h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>PHP</Badge>
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>MySQL</Badge>
              <Badge>PHPMyAdmin</Badge>
              <Badge>XAMPP Control Panel</Badge>
            </div>
            <div className="flex gap-4 mb-8">
              <Button variant="outline" asChild>
                <Link href="#" target ="_blank" className="inline-flex items-center gap-1">
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

          <div className="">
            <img
              src="/project33.png?height=600&width=1200&text=Project+3+Screenshot"
              alt="Project 3 Screenshot"
              width={500}
              height={400}
              // className="w-full object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Project Idea</h2>
              <p className="text-muted-foreground mb-6">
              The Medical Inventory Management System is a comprehensive web application designed to streamline the management of medical supplies, pharmaceuticals, and equipment within healthcare facilities. The system is aimed at improving inventory tracking, reducing wastage, and ensuring that critical medical supplies are always available when needed.
              </p>

              <h2 className="text-2xl font-bold mb-4">Need & Problem Statement</h2>
              <p className="text-muted-foreground mb-6">
              Managing medical inventory manually is prone to errors, delays, and inefficiencies. Hospitals and healthcare providers often face challenges such as overstocking, stockouts, and improper tracking of expiration dates, which can compromise patient care. Existing solutions either lack comprehensive features or are too complex for day-to-day use. <br/>This project focuses on building a simple yet robust solution to manage the inventory efficiently, ensure real-time tracking of medical supplies, and automate stock management.
              </p>

              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>PHP for backend development and logic implementation</li>
                    <li>PHPMyAdmin for database management and visualization of data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>MySQL for relational data storage, managing inventory records and transactions</li>
                    <li>XAMPP Control Panel for local server management and database hosting</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
              <ul className="list-disc list-inside text-muted-foreground mb-6">
                <li>Inventory Tracking: <br/>Allows users to track the stock levels of medical supplies and pharmaceuticals in real-time.</li>
                <li>Stock Alerts: <br/>Notifies users when inventory is low, preventing stockouts of critical items.</li>
                <li>Purchase Order Management: <br/>Enables healthcare facilities to create and track purchase orders for new stock based on usage.</li>
                <li>Sales Order Management: <br/>Tracks the sale or use of medical items, keeping records up-to-date.</li>
                <li>Stock Transaction Management: <br/>Keeps a log of all inventory movements, including additions, removals, and adjustments.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-bold">Challenge: Real-Time Inventory Updates</h3>
                  <p className="text-muted-foreground">
                  Ensuring that the inventory was accurately updated in real-time posed a challenge. This was resolved by using a MySQL-based relational structure that kept data consistent across different modules (purchase, sales, adjustments).
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Challenge: Stock Expiry Management</h3>
                  <p className="text-muted-foreground">
                  A major challenge was managing expiration dates of pharmaceuticals and ensuring that expired items were not used. The system was designed to automatically highlight items nearing expiration and alert the user, preventing any expired products from being used.
                  </p>
                  <div>
                  <h3 className="font-bold">Challenge: User Authentication & Security</h3>
                  <p className="text-muted-foreground">
                  Managing user access and ensuring data security was essential. This was achieved by implementing robust user authentication mechanisms, using PHP sessions to control access levels and protect sensitive information.
                  </p>
                </div>
                </div>
              </div>

              {/* <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground">
                The platform has attracted over 15,000 active users with a course completion rate of 68%, significantly
                higher than the industry average of 20% for online courses. User surveys show a 92% satisfaction rate,
                with particular appreciation for the interactive coding environment and personalized learning
                experience. Several educational institutions have adopted the platform as a supplementary tool for their
                computer science programs.
              </p> */}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
