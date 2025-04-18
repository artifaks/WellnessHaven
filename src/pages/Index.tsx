import { Link } from "react-router-dom";
import { Search, MessageCircle, BookOpen, ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-herb-100 to-herb-50 py-16 md:py-20 overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-[url('/images/herbal-db-logo.png')] opacity-[0.03] bg-no-repeat bg-center bg-contain animate-pulse-slow"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-serif text-4xl font-bold leading-tight text-herb-900 md:text-5xl lg:text-6xl">
                Discover Nature's <span className="text-herb-600">Healing</span> Wisdom
              </h1>
              <p className="font-sans text-lg text-herb-700 md:text-xl">
                Explore our collection of medicinal herbs, get personalized advice, and deepen your knowledge with expert resources.
              </p>
              
              {/* Search Bar */}
              <div className="relative mt-4 mb-2 w-full max-w-md mx-auto md:mx-0">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Find herbs for..." 
                    className="w-full rounded-full border border-herb-300 bg-white py-2 pl-4 pr-10 text-herb-800 shadow-sm focus:border-herb-500 focus:outline-none focus:ring-1 focus:ring-herb-500"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center px-3 text-herb-600 hover:text-herb-800">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
                <Button 
                  asChild 
                  className="bg-herb-600 text-white hover:bg-herb-700 btn-hover-animate"
                  size="lg"
                >
                  <Link to="/herbs">
                    Browse the Herb Library
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-herb-300 bg-white/80 text-herb-800 hover:bg-herb-100 btn-hover-animate"
                  size="lg"
                >
                  <Link to="/chat">
                    Try Herbal Chat
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-herb-600 text-sm font-medium">Start your herbal journey in seconds.</p>
            </div>
            <div className="hidden md:block overflow-hidden rounded-2xl shadow-xl group">
              <div className="relative overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-105">
                <img 
                  src="https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//medicinal-herbs-and-tinctures.jpg" 
                  alt="Medicinal herbs and tinctures" 
                  className="mx-auto w-full h-auto object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-herb-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>
            
            {/* Mobile Hero Image */}
            <div className="md:hidden mt-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//medicinal-herbs-and-tinctures.jpg" 
                  alt="Medicinal herbs and tinctures" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-herb-600/30 to-transparent"></div>
              </div>
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
            <Link to="/herbs" className="group">
              <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md card-hover-animate">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-herb-100 text-herb-600">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="mb-3 flex items-center font-serif text-xl font-semibold text-herb-800">
                  Herb Database <span className="ml-2 text-herb-600">🌿</span>
                </h3>
                <p className="mb-4 flex-grow font-sans text-herb-700">
                  Discover detailed information about medicinal herbs, their benefits, and traditional uses.
                </p>
                <div className="mt-auto flex items-center text-herb-600 group-hover:text-herb-700">
                  <span>Explore the Database</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Herbal Chat Feature */}
            <Link to="/chat" className="group">
              <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md card-hover-animate">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="mb-3 flex items-center font-serif text-xl font-semibold text-herb-800">
                  Herbal Chat <span className="ml-2 text-lavender-600">💬</span>
                </h3>
                <p className="mb-4 flex-grow font-sans text-herb-700">
                  Get personalized herbal recommendations and answers to your wellness questions.
                </p>
                <div className="mt-auto flex items-center text-lavender-600 group-hover:text-lavender-700">
                  <span>Start Chatting</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Ebook Store Feature */}
            <Link to="/ebooks" className="group sm:col-span-2 lg:col-span-1">
              <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md card-hover-animate">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-earth-100 text-earth-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-3 flex items-center font-serif text-xl font-semibold text-herb-800">
                  Ebook Store <span className="ml-2 text-earth-600">📚</span>
                </h3>
                <p className="mb-4 flex-grow font-sans text-herb-700">
                  Expand your knowledge with our curated collection of herbal medicine ebooks.
                </p>
                <div className="mt-auto flex items-center text-earth-600 group-hover:text-earth-700">
                  <span>Browse Ebooks</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-herb-50 py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 md:mb-12 text-center font-serif text-2xl md:text-3xl font-semibold text-herb-800 lg:text-4xl">
            What Our <span className="text-herb-600">Users Say</span>
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-herb-200">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Jasmine W." 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-herb-800">Jasmine W.</h3>
                    <p className="text-sm text-herb-600">Herbal Enthusiast</p>
                  </div>
                </div>
                <p className="italic text-herb-700">
                  "Herbal Harmony changed how I approach wellness. The herb database is so comprehensive, and the chat feature helped me find exactly what I needed."
                </p>
                <div className="mt-4 flex text-herb-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-herb-200">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Michael T." 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-herb-800">Michael T.</h3>
                    <p className="text-sm text-herb-600">Wellness Coach</p>
                  </div>
                </div>
                <p className="italic text-herb-700">
                  "The eBooks available here have been an incredible resource for my practice. I recommend Herbal Harmony to all my clients interested in natural wellness."
                </p>
                <div className="mt-4 flex text-herb-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
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
                src="https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//healing-medical-herbs-and-flowers-2025-02-25-00-03-28-utc.jpg" 
                alt="Herbal preparation" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="flex items-center font-serif text-3xl font-semibold text-herb-800 md:text-4xl">
                <span>📜 Our Herbal <span className="text-herb-600">Philosophy</span></span>
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
              <span>🛒 Begin Your Natural Wellness Journey</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-herb-100">
              Whether you're new to herbal medicine or looking to deepen your knowledge, Herbal Harmony has resources for every stage of your journey.
            </p>
            <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                asChild 
                className="bg-white text-herb-800 hover:bg-herb-100 btn-hover-animate"
                size="lg"
              >
                <Link to="/herbs" className="flex items-center">
                  <Leaf className="mr-2 h-5 w-5" />
                  Explore Herbs
                </Link>
              </Button>
              <Button 
                asChild 
                className="bg-earth-600 text-white hover:bg-earth-700 btn-hover-animate"
                size="lg"
              >
                <Link to="/ebooks" className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Shop eBooks
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
