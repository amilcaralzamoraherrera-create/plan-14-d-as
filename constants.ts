import type { Question, ProfileDetails, ProfileType } from './types';
import { ProfileType as PT } from './types';

export const QUESTIONS_MATRIX: Question[] = [
  {
    id: 'P1',
    question: '¿Cómo manejas la Crítica o Conflicto?',
    options: [
      { profile: PT.SE, text: 'Reacciono o Huyo.' },
      { profile: PT.DP, text: 'Analizo obsesivamente una solución.' },
      { profile: PT.AD, text: 'Evito la confrontación.' },
      { profile: PT.AS, text: 'Siento culpa y lo tengo en mi cabeza por días.' },
    ],
  },
  {
    id: 'P2',
    question: '¿Cuál es tu relación con el Descanso?',
    options: [
      { profile: PT.AS, text: 'Las ideas circulares no me dejan dormir.' },
      { profile: PT.SE, text: 'No puedo relajarme; necesito hacer algo.' },
      { profile: PT.AD, text: 'Duermo de más.' },
      { profile: PT.DP, text: 'Siento culpa si descanso con tareas pendientes.' },
    ],
  },
  {
    id: 'P3',
    question: 'Tu mayor obstáculo al terminar algo es...',
    options: [
      { profile: PT.DP, text: 'El detalle: Nunca está lo suficientemente bien.' },
      { profile: PT.SE, text: 'La distracción.' },
      { profile: PT.AD, text: 'La fatiga o la apatía (ya no me importa).' },
      { profile: PT.AS, text: 'Miedo al juicio de los demás.' },
    ],
  },
  {
    id: 'P4',
    question: '¿Te cuesta Delegar?',
    options: [
      { profile: PT.SE, text: 'Lo hago si me aburre, sin preocuparme del resultado.' },
      { profile: PT.AS, text: 'Sí, tengo miedo a molestar o a parecer débil.' },
      { profile: PT.AD, text: 'Mejor que lo haga otro (ahorro esfuerzo).' },
      { profile: PT.DP, text: 'Nadie alcanza mi nivel de detalle/perfección.' },
    ],
  },
  {
    id: 'P5',
    question: '¿Qué haces cuando te sientes mal?',
    options: [
      { profile: PT.AS, text: 'Rumio y analizo.' },
      { profile: PT.DP, text: 'Intento "trabajar" más.' },
      { profile: PT.SE, text: 'Escapo con placeres.' },
      { profile: PT.AD, text: 'Inacción/Letargo. Me da igual.' },
    ],
  },
  {
    id: 'P6',
    question: '¿Cuál es tu interés en hobbies?',
    options: [
      { profile: PT.AS, text: 'Preocupación por el resultado.' },
      { profile: PT.DP, text: 'Solo si puedo ver progreso claro.' },
      { profile: PT.SE, text: 'Salto de uno a otro.' },
      { profile: PT.AD, text: 'Ha desaparecido (las cosas ya no me emocionan).' },
    ],
  },
  {
    id: 'P7',
    question: 'Tu Umbral de Aburrimiento es...',
    options: [
      { profile: PT.SE, text: 'Extremadamente bajo; necesito novedad constante.' },
      { profile: PT.AS, text: 'No lo siento; mi mente ya está llena de preocupaciones.' },
      { profile: PT.AD, text: 'Alto; acepto el aburrimiento sin mucha lucha.' },
      { profile: PT.DP, text: 'Bajo; lo lleno con una lista de tareas mentales.' },
    ],
  },
  {
    id: 'P8',
    question: 'Tu enfoque al Planificar es...',
    options: [
      { profile: PT.AD, text: 'No planifico.' },
      { profile: PT.DP, text: 'Detalle excesivo.' },
      { profile: PT.AS, text: 'Planifico por ansiedad.' },
      { profile: PT.SE, text: 'Prefiero la improvisación.' },
    ],
  },
  {
    id: 'P9',
    question: 'Cuando estás solo, tu mente...',
    options: [
      { profile: PT.DP, text: 'Salta entre tareas o pendientes.' },
      { profile: PT.AD, text: 'Está en blanco "niebla mental".' },
      { profile: PT.SE, text: 'Busca estimulación.' },
      { profile: PT.AS, text: 'Repasa preocupaciones y errores pasados.' },
    ],
  },
  {
    id: 'P10',
    question: 'Ante una tarea lenta o complicada.',
    options: [
      { profile: PT.SE, text: 'Me inquieto.' },
      { profile: PT.DP, text: 'La idea de que no salga todo perfecto me inquieta.' },
      { profile: PT.AD, text: 'Me rindo.' },
      { profile: PT.AS, text: 'Me pongo ansioso.' },
    ],
  },
  {
    id: 'P11',
    question: 'Redes y Videos son...',
    options: [
      { profile: PT.AD, text: 'No me interesan.' },
      { profile: PT.AS, text: 'Miedo a perder tiempo.' },
      { profile: PT.SE, text: 'Una dosis constante.' },
      { profile: PT.DP, text: 'Una herramienta para buscar estrategias.' },
    ],
  },
  {
    id: 'P12',
    question: 'Tu Fin de Semana Ideal es...',
    options: [
      { profile: PT.AD, text: 'Quietud, no hacer nada.' },
      { profile: PT.DP, text: 'Proyecto detallados.' },
      { profile: PT.AS, text: 'Ver mi futuro, qué puedo hacer.' },
      { profile: PT.SE, text: 'Viajes, planes, Salidas.' },
    ],
  },
  {
    id: 'P13',
    question: 'Ante el estrés, ¿qué buscas?',
    options: [
      { profile: PT.AS, text: 'Reafirmación, apoyo.' },
      { profile: PT.AD, text: 'Vacío, falta de interés.' },
      { profile: PT.DP, text: 'Querer entenderlo todo, paso a paso.' },
      { profile: PT.SE, text: 'Distracciones, salidas, estímulos.' },
    ],
  },
  {
    id: 'P14',
    question: 'Al iniciar un nuevo desafío, sientes...',
    options: [
      { profile: PT.DP, text: 'Me abruman los pasos a seguir.' },
      { profile: PT.SE, text: 'Emoción inicial que temo no me durará.' },
      { profile: PT.AD, text: 'Apatía/Cansancio, desinterés.' },
      { profile: PT.AS, text: 'Ansiedad por la presión de hacerlo bien.' },
    ],
  },
  {
    id: 'P15',
    question: 'La frase que mejor te describe:',
    options: [
      { profile: PT.AD, text: 'No tengo la energía para esforzarme.' },
      { profile: PT.AS, text: 'Falta de confianza en mi mismo y miedo el futuro.' },
      { profile: PT.SE, text: 'Necesito estímulos fuertes.' },
      { profile: PT.DP, text: 'Debo corregir o mejorar siempre mis planes.' },
    ],
  },
  {
    id: 'P16',
    question: 'Tu atención al trabajar es...',
    options: [
      { profile: PT.AS, text: 'Mente saltarina, ideas del pasado o la culpa me agotan.' },
      { profile: PT.DP, text: 'Ansiedad y perfeccionismo no me permiten avanzar.' },
      { profile: PT.AD, text: 'Neblina mental o fatiga me desconcentran.' },
      { profile: PT.SE, text: 'Busco gratificación (pausas, teléfono, snack).' },
    ],
  },
];

export const PROFILE_DETAILS: Record<ProfileType, ProfileDetails> = {
  [PT.AS]: {
    title: 'Eres un Ansioso Silencioso (AS).',
    fullName: 'Ansioso Silencioso',
    visual: null,
    challenge: 'Tu mente es un motor que nunca descansa, consumida por la rumiación silenciosa y el miedo al juicio. Esta ansiedad constante es tu forma de buscar dopamina ("seguridad"), lo que te deja exhausto y paralizado.',
    compassion: 'No eres débil; estás sobrecargado. Es hora de darle a tu mente la claridad que se merece. Nuestro plan se enfoca en técnicas de atención plena oriental para transformar la tensión en paz interior y movimiento.',
    purpose: 'Pasarás de la Rumiación al Foco Sereno.',
    image: 'https://i.postimg.cc/htp4rjWv/pexels-cottonbro-7351144.jpg',
  },
  [PT.SE]: {
    title: 'Eres un Buscador de Estímulos (SE).',
    fullName: 'Buscador de Estímulos',
    visual: null,
    challenge: 'Vives para el próximo "subidón". Tu sistema de dopamina está saturado por la gratificación instantánea (redes, juegos, snacks), lo que hace que todo lo que requiere esfuerzo a largo plazo se sienta aburrido e insoportable.',
    compassion: 'No estás condenado al aburrimiento; solo necesitas reajustar tu "termómetro de la felicidad". Es hora de recuperar tu tiempo y tu foco. Nuestro plan te enseñará neurociencia del comportamiento para obtener satisfacción de logros reales, no solo de notificaciones.',
    purpose: 'Pasarás de la Búsqueda Impulsiva al Disfrute Sostenible.',
    image: 'https://i.postimg.cc/tgJqmjp7/pexels-tima-miroshnichenko-7047010-1.jpg',
  },
  [PT.AD]: {
    title: 'Eres un Apático Desmotivado (AD).',
    fullName: 'Apático Desmotivado',
    visual: null,
    challenge: 'Sientes una profunda falta de inercia y energía. La apatía te paraliza, haciendo que el esfuerzo más pequeño se sienta agotador. Esto es una señal de que tu sistema está agotado por la sobrecarga o el burnout pasado.',
    compassion: 'Es válido sentirse agotado. Tu mente está pidiendo un reinicio compasivo. Nuestro plan no te pedirá esfuerzos gigantes, sino pequeños pasos estratégicos y sabiduría oriental para reconstruir el impulso y la alegría por la vida.',
    purpose: 'Pasarás del Letargo a la Energía Revitalizada.',
    image: 'https://i.postimg.cc/k5GJhmq7/pexels-cottonbro-4114855.jpg',
  },
  [PT.DP]: {
    title: 'Eres un Disperso Perfeccionista (DP).',
    fullName: 'Disperso Perfeccionista',
    visual: null,
    challenge: 'Intentas hacerlo todo perfectamente, lo que resulta en dispersión, procrastinación por abrumación y proyectos incompletos. Te enfocas tanto en el cómo debe ser perfecto, que olvidas el hacer real.',
    compassion: 'Tu potencial no se mide por la cantidad de ideas, sino por la cantidad de logros. Es hora de dejar de planear y empezar a actuar. Nuestro plan te dará el marco simple y riguroso que necesitas para enfocar tu energía y completar lo que realmente importa.',
    purpose: 'Pasarás de la Dispersión a la Productividad Clara.',
    image: 'https://i.postimg.cc/d03sSYw0/pexels-ola-dapo-1754561-3345882.jpg',
  },
};
