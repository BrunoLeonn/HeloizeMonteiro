import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ChevronRight, Star } from "lucide-react";
import fundoConsultorio from "./assets/fundo_consultorio.jpg";
import fotoPrincipal from "./assets/principal.png";
import fotoNoConsultorio from "./assets/foto_consultorio.jpeg";
import fotoOrtoPed from "./assets/orto_ped.png";
import fotoOrtoAdulto from "./assets/orto_adulto.png";
import fotoClareamento from "./assets/clareamento.png";
import fotoClinica from "./assets/clinica.png";
import fotoContato from "./assets/contato.png";
import logoUrl from "./assets/logo.png";

const WhatsAppButton = ({ className = "" }: { className?: string }) => (
  <a
    href="https://wa.me/5591981317707"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl ${className}`}
  >
    <MessageCircle size={20} />
    AGENDAR AVALIAÇÃO PELO WHATSAPP
  </a>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center md:text-left">
    <h2 className="text-4xl md:text-5xl text-primary mb-4">{title}</h2>
    {subtitle && <p className="text-secondary font-medium tracking-widest uppercase text-sm">{subtitle}</p>}
    <div className="w-20 h-1 bg-accent mt-4 mx-auto md:mx-0"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-auto md:h-screen min-h-[700px] flex items-center pt-24 md:pt-0 overflow-hidden">
        {/* Layer 1: Background (Blurred Clinic) */}
        <div className="absolute inset-0 z-0">
          <img
            src={fundoConsultorio}
            alt="Consultório Odontológico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>



        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
          <div className="grid md:grid-cols-2 items-center gap-12 h-full">
            {/* Layer 3: Text Content with Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* The Name - Main Heading */}
              <h1 className="text-7xl md:text-9xl font-script text-primary mb-8 leading-none drop-shadow-sm">
                Heloize <span className="block md:inline-block md:ml-10">Monteiro</span>
              </h1>

              {/* Translucent Card behind texts */}
              <div className="bg-white/40 backdrop-blur-xl border border-white/30 p-8 md:p-12 rounded-[40px] shadow-2xl max-w-2xl">
                <div className="space-y-6 text-primary">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed">
                    Transforme seu sorriso com quem entende de cuidado e técnica.
                  </p>
                  <div className="space-y-3 border-l-4 border-accent pl-6">
                    <p className="font-bold text-lg md:text-xl">
                      Dra. Heloize Monteiro | Ortodontia Especializada.
                    </p>
                    <p className="text-gray-800 text-lg">
                      Atendimento humanizado e tecnologia para um sorriso confiante.
                    </p>
                  </div>
                </div>

                {/* CTA Button in front */}
                <div className="mt-12">
                  <WhatsAppButton className="bg-[#A6635B] hover:bg-[#8E524A] w-full md:w-auto justify-center text-lg py-5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex md:hidden justify-center items-end mt-4 pointer-events-auto"
            >
              <img
                src={fotoPrincipal}
                alt="Dra. Heloize Monteiro"
                className="w-full max-w-sm h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Layer 4: Doctor Cutout (Right Side Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 z-10 hidden md:flex justify-end items-end pointer-events-none"
        >
          <img
            src={fotoPrincipal}
            alt="Dra. Heloize Monteiro"
            className="w-auto max-h-[90vh] object-contain object-right-bottom drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] pointer-events-auto"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="mb-6 flex justify-center md:justify-start">
              <img src={logoUrl} alt="Logo HM" className="h-28 object-contain opacity-50 mix-blend-multiply drop-shadow-sm" />
            </div>
            <SectionTitle title="Quem eu sou?" subtitle="Conheça a Dra." />
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Muito prazer, eu sou Heloize Monteiro. Sou cirurgiã-dentista, formada há 18 anos pela UFPA, e especialista em ortodontia pela ABO-PA.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dedico minha carreira a transformar sorrisos com responsabilidade e humanização, utilizando as técnicas mais modernas para garantir o melhor resultado para cada paciente.
            </p>
          </div>
          <div className="order-2">
            <div className="relative">
              <div className="rounded-t-full overflow-hidden border-4 border-accent/30 aspect-square">
                <img
                  src={fotoNoConsultorio}
                  alt="Dra. Heloize Monteiro em atendimento"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                <p className="text-3xl font-serif">18+</p>
                <p className="text-sm uppercase tracking-widest">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Serviços</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ortodontia Adulto",
                desc: "Melhora da mastigação, função e estética para sua qualidade de vida.",
                img: fotoOrtoAdulto
              },
              {
                title: "Ortopedia Pediátrica",
                desc: "Prevenção na infância para evitar tratamentos complexos e cirurgias no futuro.",
                img: fotoOrtoPed
              },
              {
                title: "Clareamento Dental",
                desc: "Dentes mais brancos e brilhantes para aumentar sua autoestima de forma rápida.",
                img: fotoClareamento
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
              >
                <div className="mb-6 rounded-xl overflow-hidden bg-white/5">
                  <img src={service.img} alt={service.title} className="w-full h-auto object-contain transition-all duration-500" />
                </div>
                <h3 className="text-2xl mb-4 text-accent">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-t-full overflow-hidden border-4 border-accent/30 aspect-[4/3]">
            <img
              src={fotoClinica}
              alt="Clínica Lume Vitta"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionTitle title="Onde estamos?" subtitle="Nossa Localização" />
            <p className="text-lg text-gray-700 mb-8">
              Visite nosso espaço: Um ambiente moderno e acolhedor pensado no seu conforto.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl text-primary font-semibold">Clínica Lume Vitta</h4>
                  <p className="text-gray-600">R. do Ibirapuera, 442, Castanhal, PA</p>
                </div>
              </div>
              <a
                href="https://share.google/vmFoJmkAQMnerhXOX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                VER NO MAPA <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-24 pb-0 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-end relative z-10">
          <div className="self-center pb-12 md:pb-0 z-30">
            <h2 className="text-5xl text-primary mb-6">Dúvidas?</h2>
            <p className="text-xl text-gray-700 mb-10">Fale direto comigo pelo WhatsApp.</p>
            <WhatsAppButton />
          </div>
          <div className="flex justify-center md:justify-end items-end -mt-16 md:-mt-32 z-20 relative">
            <img
              src={fotoContato}
              alt="Dra. Heloize Contato"
              className="w-full max-w-[600px] h-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl mb-6">Dra Heloize Monteiro</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Especialista em Ortodontia e Ortopedia Facial. CRO-PA 4420. Transformando vidas através do sorriso há 18 anos.
              </p>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-6 uppercase tracking-widest text-sm">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent" />
                  (91) 98131-7707
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-accent" />
                  heloizem@icloud.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-6 uppercase tracking-widest text-sm">Localização</h4>
              <p className="text-gray-400 flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                Clínica Lume Vitta, R. do Ibirapuera, 442, Castanhal, PA
              </p>
            </div>
            <div>
              <h4 className="text-accent font-semibold mb-6 uppercase tracking-widest text-sm">Social</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/heloizemonteiro/" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61586980890493" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs text-center md:text-left">
            <p>© 2026 Dra. Heloize Monteiro. Todos os direitos reservados.</p>
            <p>Fotos de casos clínicos publicadas com autorização (Res. CFO 196/2019).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
