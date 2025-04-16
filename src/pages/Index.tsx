
import { Link } from "react-router-dom";
import { Search, MessageCircle, BookOpen, ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-herb-100 to-herb-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-serif text-4xl font-bold leading-tight text-herb-900 md:text-5xl lg:text-6xl">
                Discover Nature's <span className="text-herb-600">Healing</span> Wisdom
              </h1>
              <p className="font-sans text-lg text-herb-700 md:text-xl">
                Explore our collection of medicinal herbs, get personalized advice, and deepen your knowledge with expert resources.
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
                <Button 
                  asChild 
                  className="bg-herb-600 text-white hover:bg-herb-700"
                  size="lg"
                >
                  <Link to="/herbs">
                    Explore Herbs
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-herb-300 bg-white/80 text-herb-800 hover:bg-herb-100"
                  size="lg"
                >
                  <Link to="/chat">
                    Try Herbal Chat
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1546375982-c22276aa12f0?auto=format&fit=crop&q=80&w=600&h=500" 
                alt="Medicinal herbs and plants" 
                className="mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 hidden w-full opacity-30 md:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#76a785" fillOpacity="0.5" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-herb-800 md:text-4xl">
            Our <span className="text-herb-600">Features</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Herb Database Feature */}
            <div className="flex flex-col rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-herb-100 text-herb-600">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-herb-800">Herb Database</h3>
              <p className="mb-4 flex-grow font-sans text-herb-700">
                Discover detailed information about medicinal herbs, their benefits, and traditional uses.
              </p>
              <Button 
                asChild 
                variant="ghost" 
                className="mt-auto justify-start p-0 text-herb-600 hover:bg-transparent hover:text-herb-700"
              >
                <Link to="/herbs" className="flex items-center">
                  <span>Explore the Database</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Herbal Chat Feature */}
            <div className="flex flex-col rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-herb-800">Herbal Chat</h3>
              <p className="mb-4 flex-grow font-sans text-herb-700">
                Get personalized herbal recommendations and answers to your wellness questions.
              </p>
              <Button 
                asChild 
                variant="ghost" 
                className="mt-auto justify-start p-0 text-lavender-600 hover:bg-transparent hover:text-lavender-700"
              >
                <Link to="/chat" className="flex items-center">
                  <span>Start Chatting</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Ebook Store Feature */}
            <div className="flex flex-col rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-earth-100 text-earth-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-herb-800">Ebook Store</h3>
              <p className="mb-4 flex-grow font-sans text-herb-700">
                Expand your knowledge with our curated collection of herbal medicine ebooks.
              </p>
              <Button 
                asChild 
                variant="ghost" 
                className="mt-auto justify-start p-0 text-earth-600 hover:bg-transparent hover:text-earth-700"
              >
                <Link to="/ebooks" className="flex items-center">
                  <span>Browse Ebooks</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-herb-100/50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="hidden overflow-hidden rounded-xl md:block">
              <img 
                src="https://images.unsplash.com/photo-1515178126380-12eda78b6217?auto=format&fit=crop&q=80&w=600&h=700" 
                alt="Herbal preparation" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="font-serif text-3xl font-semibold text-herb-800 md:text-4xl">
                Our Herbal <span className="text-herb-600">Philosophy</span>
              </h2>
              <div className="space-y-4 font-sans text-herb-700">
                <p>
                  At Herbal Harmony, we believe in the power of nature to promote wellness and balance in our lives.
                </p>
                <p>
                  Our mission is to share traditional herbal wisdom in an accessible way, helping you make informed choices about natural remedies.
                </p>
                <p>
                  Each herb in our database has been carefully researched to provide you with accurate information about its traditional uses and benefits.
                </p>
              </div>
              <div className="pt-2">
                <div className="flex items-center space-x-2 text-herb-800">
                  <Leaf className="h-5 w-5 text-herb-600" />
                  <span className="font-medium">Ethically Sourced Information</span>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-herb-800">
                  <Leaf className="h-5 w-5 text-herb-600" />
                  <span className="font-medium">Evidence-Based Approach</span>
                </div>
                <div className="mt-2 flex items-center space-x-2 text-herb-800">
                  <Leaf className="h-5 w-5 text-herb-600" />
                  <span className="font-medium">Holistic Wellness Perspective</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-herb-700 to-herb-800 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              Begin Your Natural Wellness Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-herb-100">
              Whether you're new to herbal medicine or looking to deepen your knowledge, Herbal Harmony has resources for every stage of your journey.
            </p>
            <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                asChild 
                className="bg-white text-herb-800 hover:bg-herb-100"
                size="lg"
              >
                <Link to="/herbs">
                  Explore Herbs
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-white hover:bg-herb-600/20"
                size="lg"
              >
                <Link to="/ebooks">
                  Browse Ebooks
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
