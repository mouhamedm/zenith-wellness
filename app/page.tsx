import StackSpread from "@/components/ui/stack-spread";
import SocialCards from "@/components/ui/card-fan-carousel";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { CinematicFooter } from "@/components/ui/motion-footer";
import SiteHeader from "@/components/ui/site-header";
import SectionReveal from "@/components/ui/section-reveal";

const WELLNESS_CARDS = [
  { imgUrl: "/images/wellness/fan1.jpg",  alt: "Relaxation et massage profond" },
  { imgUrl: "/images/wellness/fan2.jpg",  alt: "Yoga matinal en plein air" },
  { imgUrl: "/images/wellness/fan3.jpg",  alt: "Cuisine saine et equilibree" },
  { imgUrl: "/images/wellness/fan4.jpg",  alt: "Seance de meditation guidee" },
  { imgUrl: "/images/wellness/fan5.jpg",  alt: "Soins corps premium" },
  { imgUrl: "/images/wellness/fan6.jpg",  alt: "Bain therapeutique aux huiles" },
  { imgUrl: "/images/wellness/fan7.jpg",  alt: "Soin du visage hydratant" },
  { imgUrl: "/images/wellness/fan8.jpg",  alt: "Yoga & etirements dynamiques" },
  { imgUrl: "/images/wellness/fan9.jpg",  alt: "Pratique de pleine conscience" },
  { imgUrl: "/images/wellness/fan10.jpg", alt: "Spa et aromatherapie" },
];

export default function Home() {
  return (
    <div className="relative w-full bg-background">

      {/* HEADER — non sticky, flotte sur le hero */}
      <SiteHeader />

      {/* HERO */}
      <StackSpread bgColor="#f5f3ef" textColor="#1a1a1a" scrollLength={220} />

      {/* SECTION 2 : Fan Carousel */}
      <section id="espaces" className="relative z-10 bg-background w-full py-16 md:py-32">
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center px-4 md:px-6 mb-8 md:mb-16 overflow-hidden">
            {/* Eyebrow — glisse depuis la gauche */}
            <p
              data-reveal="label"
              className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3 md:mb-4"
            >
              Notre univers
            </p>

            {/* Titre — chaque mot se revele avec un masque */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground leading-tight md:leading-none mb-4 md:mb-6 overflow-hidden">
              {["Explorez", "Nos", "Espaces"].map((word, i) => (
                <span
                  key={word}
                  className="inline-block mr-[0.25em]"
                  style={{ overflow: "hidden" }}
                >
                  <span
                    data-reveal="word"
                    className={`inline-block${
                      i === 2 ? " text-foreground/40" : ""
                    }`}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h2>

            {/* Sous-titre — fade + monte */}
            <p
              data-reveal="sub"
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Des espaces soigneusement concus pour votre detente et votre
              regeneration. Chaque soin, chaque moment, une experience unique.
            </p>
          </div>
        </SectionReveal>
        <SocialCards cards={WELLNESS_CARDS} />
      </section>

      {/* SECTION 3 : Story Scroll */}
      <FlowArt aria-label="Notre histoire et approche du bien-etre">

        <FlowSection id="histoire" aria-label="Qui nous sommes" style={{ backgroundColor: "#2d6a4f", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">01 — Qui nous sommes</p>
          <hr className="my-2.5 md:my-[2vw] border-t border-white/30" />
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.9] md:leading-[0.85] uppercase tracking-tight">
              Prendre<br />Soin<br />De Soi.
            </h2>
          </div>
          <hr className="my-2.5 md:my-[2vw] border-t border-white/30" />
          <p className="mt-auto max-w-[50ch] text-sm sm:text-base md:text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed opacity-90">
            Zenith est un centre de bien-etre holistique fonde sur une conviction simple : chaque personne merite un espace de paix, de soin et de renouveau profond.
          </p>
        </FlowSection>

        <FlowSection id="soins" aria-label="Notre approche holistique" style={{ backgroundColor: "#1b2a41", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">02 — Notre approche</p>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.9] md:leading-[0.85] uppercase tracking-tight">
              Corps<br />Esprit<br />Ame.
            </h2>
          </div>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <p className="max-w-[50ch] text-sm sm:text-base md:text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed opacity-90">
            Une approche globale qui unit les soins du corps, la clarte mentale et l&apos;equilibre emotionnel.
          </p>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-[3vw]">
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Massages</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Suedois, aux pierres chaudes, drainage lymphatique. Chaque technique choisie pour votre besoin precis.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Yoga &amp; Meditation</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Cours pour tous niveaux, sessions privees et retraites immersives guidees par nos instructeurs certifies.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Soins Spa</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Soins du visage, enveloppements, bains aromatherapeutiques. Une parenthese sensorielle complete.</p>
            </div>
          </div>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-[3vw]">
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Nutritherapie</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Consultations personnalisees avec nos nutritherapeutes pour accompagner votre vitalite de l&apos;interieur.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Aquatherapie</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Piscine therapeutique, bains bouillonnants et hydromassage pour denouer les tensions profondes.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Sophrologie</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Techniques de relaxation dynamique pour gerer le stress, ameliorer le sommeil et retrouver la serenite.</p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Votre parcours de soin" style={{ backgroundColor: "#f5f0e8", color: "#1a1a1a" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">03 — Votre parcours</p>
          <hr className="my-2 md:my-[2vw] border-t border-black/20" />
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.9] md:leading-[0.85] uppercase tracking-tight">
              Arriver.<br />Souffler.<br />Renaitre.
            </h2>
          </div>
          <hr className="my-2 md:my-[2vw] border-t border-black/20" />
          <p className="max-w-[50ch] text-sm sm:text-base md:text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed opacity-80">
            Un rituel d&apos;accueil pense pour que vous vous sentiez chez vous des les premiers instants.
          </p>
          <hr className="my-2 md:my-[2vw] border-t border-black/20" />
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-[3vw]">
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">01 — Accueil</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Consultation diagnostique gratuite. Nos praticiens ecoutent, comprennent, personnalisent.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">02 — Rituel</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Bain de vapeur, gommage corporel et moment de silence pour preparer votre corps au soin.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">03 — Soin</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Votre soin principal, realise par nos experts dans des cabines intimistes et apaisantes.</p>
            </div>
          </div>
          <hr className="my-2 md:my-[2vw] border-t border-black/20" />
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-[3vw]">
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">04 — Recuperation</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Salon de relaxation, tisanes et temps libre dans notre espace zen pour prolonger les bienfaits.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">05 — Conseils</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Recommandations personnalisees pour maintenir l&apos;equilibre entre chaque visite.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">06 — Suivi</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Programme sur mesure et rappels doux pour que le bien-etre devienne une pratique reguliere.</p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Nos engagements" style={{ backgroundColor: "#5c3d2e", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">04 — Nos engagements</p>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.9] md:leading-[0.85] uppercase tracking-tight">
              Nature<br />&amp;<br />Science.
            </h2>
          </div>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <p className="max-w-[50ch] text-sm sm:text-base md:text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed opacity-90">
            Produits 100% naturels, protocoles fondes sur la science, praticiens certifies. Aucun compromis sur votre sante.
          </p>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-[3vw]">
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">5 000+ clients</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Qui nous font confiance chaque annee pour leur equilibre et leur vitalite.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">98% satisfaits</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Taux de satisfaction recueilli apres chaque soin. Notre priorite absolue.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">100% naturel</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Produits certifies bio, sans parabenes, respectueux de l&apos;environnement et de votre peau.</p>
            </div>
          </div>
          <hr className="my-2 md:my-[2vw] border-t border-white/30" />
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-[3vw]">
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Eco-responsable</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Centre a energie solaire, zero plastique a usage unique, partenaires locaux et equitables.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Inclusif</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Accueil de toutes les morphologies, ages et conditions. Un espace ou chacun se sent bienvenu.</p>
            </div>
            <div className="min-w-0 md:min-w-[180px] flex-1">
              <p className="mb-0.5 md:mb-2 text-xs md:text-sm font-bold uppercase tracking-wider">Certifie</p>
              <p className="text-[11px] sm:text-xs md:text-[clamp(0.85rem,1.3vw,1.05rem)] leading-tight md:leading-relaxed opacity-60">Agrement national, membres de la Federation Francaise du Spa et du Bien-etre.</p>
            </div>
          </div>
        </FlowSection>

        <FlowSection aria-label="Votre invitation" style={{ backgroundColor: "#0d0d0d", color: "#fff" }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">05 — Votre invitation</p>
          <hr className="my-2.5 md:my-[2vw] border-t border-white/20" />
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.9] md:leading-[0.85] uppercase tracking-tight">
              Votre<br />Moment<br />Vous Attend.
            </h2>
          </div>
          <hr className="my-2.5 md:my-[2vw] border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] text-sm sm:text-base md:text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed opacity-80">
            Reservez votre premiere seance en ligne ou appelez-nous. Notre equipe est la pour vous guider vers le soin qui vous correspond vraiment.
          </p>
        </FlowSection>

      </FlowArt>

      {/* FOOTER */}
      <CinematicFooter />

    </div>
  );
}
