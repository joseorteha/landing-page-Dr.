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
  X,
  ChevronDown,
  Check
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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
    alert('¡Gracias por tu mensaje! Te contactaremos pronto para agendar tu cita.');
    setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
  };

  const services = [
    {
      category: 'general',
      title: 'Consulta General',
      description: 'Evaluación médica completa',
      image: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9ufGVufDB8fHxibHVlfDE3NTIzMDYwODd8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      category: 'preventiva',
      title: 'Medicina Preventiva',
      description: 'Chequeos y prevención',
      image: 'https://images.unsplash.com/photo-1612276529624-33e7430ebce8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      category: 'familia',
      title: 'Atención Familiar',
      description: 'Cuidado para toda la familia',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjbGluaWMlMjBpbnRlcmlvcnxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTgyfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      category: 'urgencias',
      title: 'Urgencias Médicas',
      description: 'Atención inmediata 24/7',
      image: 'https://images.unsplash.com/photo-1593824261342-fd6ee146f73d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjbGluaWMlMjBpbnRlcmlvcnxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTgyfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      category: 'seguimiento',
      title: 'Seguimiento Crónico',
      description: 'Manejo de enfermedades crónicas',
      image: 'https://images.unsplash.com/photo-1655913197692-012897652d13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTkwfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      category: 'certificados',
      title: 'Certificados Médicos',
      description: 'Certificaciones laborales y deportivas',
      image: 'https://images.unsplash.com/photo-1612636321938-2a60d4febfae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85'
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const testimonials = [
    {
      name: "María González",
      text: "El Dr. Rivas es excepcional. Su atención personalizada y profesionalismo me dieron total confianza.",
      role: "Paciente desde 2020",
      initial: "M"
    },
    {
      name: "Carlos Mendoza", 
      text: "Excelente doctor, muy profesional y empático. Me ayudó con mi seguimiento de diabetes.",
      role: "Paciente crónico",
      initial: "C"
    },
    {
      name: "Ana Rodríguez",
      text: "La mejor atención médica que he recibido. El Dr. Rivas es muy dedicado y profesional.",
      role: "Paciente familiar",
      initial: "A"
    },
    {
      name: "Jorge Silva",
      text: "Profesional excepcional, siempre disponible y con un trato humano extraordinario.",
      role: "Paciente desde 2019",
      initial: "J"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-black">Dr. Alejandro Rivas</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-black transition-colors font-medium">Inicio</a>
              <a href="#sobre-mi" className="text-gray-700 hover:text-black transition-colors font-medium">Sobre Mí</a>
              <a href="#servicios" className="text-gray-700 hover:text-black transition-colors font-medium">Servicios</a>
              <a href="#testimonios" className="text-gray-700 hover:text-black transition-colors font-medium">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-black transition-colors font-medium">Contacto</a>
              <motion.a 
                href="#contacto"
                className="bg-black text-white px-6 py-3 rounded-none hover:bg-gray-800 transition-colors font-medium"
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
                className="text-black"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-6 py-4 space-y-4 bg-white">
                <a href="#inicio" className="block text-gray-700 hover:text-black font-medium">Inicio</a>
                <a href="#sobre-mi" className="block text-gray-700 hover:text-black font-medium">Sobre Mí</a>
                <a href="#servicios" className="block text-gray-700 hover:text-black font-medium">Servicios</a>
                <a href="#testimonios" className="block text-gray-700 hover:text-black font-medium">Testimonios</a>
                <a href="#contacto" className="block text-gray-700 hover:text-black font-medium">Contacto</a>
                <a href="#contacto" className="block bg-black text-white px-6 py-3 text-center font-medium">Agendar Cita</a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p 
            className="text-sm uppercase tracking-wider text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Medicina General Profesional
          </motion.p>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cuidando Tu Salud con
            <br />
            <span className="italic">Excelencia Médica</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Más de 15 años de experiencia brindando atención médica integral 
            con la más alta calidad y calidez humana
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#servicios"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Explorar Servicios
            </a>
            <a
              href="#contacto"
              className="border-2 border-black text-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Agendar Consulta
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 mb-2">Desplázate hacia abajo</p>
            <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Services Gallery Section */}
      <section id="servicios" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Servicios Médicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de servicios médicos especializados para el cuidado integral de tu salud
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { key: 'all', label: 'Todos los Servicios' },
              { key: 'general', label: 'General' },
              { key: 'preventiva', label: 'Preventiva' },
              { key: 'familia', label: 'Familiar' },
              { key: 'urgencias', label: 'Urgencias' },
              { key: 'seguimiento', label: 'Seguimiento' },
              { key: 'certificados', label: 'Certificados' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden bg-white">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-sm font-medium text-black border-b border-black pb-1 group-hover:border-gray-400 transition-colors">
                    Ver Detalles
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8">
              Creando Historias de Salud
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Cada consulta es una oportunidad para mejorar tu calidad de vida. 
              Permíteme ayudarte a preservar tu salud con profesionalismo y cuidado excepcional.
            </p>
            <motion.a
              href="#contacto"
              className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agenda Tu Consulta Ahora
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Testimonios de Pacientes
            </h2>
            <p className="text-xl text-gray-600">
              Descubre las experiencias de mis pacientes y el impacto que nuestra atención médica ha tenido en sus vidas
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Años de Experiencia" },
              { number: "5000+", label: "Pacientes Atendidos" },
              { number: "98%", label: "Satisfacción" },
              { number: "24/7", label: "Disponibilidad" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Agenda Tu Consulta Médica
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y te contactaremos para confirmar tu cita médica
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-black text-sm font-bold mb-3 uppercase tracking-wide">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors text-lg"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-black text-sm font-bold mb-3 uppercase tracking-wide">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors text-lg"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-black text-sm font-bold mb-3 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors text-lg"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-black text-sm font-bold mb-3 uppercase tracking-wide">
                  Motivo de Consulta
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors text-lg resize-none"
                  placeholder="Describe brevemente el motivo de tu consulta..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-6 text-lg font-bold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ENVIAR SOLICITUD DE CITA
              </motion.button>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
              <motion.a
                href="tel:+123456789"
                className="flex items-center justify-center space-x-3 bg-white border-2 border-black text-black px-6 py-4 hover:bg-black hover:text-white transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Llamar Ahora</span>
              </motion.a>
              <motion.a
                href="https://wa.me/+123456789"
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-6 py-4 hover:bg-green-700 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <MapPin className="h-8 w-8 text-black mx-auto mb-4" />
              <h3 className="font-bold text-black mb-2">Ubicación</h3>
              <p className="text-gray-600">Av. Principal 123<br />Ciudad Central, CP 12345</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-black mx-auto mb-4" />
              <h3 className="font-bold text-black mb-2">Horarios</h3>
              <p className="text-gray-600">Lun-Vie: 8:00 AM - 6:00 PM<br />Sáb: 9:00 AM - 2:00 PM</p>
            </div>
            <div>
              <Phone className="h-8 w-8 text-black mx-auto mb-4" />
              <h3 className="font-bold text-black mb-2">Contacto</h3>
              <p className="text-gray-600">+1 (234) 567-8900<br />dr.rivas@email.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Stethoscope className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold">Dr. Alejandro Rivas</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Medicina general con más de 15 años de experiencia, comprometido con tu salud y bienestar. 
            Atención médica integral con la más alta calidad y calidez humana.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">&copy; 2024 Dr. Alejandro Rivas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;