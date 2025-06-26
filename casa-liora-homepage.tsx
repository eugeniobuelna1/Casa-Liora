import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Search, Users, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Casa Liora</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Find a Caregiver
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Become a Caregiver
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
            <Button variant="outline" className="md:hidden bg-white text-blue-600 border-blue-200">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Compassionate Care, On Your Terms
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Connecting families with trusted caregivers in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Find a Caregiver
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 border-blue-200 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Become a Caregiver
            </Button>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse through our carefully vetted caregivers in your area. Filter by experience, specialties, and
                availability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Match</h3>
              <p className="text-gray-600 leading-relaxed">
                Our matching system connects you with caregivers who meet your specific needs and preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Meet your potential caregiver, discuss your needs, and start building a trusted relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Casa Liora</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Casa Liora, we understand that finding the right caregiver is about more than just credentials—it's
                about finding someone who truly cares. Our platform connects families with compassionate, qualified
                caregivers who are committed to providing personalized care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded on the belief that everyone deserves dignified, loving care, we've built a community where
                trust, respect, and genuine connection are at the heart of every relationship.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Compassionate Care</h4>
                    <p className="text-gray-600 text-sm">
                      Every caregiver is selected for their empathy and dedication
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Trusted Network</h4>
                    <p className="text-gray-600 text-sm">Thoroughly vetted and background-checked professionals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">We're here to help whenever you need us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What Families Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm bg-blue-50">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Casa Liora helped us find Maria, who has become like family to us. She cares for my mother with such
                  kindness and patience. I finally have peace of mind knowing Mom is in loving hands."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Johnson</p>
                    <p className="text-gray-600 text-sm">Daughter & Family Caregiver</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm bg-green-50">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "The matching process was incredible. They found someone who not only met all our requirements but
                  truly understood Dad's needs. The care has been exceptional, and the communication is always clear."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Michael Rodriguez</p>
                    <p className="text-gray-600 text-sm">Son & Healthcare Advocate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have questions about our services? We're here to help you find the perfect care solution for your
                family.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">hello@casaliora.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Serving communities nationwide</span>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Casa Liora</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Connecting families with trusted caregivers for compassionate, personalized care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Find a Caregiver
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Become a Caregiver
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Senior Care
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Companion Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>hello@casaliora.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Casa Liora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
