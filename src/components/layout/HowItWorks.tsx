import { useEffect, useRef, useState } from "react";
import iconExplore from '../../assets/images/explorador-de-internet.png';
import iconBuy from '../../assets/images/forma-de-pagamento.png';
import iconSell from '../../assets/images/negocios-internacionais.png';

const steps = [
    {
        id: 1,
        icon: iconExplore,
        title: "Explore & Descubra",
        desc: "Navegue por milhares de produtos e serviços de empresas e startups verificadas."
    },
    {
        id: 2,
        icon: iconBuy,
        title: "Compre com Segurança",
        desc: "Pagamentos protegidos, frete calculado automaticamente e suporte multilíngue."
    },
    {
        id: 3,
        icon: iconSell,
        title: "Venda & Cresça",
        desc: "Configure sua loja em minutos e alcance clientes em mais de 15 setores diferentes."
    }
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [progress, setProgress] = useState(0);
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    useEffect(() => {
        const onScroll = () => {
            const section = sectionRef.current;
            if (!section) return;
            const rect = section.getBoundingClientRect();
            const vh = window.innerHeight || document.documentElement.clientHeight;

            // compute progress of section visibility (0..1)
            const total = rect.height + vh;
            const scrolled = Math.min(Math.max((vh - rect.top) / total, 0), 1);
            setProgress(scrolled);

            // find which step is closest to viewport center
            let closest: number | null = null;
            let best = Infinity;
            stepRefs.current.forEach((el, idx) => {
                if (!el) return;
                const r = el.getBoundingClientRect();
                const center = r.top + r.height / 2;
                const dist = Math.abs(center - vh / 2);
                if (dist < best) {
                    best = dist;
                    closest = idx;
                }
            });
            setActiveIdx(closest);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} id="como-funciona" className="relative bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-primary mb-2">Como Funciona</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Três passos simples para começar a comprar ou vender no marketplace empresarial mais inovador.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* center track */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-1 flex items-start justify-center">
                        <div className="w-1 h-full bg-gray-200 rounded-full relative">
                            <div
                                ref={trackRef}
                                className="absolute left-0 top-0 w-1 bg-linear-to-t from-primary to-tertiary rounded-full origin-top"
                                style={{ height: `${progress * 100}%`, transition: 'height 120ms linear' }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {steps.map((step, idx) => {
                            // icon on right only when step id === 2
                            const isIconLeft = step.id !== 2;
                            return (
                                <div
                                    key={step.id}
                                    ref={(el) => { stepRefs.current[idx] = el }}
                                    className="grid grid-cols-12 gap-4 items-center mb-12"
                                >
                                    {/* left column: show icon on left when isIconLeft, otherwise show content */}
                                    <div className={`col-span-12 md:col-span-5 ${isIconLeft ? 'flex justify-end pr-6' : 'flex justify-start pl-6'}`}>
                                        {isIconLeft ? (
                                            <div className="flex items-center justify-end w-full">
                                                <img src={step.icon} alt={step.title} className="w-32 h-32 object-contain" />
                                            </div>
                                        ) : (
                                            <div className="w-full flex flex-col items-end text-right">
                                                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                                                    {step.id}
                                                </span>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{`${step.title}`}</h3>
                                                    <p className="text-gray-600">{step.desc}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* center column - keeps space for the track */}
                                    <div className="col-span-12 md:col-span-2 flex justify-center">
                                        <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                                            <div className={`w-3 h-3 rounded-full ${activeIdx === idx ? 'bg-primary' : 'bg-gray-300'}`} />
                                        </div>
                                    </div>

                                    {/* right column: show content on right when isIconLeft, otherwise show icon */}
                                    <div className={`col-span-12 md:col-span-5 ${isIconLeft ? 'flex flex-col gap-4' : 'flex justify-start pl-6'}`}>
                                        {isIconLeft ? (
                                            <>
                                                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                                    {step.id}
                                                </span>
                                                <div className="w-full">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{`${step.title}`}</h3>
                                                    <p className="text-gray-600">{step.desc}</p>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-start w-full">
                                                <img src={step.icon} alt={step.title} className="w-32 h-32 object-contain" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

