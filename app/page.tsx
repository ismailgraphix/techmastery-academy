'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Code, Globe, Laptop, Search, Users, ChevronLeft, ChevronRight, Briefcase, Brain, Cpu, Database } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import hero from "../asset/hero.jpg"
import hero01 from "../asset/hero01.jpg"
import hero02 from "../asset/hero02.jpg"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Master Tech Skills with TechMastery Academy",
      description: "Unlock your potential in coding, data science, and more with our expert-led courses and hands-on projects.",
      cta: "Get Started",
      image: hero,
    },
    {
      title: "Learn from Industry Experts",
      description: "Our instructors bring real-world experience to help you succeed in your tech career.",
      cta: "Meet Our Instructors",
      image: hero01,
    },
    {
      title: "Flexible Learning, Your Pace",
      description: "Access courses anytime, anywhere. Learn at your own pace and fit education into your busy schedule.",
      cta: "Explore Courses",
      image: hero02,
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Laptop className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">TechMastery Academy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  {slides[currentSlide].title}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  {slides[currentSlide].description}
                </p>
              </div>
              <div className="space-x-4">
                <Button>{slides[currentSlide].cta}</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={slides[currentSlide].image}
              alt={`TechMastery Academy Hero ${currentSlide + 1}`}
              layout="fill"
              objectFit="cover"
              priority
              className="transition-opacity duration-500"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Course Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 mb-2" />
                  <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Master front-end and back-end technologies to build modern web applications.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Explore Courses</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 mb-2" />
                  <CardTitle>Data Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn data analysis, machine learning, and statistical modeling techniques.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Explore Courses</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Cpu className="h-10 w-10 mb-2" />
                  <CardTitle>Artificial Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dive into AI algorithms, neural networks, and deep learning applications.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Explore Courses</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Briefcase className="h-10 w-10 mb-2" />
                  <CardTitle>Business & Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Develop leadership skills and learn business strategies for the tech industry.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Explore Courses</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 mb-2" />
                  <CardTitle>Expert-Led Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Learn from industry professionals with years of experience in their fields.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Laptop className="h-10 w-10 mb-2" />
                  <CardTitle>Hands-On Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Apply your skills to real-world projects and build an impressive portfolio.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 mb-2" />
                  <CardTitle>Community Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Connect with peers, mentors, and instructors for guidance and collaboration.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Learning Journey Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of students who are already mastering new tech skills with TechMastery Academy.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TechMastery Academy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}