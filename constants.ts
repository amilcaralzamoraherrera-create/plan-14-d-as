
import type { Question, ProfileDetails, ProfileType } from './types';
import { ProfileType as PT } from './types';

export const QUESTIONS_MATRIX: Question[] = [
  {
    id: 'P1',
    question: '¿Cómo reaccionas ante una crítica o un conflicto?',
    options: [
      { profile: PT.AS, text: 'Le doy vueltas y me lo tomo personal por días.' },
      { profile: PT.SE, text: 'Busco una distracción placentera de inmediato.' },
      { profile: PT.AD, text: 'Lo evito o me da igual, no tengo energía para enfrentarlo.' },
      { profile: PT.DP, text: 'Lo analizo en exceso para ver dónde pude fallar.' },
    ],
  },
  {
    id: 'P2',
    question: 'Cuando estás solo, ¿en qué se enfoca tu mente?',
    options: [
      { profile: PT.SE, text: 'En buscar estímulos (música, videos, etc.).' },
      { profile: PT.AS, text: 'En repasar preocupaciones o planes futuros.' },
      { profile: PT.AD, text: 'En "niebla mental" o en blanco.' },
      { profile: PT.DP, text: 'En saltar entre ideas o tareas pendientes.' },
    ],
  },
  {
    id: 'P3',
    question: 'Tu método principal para evitar sentimientos difíciles es...',
    options: [
      { profile: PT.AS, text: 'Rumiar y buscar una solución "perfecta" mentalmente.' },
      { profile: PT.SE, text: 'Escapar con distracciones de alta intensidad (comida, compras).' },
      { profile: PT.AD, text: 'Caer en el letargo o la inacción.' },
      { profile: PT.DP, text: 'Intentar trabajar o hacer más cosas.' },
    ],
  },
  {
    id: 'P4',
    question: 'Tu mayor problema al terminar una tarea es...',
    options: [
      { profile: PT.AS, text: 'El miedo a ser juzgado o a los errores.' },
      { profile: PT.SE, text: 'Me distraen proyectos nuevos y más emocionantes.' },
      { profile: PT.AD, text: 'Fatiga o sentir que ya no me importa.' },
      { profile: PT.DP, text: 'Nunca está "suficientemente bien" (perfección).' },
    ],
  },
  {
    id: 'P5',
    question: 'Al consumir redes sociales o videos, ¿qué te describe mejor?',
    options: [
      { profile: PT.AD, text: 'No me interesan o los uso por pura obligación social.' },
      { profile: PT.DP, text: 'Los uso para aprender u organizar ideas.' },
      { profile: PT.AS, text: 'Los reviso por miedo a perderme algo o por preocupación.' },
      { profile: PT.SE, text: 'Tiendo al "scroll" infinito, buscando la siguiente dosis de contenido.' },
    ],
  },
  {
    id: 'P6',
    question: 'Si tienes un tiempo libre sin planificar, ¿qué haces?',
    options: [
      { profile: PT.SE, text: 'Busco activamente algo que me dé un "subidón" o emoción.' },
      { profile: PT.AD, text: 'Me rindo a la inercia o al sueño.' },
      { profile: PT.DP, text: 'Intento llenar el tiempo con micro-tareas.' },
      { profile: PT.AS, text: 'Me pongo ansioso por lo que "debería" estar haciendo.' },
    ],
  },
  {
    id: 'P7',
    question: 'Cuando sientes "hambre" emocional o estrés, ¿qué buscas?',
    options: [
      { profile: PT.DP, text: 'Información, un nuevo curso, o algo que organizar.' },
      { profile: PT.AD, text: 'Nada, solo una sensación de vacío o desinterés.' },
      { profile: PT.SE, text: 'Una recompensa inmediata (snack, estimulantes, compras).' },
      { profile: PT.AS, text: 'Reafirmación de otros o una respuesta que me calme.' },
    ],
  },
  {
    id: 'P8',
    question: 'Si empiezas un nuevo proyecto, ¿qué es lo más probable?',
    options: [
      { profile: PT.AS, text: 'Me obsesiono con no cometer errores.' },
      { profile: PT.AD, text: 'Lo dejo por falta de esfuerzo o energía.' },
      { profile: PT.SE, text: 'El entusiasmo se va si el progreso es lento.' },
      { profile: PT.DP, text: 'Lo convierto en un plan de acción demasiado complejo.' },
    ],
  },
  {
    id: 'P9',
    question: '¿Cómo describirías tu umbral de aburrimiento?',
    options: [
      { profile: PT.AD, text: 'Es alto, acepto el aburrimiento sin luchar mucho.' },
      { profile: PT.AS, text: 'Difícil de sentir, mi mente ya está llena de preocupaciones.' },
      { profile: PT.DP, text: 'Bajo, lo combato llenando cada segundo con tareas.' },
      { profile: PT.SE, text: 'Extremadamente bajo, necesito novedad constante.' },
    ],
  },
  {
    id: 'P10',
    question: 'Al despertar, tu sentimiento predominante es...',
    options: [
      { profile: PT.DP, text: 'Necesidad de revisar la agenda o planificar el día.' },
      { profile: PT.SE, text: 'Ansiedad por empezar a hacer cosas o revisar el teléfono.' },
      { profile: PT.AD, text: 'Inercia, desgana o falta de motivación.' },
      { profile: PT.AS, text: 'Inquietud o estado de alerta por posibles problemas.' },
    ],
  },
  {
    id: 'P11',
    question: '¿Cuál de estas frases te describe mejor?',
    options: [
      { profile: PT.AD, text: '"Siento que no tengo la energía o el impulso para esforzarme."' },
      { profile: PT.DP, text: '"Siempre hay algo que debo corregir, mejorar o añadir a mis planes."' },
      { profile: PT.AS, text: '"Necesito validación de otros para sentirme seguro(a) o valioso(a)."' },
      { profile: PT.SE, text: '"El día a día es aburrido y necesito estímulos fuertes."' },
    ],
  },
  {
    id: 'P12',
    question: '¿Qué haces cuando intentas relajarte por la noche?',
    options: [
      { profile: PT.AS, text: 'Me resulta difícil, la tensión mental me lo impide.' },
      { profile: PT.DP, text: 'Empiezo a organizar o planificar, la inactividad me resulta improductiva.' },
      { profile: PT.SE, text: 'Me engancho a un placer instantáneo (contenido rápido, snacks).' },
      { profile: PT.AD, text: 'Me duermo o me quedo sin interés por una actividad.' },
    ],
  },
  {
    id: 'P13',
    question: '¿Cómo te sientes al iniciar un nuevo desafío?',
    options: [
      { profile: PT.DP, text: 'Me abruman los detalles, me cuesta arrancar por la ambición del plan.' },
      { profile: PT.AS, text: 'Me genera ansiedad por la presión y las expectativas.' },
      { profile: PT.SE, text: 'Me emociona mucho, pero sé que el interés puede ser corto.' },
      { profile: PT.AD, text: 'Me siento apático o sin energía para el esfuerzo.' },
    ],
  },
  {
    id: 'P14',
    question: 'Tu nivel de interés en hobbies que antes disfrutabas es...',
    options: [
      { profile: PT.SE, text: 'Salta entre actividades, me aburro y busco otra cosa.' },
      { profile: PT.AS, text: 'Disfruto, pero la preocupación por los resultados siempre está presente.' },
      { profile: PT.DP, text: 'Solo disfruto si veo progreso o lo hago a la perfección.' },
      { profile: PT.AD, text: 'Ha disminuido o desaparecido; ya no me generan emoción.' },
    ],
  },
  {
    id: 'P15',
    question: '¿Cómo sería tu fin de semana ideal?',
    options: [
      { profile: PT.AS, text: 'Habiendo completado tareas, con tiempo para analizar y planificar el futuro.' },
      { profile: PT.DP, text: 'Dedicado a un proyecto que requiera concentración y detalle.' },
      { profile: PT.AD, text: 'Quedarme en casa en quietud o letargo, sin compromisos.' },
      { profile: PT.SE, text: 'Lleno de actividades nuevas, emocionantes o socialización activa.' },
    ],
  },
  {
    id: 'P16',
    question: '¿Cómo abordas el aprendizaje de una nueva habilidad?',
    options: [
      { profile: PT.DP, text: 'Me concentro en el método "perfecto" antes de empezar a practicar.' },
      { profile: PT.AD, text: 'Lo veo como demasiado esfuerzo, es mejor no intentarlo.' },
      { profile: PT.AS, text: 'Me preocupo más por lo que podría salir mal que por aprender.' },
      { profile: PT.SE, text: 'Me lanzo sin planear y me aburro cuando se vuelve técnico.' },
    ],
  },
  {
    id: 'P17',
    question: '¿Cómo es tu espacio de trabajo o estudio?',
    options: [
      { profile: PT.AD, text: 'No me molesta el desorden; me da pereza limpiar.' },
      { profile: PT.SE, text: 'Desordenado, lleno de cosas que me dan placer o me distraen.' },
      { profile: PT.DP, text: 'Intento organizarlo, pero se convierte en caos de múltiples proyectos a medio terminar.' },
      { profile: PT.AS, text: 'Pulcro y ordenado; el desorden me genera ansiedad.' },
    ],
  },
  {
    id: 'P18',
    question: 'Cuando estás trabajando, ¿qué te dispersa más?',
    options: [
      { profile: PT.SE, text: 'Buscar excusas para un break o una gratificación.' },
      { profile: PT.DP, text: 'Ideas constantes de mejora o nuevas tareas que interrumpen el flujo.' },
      { profile: PT.AS, text: 'Ansiedad por el tiempo o la perfección me hace perder el foco.' },
      { profile: PT.AD, text: 'Neblina mental o sensación de fatiga.' },
    ],
  },
  {
    id: 'P19',
    question: '¿Cómo te sientes respecto a delegar tareas?',
    options: [
      { profile: PT.AS, text: 'Me cuesta pedir ayuda por miedo a ser percibido como débil.' },
      { profile: PT.DP, text: 'Me cuesta porque nadie lo hará con el nivel de perfección que exijo.' },
      { profile: PT.AD, text: 'Me da igual; si alguien más lo hace, mejor, así me ahorro el esfuerzo.' },
      { profile: PT.SE, text: 'Lo hago solo si me aburre, sin importar cómo se haga el resultado.' },
    ],
  },
  {
    id: 'P20',
    question: '¿Qué haces cuando sientes que estás estancado en un problema?',
    options: [
      { profile: PT.AD, text: 'Me rindo y espero a que la motivación me fuerce a moverme.' },
      { profile: PT.DP, text: 'Intento solucionarlo agregando más trabajo o información al plan.' },
      { profile: PT.AS, text: 'Me angustio, me paralizo y rumio la posibilidad de fracaso.' },
      { profile: PT.SE, text: 'Abandono y busco una tarea o distracción totalmente diferente.' },
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
