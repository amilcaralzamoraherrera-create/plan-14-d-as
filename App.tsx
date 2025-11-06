
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { QUESTIONS_MATRIX, PROFILE_DETAILS } from './constants';
import type { Question, ProfileType, AnswerCounts, Option } from './types';

// Helper function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// --- HELPER & UI COMPONENTS (Defined outside main App to prevent re-renders) ---

const CTAButton: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string }> = ({ onClick, children, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-full max-w-md py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out ${className}`}
  >
    {children}
  </button>
);

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="w-full max-w-2xl mx-auto text-center animate-fade-in">
            {children}
        </div>
    </div>
);

const AnimatedProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full max-w-md bg-gray-700 rounded-full h-2.5 my-4 mx-auto">
        <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
        ></div>
    </div>
);

// --- SCREEN COMPONENTS ---

const Screen1: React.FC<{ onNext: () => void }> = ({ onNext }) => (
    <ScreenWrapper>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-4">
            ¡DESINTOXICA TU MENTE EN 14 DÍAS!
        </h1>
        <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">Descubre tu tipo de Mente.</h2>
        <p className="text-lg text-gray-400 mb-8">Mejora tú mismo con un Plan Personalizado para ti.</p>
        <p className="text-md text-blue-400 font-semibold mb-10">Solo 3 minutos de test.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onNext} className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all duration-300 flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                <span className="text-lg font-bold">Masculino</span>
            </button>
            <button onClick={onNext} className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-pink-500 hover:bg-gray-700 transition-all duration-300 flex-1">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                <span className="text-lg font-bold">Femenino</span>
            </button>
        </div>
    </ScreenWrapper>
);

const Screen2: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const ageRanges = ["18–24", "25–34", "35–44", "45–54", "55–64", "65 o más"];
    return (
        <ScreenWrapper>
            <h2 className="text-3xl font-bold mb-8">¿Qué rango de edad tienes?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                {ageRanges.map(age => (
                    <button key={age} onClick={onNext} className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all duration-300 text-lg font-medium">
                        {age}
                    </button>
                ))}
            </div>
            <p className="text-lg text-gray-400 mb-6">Más de 2 millones de personas ya están usando este plan.</p>
            <CTAButton onClick={onNext}>Continuar</CTAButton>
        </ScreenWrapper>
    );
};

const Screen3: React.FC<{ questions: Question[], onAnswer: (profile: ProfileType) => void, currentQuestionIndex: number }> = ({ questions, onAnswer, currentQuestionIndex }) => {
    if (!questions.length) return <ScreenWrapper><p>Cargando preguntas...</p></ScreenWrapper>;
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / questions.length) * 100;

    return (
        <ScreenWrapper>
            <AnimatedProgressBar progress={progress} />
            <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-8 h-24 flex items-center justify-center">{currentQuestion.question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option: Option, index: number) => (
                        <button
                            key={index}
                            onClick={() => onAnswer(option.profile)}
                            className="w-full text-left p-4 bg-gray-700 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </ScreenWrapper>
    );
};

const Screen4: React.FC<{ onNext: () => void }> = ({ onNext }) => (
    <ScreenWrapper>
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">Tu plan se basa en la Ciencia y la Sabiduría.</h2>
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-left">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">¿En qué fundamentos se basa nuestro plan de 14 días?</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
                Nuestro programa utiliza una metodología única: combina técnicas validadas de Neurociencia Aplicada y Psicología Cognitiva con la profunda Sabiduría Oriental sobre el equilibrio mental. Esta fusión garantiza una desintoxicación de dopamina efectiva, sostenible y natural.
            </p>
        </div>
        <div className="mt-10">
             <CTAButton onClick={onNext}>Continuar</CTAButton>
        </div>
    </ScreenWrapper>
);

const Screen5: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onNext, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const testimonials = [
      { name: "Carlos M.", text: "¡Increíble! En solo unos días sentí un cambio radical en mi enfoque." },
      { name: "Laura G.", text: "Este plan me devolvió la energía que creía perdida para siempre." },
      { name: "Javier R.", text: "Por fin entiendo por qué procrastinaba. ¡Totalmente recomendado!" },
    ];

    return (
        <ScreenWrapper>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Estamos analizando tus 28 respuestas y creando tu perfil mental único…</h2>
            <AnimatedProgressBar progress={progress} />
            <p className="text-lg text-gray-400 mb-12">Un experto en comportamiento está consolidando tu análisis, basado en evidencia científica y principios psicológicos/espirituales.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-300 italic">"{t.text}"</p>
                  <p className="text-right font-bold mt-2 text-blue-400">- {t.name}</p>
                </div>
              ))}
            </div>
        </ScreenWrapper>
    );
};

const Screen6: React.FC<{ onNext: () => void }> = ({ onNext }) => (
    <ScreenWrapper>
        <h2 className="text-5xl font-extrabold mb-4">¡CASI LISTO! 🚀</h2>
        <p className="text-xl text-gray-300 max-w-xl mx-auto mb-10">Empieza por estos 14 días e inicia una nueva etapa de tu vida: más foco, menos estrés y más energía.</p>
        <CTAButton onClick={onNext}>Continuar con el Plan Personalizado</CTAButton>
    </ScreenWrapper>
);

const Screen7: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };
    return (
        <ScreenWrapper>
            <h2 className="text-3xl font-bold mb-6">Recibe tu Plan Exclusivo.</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col gap-6">
                <input type="text" placeholder="Nombre" required className="w-full p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Correo electrónico" required className="w-full p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <CTAButton onClick={() => {}}>Enviar formulario</CTAButton>
            </form>
        </ScreenWrapper>
    );
};

const Screen8: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ScreenWrapper>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 w-full max-w-lg mx-auto">
                <h3 className="text-2xl font-bold mb-8">Creando tu Plan Personalizado basado en tu perfil</h3>
                <div className="flex justify-around items-end h-48 mb-8">
                    <div className="flex flex-col items-center">
                        <div className={`w-16 bg-red-500 rounded-t-lg transition-all duration-1000 ease-out ${loading ? 'h-8' : 'h-16'}`}></div>
                        <span className="mt-2 text-sm font-semibold">Claridad Actual</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className={`w-16 bg-green-500 rounded-t-lg transition-all duration-1000 ease-out ${loading ? 'h-8' : 'h-40'}`}></div>
                        <span className="mt-2 text-sm font-semibold">Potencial en 14 Días</span>
                    </div>
                </div>
                <p className="text-lg font-semibold text-teal-400 mb-8">93% de usuarios reportan mayor claridad mental en la primera semana.</p>
                <CTAButton onClick={onNext}>Ver mi Resultado</CTAButton>
            </div>
        </ScreenWrapper>
    );
};

const Screen9: React.FC<{ profile: ProfileType }> = ({ profile }) => {
    const details = PROFILE_DETAILS[profile];
    if (!details) return <ScreenWrapper><p>Error al cargar el perfil.</p></ScreenWrapper>;

    return (
        <ScreenWrapper>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-6">
                ¡TU PLAN PERSONALIZADO ESTÁ LISTO!
            </h1>
            <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                <img src={details.image} alt={details.fullName} className="w-full h-48 object-cover" />
                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{details.title}</h2>
                    <div className="text-left space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg text-blue-400 mb-2">Tu Desafío</h3>
                            <p className="text-gray-300">{details.challenge}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-teal-400 mb-2">Mensaje Compasivo</h3>
                            <p className="text-gray-300">{details.compassion}</p>
                        </div>
                         <div>
                            <h3 className="font-semibold text-lg text-yellow-400 mb-2">Propósito en 14 Días</h3>
                            <p className="text-gray-200 font-bold text-xl">"{details.purpose}"</p>
                        </div>
                    </div>
                     <div className="mt-10">
                        <CTAButton onClick={() => alert('Redirigiendo al plan completo...')}>
                           Ver Mi Plan y Empezar Hoy
                        </CTAButton>
                    </div>
                </div>
            </div>
        </ScreenWrapper>
    );
};


// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [answers, setAnswers] = useState<AnswerCounts>({ AS: 0, SE: 0, AD: 0, DP: 0 });
    const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [dominantProfile, setDominantProfile] = useState<ProfileType | null>(null);

    useEffect(() => {
        const randomQuestions = shuffleArray(QUESTIONS_MATRIX);
        const randomOptionQuestions = randomQuestions.map(q => ({
            ...q,
            options: shuffleArray(q.options)
        }));
        setShuffledQuestions(randomOptionQuestions);
    }, []);

    const calculateResults = useCallback(() => {
        const scores = Object.entries(answers) as [ProfileType, number][];
        if (scores.length === 0) return;

        const [dominant] = scores.reduce((max, current) => (current[1] > max[1] ? current : max));
        setDominantProfile(dominant);
        setCurrentScreen(9);
    }, [answers]);

    const handleAnswer = (profile: ProfileType) => {
        setAnswers(prev => ({ ...prev, [profile]: prev[profile] + 1 }));
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setCurrentScreen(4); // Quiz finished, move to next step
        }
    };

    const advanceScreen = () => setCurrentScreen(prev => prev + 1);
    
    switch (currentScreen) {
        case 1: return <Screen1 onNext={advanceScreen} />;
        case 2: return <Screen2 onNext={advanceScreen} />;
        case 3: return <Screen3 questions={shuffledQuestions} onAnswer={handleAnswer} currentQuestionIndex={currentQuestionIndex} />;
        case 4: return <Screen4 onNext={advanceScreen} />;
        case 5: return <Screen5 onNext={advanceScreen} />;
        case 6: return <Screen6 onNext={advanceScreen} />;
        case 7: return <Screen7 onNext={advanceScreen} />;
        case 8: return <Screen8 onNext={calculateResults} />;
        case 9: return dominantProfile ? <Screen9 profile={dominantProfile} /> : <ScreenWrapper><p>Calculando resultados...</p></ScreenWrapper>;
        default: return <Screen1 onNext={advanceScreen} />;
    }
};

export default App;
