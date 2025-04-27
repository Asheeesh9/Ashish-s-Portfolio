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
              ComX
            </motion.h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Next.js</Badge>
              <Badge>Express</Badge>
              <Badge>Prisma</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>WebSockets</Badge>
              <Badge>WebRTC</Badge>
              
            </div>
            <div className="flex gap-4 mb-8">
              <Button variant="outline" asChild>
                <Link href="https://github.com/Asheeesh9/ComX-" target ="_blank" className="inline-flex items-center gap-1">
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

          
          <div className="  ">
            <img
              src="/project1.jpg?height=600&width=1200&text=Project+1+Screenshot"
              alt="Project 1 Screenshot"
              width={500}
              // className="w-full object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Project Idea</h2>
              <p className="text-muted-foreground mb-6">
              ComX is an advanced collaboration platform designed to streamline communication and optimize efficiency for remote and distributed teams. By addressing common communication challenges such as coordination across time zones, information overload, and lack of integration between various tools, ComX creates a unified solution that enhances both individual and team productivity.
              </p>

              <h2 className="text-2xl font-bold mb-4">Need & Problem Statement</h2>
              <p className="text-muted-foreground mb-6">
              Remote teams often struggle with:

              <li>Coordinating work across different time zones</li>

              <li>Maintaining continuous, real-time communication</li>

              <li>Overcoming inefficiencies due to multiple communication tools</li>

              <li>Customizing workflows to suit diverse team needs</li>

              <li>Tracking the progress of tasks and subtasks effectively
              </li>
              <br/>
              Existing solutions were either too generic, not scalable, or lacked key features such as real-time chat, video calling, and customizable dashboards that remote teams require. ComX solves these problems by combining communication tools (chat, video) with dynamic dashboards that are tailored to team workflows, enabling seamless communication, task management, and detailed progress tracking.
              </p>

              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <div>
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>React and Next.js for building a fast and SEO-optimized UI with server-side rendering</li>
                    <li>TypeScript for type safety and a robust development experience</li>
                    <li>Tailwind CSS for responsive and maintainable styling</li>
                    <li>WebRTC for peer-to-peer video calling</li>
                    <li>Framer Motion for smooth animations and transitions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Backend</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Node.js with Express for a scalable server-side architecture</li>
                    <li>WebSockets for real-time communication (chat and notifications)</li>
                    <li>Prisma for efficient database management, streamlining database operations.</li>
                    <li>JWT for secure authentication</li>
                    <li>PostgreSQL for scalable relational data storage, ensuring data consistency and integrity.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
              <ul className="list-disc list-inside text-muted-foreground mb-6">
                <li>Real-Time Chat & Video Calls: <br/>Team members can communicate instantly via text and video calls, ensuring that no message is lost and all team members are on the same page.</li>
                <li>
                Customizable Dashboards: <br/>Each user can create a tailored workspace, showing the most relevant data to optimize their workflow.</li>
                <li>Task & Subtask Tracking: <br/>Users can track the progress of tasks and subtasks, with real-time updates reflecting completion percentages, helping teams stay on track.</li>
                <li>Time Zone Management: <br/>The platform automatically adjusts meeting schedules based on user time zones, eliminating confusion.</li>
                <li>Team Analytics & Productivity Tracking: <br/>ComX offers analytics to track team progress and productivity. Managers can view detailed reports on task completions, individual productivity, and project progress.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-bold">Challenge: Real-time Communication</h3>
                  <p className="text-muted-foreground">
                  With remote teams being geographically distributed, real-time synchronization of messages, tasks, and notifications was critical. We implemented WebSockets (via Socket.io) to ensure instant updates across clients. 
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Challenge: Performance at Scale</h3>
                  <p className="text-muted-foreground">
                  As the user base will grow, performance might become an issue. Large data sets and high-frequency updates demand an efficient backend. We optimized PostgreSQL queries and implemented caching strategies to enhance database performance. This ensured that ComX remains responsive even with a growing number of users and projects.
                  </p>
                </div>
              </div>

              {/* <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground">
                The application has been adopted by over 50 teams, resulting in a reported 30% increase in productivity
                and a 25% reduction in miscommunication incidents. User feedback has been overwhelmingly positive, with
                particular praise for the intuitive interface and time zone management features.
              </p> */}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
