import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Heart, 
  Shield, 
  Users, 
  Award,
  MessageCircle,
  Calendar,
  Stethoscope,
  Menu,
  X
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto para agendar tu cita.');
    setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Dr. Alejandro Rivas</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre Mí</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              <motion.a 
                href="#contacto"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Cita
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Inicio</a>
                <a href="#sobre-mi" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre Mí</a>
                <a href="#servicios" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Servicios</a>
                <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonios</a>
                <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contacto</a>
                <a href="#contacto" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">Agendar Cita</a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Tu Salud es mi
                <span className="text-blue-600 block">Prioridad</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Más de 15 años de experiencia en medicina general, brindando atención médica 
                integral con calidez humana y tecnología de vanguardia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#contacto"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agendar Consulta
                </motion.a>
                <motion.a
                  href="https://wa.me/+123456789"
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1612636321938-2a60d4febfae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Dr. Alejandro Rivas"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Años de Experiencia", icon: Award },
              { number: "5000+", label: "Pacientes Atendidos", icon: Users },
              { number: "98%", label: "Satisfacción", icon: Heart },
              { number: "24/7", label: "Emergencias", icon: Shield }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1612276529624-33e7430ebce8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85"
                alt="Dr. Alejandro Rivas con estetoscopio"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Conoce al <span className="text-blue-600">Dr. Alejandro Rivas</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Con más de 15 años de experiencia en medicina general, me he dedicado a brindar 
                atención médica integral a pacientes de todas las edades. Mi enfoque se centra en 
                la medicina preventiva y el cuidado personalizado.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Certificado por la Asociación Nacional de Medicina General</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Especialista en español e inglés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Consultorio en Ciudad Central</span>
                </div>
              </div>

              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Certificaciones
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicios <span className="text-blue-600">Médicos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrezco una amplia gama de servicios médicos para cuidar tu salud y la de tu familia
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Consulta General",
                description: "Evaluación médica completa y diagnóstico de condiciones de salud general",
                icon: Stethoscope
              },
              {
                title: "Medicina Preventiva",
                description: "Chequeos regulares y programas de prevención personalizados",
                icon: Shield
              },
              {
                title: "Atención Familiar",
                description: "Cuidado médico integral para toda la familia, desde niños hasta adultos mayores",
                icon: Users
              },
              {
                title: "Urgencias Médicas",
                description: "Atención inmediata para situaciones médicas que requieren cuidado urgente",
                icon: Heart
              },
              {
                title: "Seguimiento Crónico",
                description: "Manejo y seguimiento de enfermedades crónicas como diabetes e hipertensión",
                icon: Calendar
              },
              {
                title: "Certificados Médicos",
                description: "Emisión de certificados médicos para trabajo, estudio y actividades deportivas",
                icon: Award
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen mis <span className="text-blue-600">Pacientes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Testimonios reales de pacientes satisfechos con la atención recibida
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "María González",
                text: "El Dr. Rivas es excepcional. Su atención personalizada y profesionalismo me dieron total confianza. Siempre explica todo claramente.",
                rating: 5,
                image: "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg"
              },
              {
                name: "Carlos Mendoza",
                text: "Excelente doctor, muy profesional y empático. Me ayudó con mi seguimiento de diabetes y ahora me siento mucho mejor.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9ufGVufDB8fHxibHVlfDE3NTIzMDYwODd8MA&ixlib=rb-4.1.0&q=85"
              },
              {
                name: "Ana Rodríguez",
                text: "La mejor atención médica que he recibido. El Dr. Rivas es muy dedicado y su consulta siempre es muy completa y profesional.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1612636321938-2a60d4febfae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">Paciente</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ubicación del <span className="text-blue-600">Consultorio</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Av. Principal 123, Centro Médico Plaza<br />Ciudad Central, CP 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horarios de Atención</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábados: 9:00 AM - 2:00 PM</p>
                      <p>Domingos: Solo emergencias</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:+123456789"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>Llamar Ahora</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/+123456789"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mapa Interactivo</h3>
                  <p className="text-gray-600 mb-4">Centro Médico Plaza, Ciudad Central</p>
                  <motion.button
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver en Google Maps
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Agenda tu <span className="text-blue-200">Consulta</span>
            </h2>
            <p className="text-xl text-blue-100">
              Completa el formulario y te contactaremos para confirmar tu cita
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Mensaje o Motivo de Consulta
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Describe brevemente el motivo de tu consulta..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Solicitud de Cita
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Dr. Alejandro Rivas</span>
              </div>
              <p className="text-gray-400 mb-4">
                Medicina general con más de 15 años de experiencia, 
                comprometido con tu salud y bienestar.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">dr.rivas@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Av. Principal 123, Ciudad Central</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Horarios</h3>
              <div className="space-y-2 text-gray-400">
                <div>Lunes - Viernes: 8:00 AM - 6:00 PM</div>
                <div>Sábados: 9:00 AM - 2:00 PM</div>
                <div>Domingos: Solo emergencias</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Alejandro Rivas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;