'use client'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo-sengol.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#0f0f0f] text-white py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#CD853F] to-[#A0522D] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full animate-pulse"></div>
            <span className="text-[#D4AF37] text-sm font-semibold tracking-wide">GET LATEST UPDATES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent leading-tight">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
            Stay updated with the latest news, exam strategies, and special offers! Join our newsletter today and unlock your academic potential.
          </p>

          {/* Newsletter Form */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
            <div className="relative w-full md:flex-1">
              <input
                type="email"
                placeholder="Enter Your E-Mail"
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all duration-300"
              />
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#CD853F] hover:from-[#B8860B] hover:via-[#D4AF37] hover:to-[#B8860B] text-black font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Subscribe →
            </button>
          </div>
          <p className="text-sm text-gray-400">No ads, No spam, Unsubscribe anytime.</p>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo & Address Section */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={Logo}
                  alt="Sengol International University"
                  width={80}
                  height={60}
                  className="drop-shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                    SENGOL
                  </h3>
                  <p className="text-sm text-gray-300">International University</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Sengol International University is committed to providing quality education and empowering students with the necessary skills for a successful future.
              </p>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center">
                    <span className="text-black text-xs">📍</span>
                  </div>
                  <h4 className="text-white font-semibold">Campus Address</h4>
                </div>
                <p className="text-gray-300 ml-11">
                  Lower Pepthang, PO - Lingmoo<br />
                  District - Namchi, Sikkim-737134
                </p>
              </div>

              <div className="flex gap-3">
                {[
                  { name: 'Facebook', icon: 'F', color: 'from-blue-600 to-blue-700' },
                  { name: 'LinkedIn', icon: 'L', color: 'from-blue-500 to-blue-600' },
                  { name: 'Twitter', icon: 'T', color: 'from-sky-400 to-sky-500' },
                  { name: 'YouTube', icon: 'Y', color: 'from-red-600 to-red-700' },
                  { name: 'Instagram', icon: 'I', color: 'from-pink-500 to-purple-600' }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href="#"
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <span className="text-white text-sm font-bold">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
                    <span className="text-black text-xs">⚡</span>
                  </div>
                  <h5 className="font-bold text-lg text-white">Quick Links</h5>
                </div>
                <ul className="space-y-3">
                  {['Admission', 'PSAT', 'Gallery', 'Test Series', 'FAQs'].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
                    <span className="text-black text-xs">📚</span>
                  </div>
                  <h5 className="font-bold text-lg text-white">Resources</h5>
                </div>
                <ul className="space-y-3">
                  {['Previous Year Papers', 'Current Affairs', 'Quizzes', 'Mains Resources'].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
                    <span className="text-black text-xs">🏢</span>
                  </div>
                  <h5 className="font-bold text-lg text-white">Company</h5>
                </div>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Faculty', 'Contact', 'Legal'].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              {/* <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg flex items-center justify-center">
                    <span className="text-black text-xs">🎓</span>
                  </div>
                  <h5 className="font-bold text-lg text-white">Courses</h5>
                </div>
                <ul className="space-y-3">
                  {['BBOSE', 'NIOS', 'BBOS', 'Crash Course'].map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#D4AF37] transition-colors duration-300"></span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent h-px"></div>
          <div className="text-center pt-12 pb-4">
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10 inline-block">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()}
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent font-semibold mx-2">
                  Sengol International University
                </span>
                - All rights reserved.
              </p>
            </div>
            <div className="mt-4 flex justify-center items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full animate-pulse"></div>
              <p className="text-xs text-gray-400">Empowering Future Leaders</p>
              <div className="w-2 h-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}