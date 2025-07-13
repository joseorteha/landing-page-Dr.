import React, { useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  Check,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      description: 'Evaluación médica completa con tecnología de vanguardia',
      image: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9ufGVufDB8fHxibHVlfDE3NTIzMDYwODd8MA&ixlib=rb-4.1.0&q=85',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'preventiva',
      title: 'Medicina Preventiva',
      description: 'Chequeos personalizados para prevenir enfermedades',
      image: 'https://images.unsplash.com/photo-1612276529624-33e7430ebce8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      category: 'familia',
      title: 'Atención Familiar',
      description: 'Cuidado integral para toda la familia',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjbGluaWMlMjBpbnRlcmlvcnxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTgyfDA&ixlib=rb-4.1.0&q=85',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      category: 'urgencias',
      title: 'Urgencias Médicas',
      description: 'Atención inmediata 24/7 cuando lo necesites',
      image: 'https://images.unsplash.com/photo-1593824261342-fd6ee146f73d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjbGluaWMlMjBpbnRlcmlvcnxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTgyfDA&ixlib=rb-4.1.0&q=85',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      category: 'seguimiento',
      title: 'Seguimiento Crónico',
      description: 'Manejo especializado de enfermedades crónicas',
      image: 'https://images.unsplash.com/photo-1655913197692-012897652d13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYmFja2dyb3VuZHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTkwfDA&ixlib=rb-4.1.0&q=85',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      category: 'certificados',
      title: 'Certificados Médicos',
      description: 'Certificaciones rápidas y confiables',
      image: 'https://images.unsplash.com/photo-1612636321938-2a60d4febfae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const testimonials = [
    {
      name: "María González",
      text: "El Dr. Rivas cambió mi vida. Su atención personalizada y tecnología de vanguardia me devolvieron la confianza en mi salud.",
      role: "Paciente desde 2020",
      initial: "M",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Carlos Mendoza", 
      text: "Increíble profesional. Su seguimiento de mi diabetes ha sido excepcional, ahora me siento completamente recuperado.",
      role: "Paciente crónico",
      initial: "C",
      color: "from-green-500 to-cyan-500"
    },
    {
      name: "Ana Rodríguez",
      text: "La mejor experiencia médica de mi vida. Tecnología, profesionalismo y calidez humana en perfecta armonía.",
      role: "Paciente familiar",
      initial: "A",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Jorge Silva",
      text: "Un doctor extraordinario. Su consulta virtual y presencial son de primera clase mundial.",
      role: "Paciente desde 2019",
      initial: "J",
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-white/10 backdrop-blur-2xl z-50 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Dr. Alejandro Rivas</span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['inicio', 'sobre-mi', 'servicios', 'testimonios', 'contacto'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item}`} 
                  className="text-white/80 hover:text-white transition-colors font-medium relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.a 
                href="#contacto"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Agendar Cita</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-6 py-4 space-y-4 bg-black/20 backdrop-blur-xl">
                {['inicio', 'sobre-mi', 'servicios', 'testimonios', 'contacto'].map((item) => (
                  <a key={item} href={`#${item}`} className="block text-white/80 hover:text-white font-medium py-2">
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </a>
                ))}
                <a href="#contacto" className="block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-center font-medium">
                  Agendar Cita
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="text-white/90 font-medium">Medicina del Futuro, Hoy</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: y1 }}
          >
            Tu Salud es Nuestra
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Revolución
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Más de 15 años revolucionando la medicina con tecnología de vanguardia, 
            inteligencia artificial y el toque humano que necesitas
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#servicios"
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-3">
                <Zap className="h-6 w-6" />
                <span>Explorar Servicios</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.a>
            <motion.a
              href="#contacto"
              className="group border-2 border-white/30 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-slate-900 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-3">
                <Calendar className="h-6 w-6" />
                <span>Agendar Consulta</span>
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-white/60 mb-4">Descubre el futuro de la medicina</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ y: y2 }}
        >
          <div className="relative">
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1612636321938-2a60d4febfae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85"
                alt="Dr. Alejandro Rivas"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Años de Experiencia", icon: Award, color: "from-blue-500 to-cyan-500" },
              { number: "5000+", label: "Pacientes Felices", icon: Users, color: "from-green-500 to-emerald-500" },
              { number: "98%", label: "Satisfacción", icon: Heart, color: "from-pink-500 to-rose-500" },
              { number: "24/7", label: "Disponibilidad", icon: Shield, color: "from-purple-500 to-indigo-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <motion.div 
                  className="text-5xl font-black text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Gallery Section */}
      <section id="servicios" className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-cyan-400 font-semibold">Servicios Premium</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Medicina del{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Futuro
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tecnología de vanguardia combinada con el cuidado humano más cálido
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { key: 'all', label: 'Todos', icon: Sparkles },
              { key: 'general', label: 'General', icon: Stethoscope },
              { key: 'preventiva', label: 'Preventiva', icon: Shield },
              { key: 'familia', label: 'Familiar', icon: Users },
              { key: 'urgencias', label: 'Urgencias', icon: Zap },
              { key: 'seguimiento', label: 'Seguimiento', icon: Heart },
              { key: 'certificados', label: 'Certificados', icon: Award }
            ].map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 backdrop-blur-xl text-white/80 hover:text-white border border-white/20 hover:bg-white/20'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <filter.icon className="h-4 w-4" />
                <span>{filter.label}</span>
              </motion.button>
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
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ArrowRight className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{service.description}</p>
                    <motion.div 
                      className="mt-6 flex items-center text-cyan-400 font-semibold group-hover:text-white transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <span>Ver más detalles</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div 
                  className="w-full h-96 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1612276529624-33e7430ebce8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxkb2N0b3IlMjBwb3J0cmFpdHxlbnwwfHx8Ymx1ZXwxNzUyMzY1OTY5fDA&ixlib=rb-4.1.0&q=85"
                    alt="Dr. Alejandro Rivas"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-400 font-semibold">Conoce al Doctor</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Creando{" "}
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Historias
                </span>
                {" "}de Salud
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Cada consulta es una oportunidad única para transformar vidas. 
                Con más de 15 años revolucionando la medicina, combino la tecnología 
                más avanzada con el cuidado humano excepcional.
              </p>
              
              <motion.div 
                className="space-y-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Award, text: "Certificado por la Asociación Nacional de Medicina" },
                  { icon: Users, text: "Especialista en atención familiar integral" },
                  { icon: Zap, text: "Pionero en telemedicina avanzada" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white/90 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="#contacto"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Agenda Tu Consulta</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-pink-400 font-semibold">Testimonios Reales</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Vidas{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Transformadas
              </span>
            </h2>
            <p className="text-xl text-white/70">
              Descubre cómo estamos revolucionando la experiencia médica de nuestros pacientes
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-6 w-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-white/90 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-xl">{testimonial.initial}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-white/60">{testimonial.role}</p>
                  </div>
                </div>
                <motion.div 
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                >
                  <Sparkles className="h-6 w-6 text-cyan-400" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-400 font-semibold">Contacto Premium</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Agenda Tu{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolución
              </span>
            </h2>
            <p className="text-xl text-white/70">
              El futuro de tu salud comienza con una simple conversación
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wider">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 border-0 border-b-2 border-white/30 bg-transparent focus:border-cyan-400 focus:outline-none transition-all duration-300 text-lg text-white placeholder-white/50"
                    placeholder="Tu nombre completo"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wider">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-4 border-0 border-b-2 border-white/30 bg-transparent focus:border-cyan-400 focus:outline-none transition-all duration-300 text-lg text-white placeholder-white/50"
                    placeholder="Tu número de teléfono"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-white/30 bg-transparent focus:border-cyan-400 focus:outline-none transition-all duration-300 text-lg text-white placeholder-white/50"
                  placeholder="tu.email@ejemplo.com"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-white font-bold mb-3 text-sm uppercase tracking-wider">
                  ¿Cómo podemos revolucionar tu salud?
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-0 py-4 border-0 border-b-2 border-white/30 bg-transparent focus:border-cyan-400 focus:outline-none transition-all duration-300 text-lg text-white placeholder-white/50 resize-none"
                  placeholder="Cuéntanos sobre tu visión de salud ideal..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-6 rounded-2xl text-xl font-bold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center space-x-3">
                  <Zap className="h-6 w-6" />
                  <span>INICIAR MI REVOLUCIÓN DE SALUD</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-white/20">
              <motion.a
                href="tel:+123456789"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Llamar Ahora</span>
              </motion.a>
              <motion.a
                href="https://wa.me/+123456789"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: MapPin, title: "Ubicación", info: "Av. Principal 123\nCiudad Central", color: "from-blue-500 to-cyan-500" },
              { icon: Clock, title: "Horarios", info: "Lun-Vie: 8AM-6PM\nSáb: 9AM-2PM", color: "from-green-500 to-emerald-500" },
              { icon: Phone, title: "Contacto", info: "+1 (234) 567-8900\ndr.rivas@email.com", color: "from-purple-500 to-pink-500" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-white/70 whitespace-pre-line">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <Stethoscope className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Dr. Alejandro Rivas</span>
          </motion.div>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolucionando la medicina con tecnología de vanguardia y el toque humano más cálido. 
            Tu salud, nuestra pasión. Tu bienestar, nuestra misión.
          </p>
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/40">&copy; 2024 Dr. Alejandro Rivas. Transformando vidas, un paciente a la vez.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;