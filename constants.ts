
import type { Question, ProfileDetails, ProfileType } from './types';
import { ProfileType as PT } from './types';

export const QUESTIONS_MATRIX: Question[] = [
  {
    id: 'P1',
    question: '¿Cómo manejas las tareas importantes o los plazos de entrega?',
    options: [
      { profile: PT.AD, text: 'Me cuesta muchísimo empezar, pospongo la tarea hasta que la inercia me supera.' },
      { profile: PT.AS, text: 'Me preocupo mucho por el resultado, rumiando mis miedos en silencio.' },
      { profile: PT.DP, text: 'Me enfoco excesivamente en los detalles o la planificación previa.' },
      { profile: PT.SE, text: 'Busco una distracción placentera o un "subidón" de última hora para enfrentarla.' },
    ],
  },
  {
    id: 'P2',
    question: '¿Qué te frena más a la hora de tomar una decisión?',
    options: [
      { profile: PT.SE, text: 'La impaciencia; si no puedo decidir rápido, busco algo más emocionante para hacer.' },
      { profile: PT.DP, text: 'La necesidad de analizar todas las variables y opciones posibles.' },
      { profile: PT.AS, text: 'El miedo a equivocarme y a las posibles consecuencias negativas o al juicio.' },
      { profile: PT.AD, text: 'La sensación de que cualquier opción es igual o la falta de energía para elegir.' },
    ],
  },
  {
    id: 'P3',
    question: 'En una conversación social, ¿cuál es tu estado mental predominante?',
    options: [
      { profile: PT.DP, text: 'Me distraigo fácilmente con mis propias ideas o pensando en lo que debo hacer.' },
      { profile: PT.AD, text: 'Estoy algo desconectado(a) o apático(a), sin mucha motivación para contribuir.' },
      { profile: PT.SE, text: 'Busco activamente ser el centro de atención o contar una historia emocionante.' },
      { profile: PT.AS, text: 'Estoy pendiente de cómo me perciben y ensayando mentalmente lo que voy a decir.' },
    ],
  },
  {
    id: 'P4',
    question: '¿Cómo te sientes al enfrentarte a un conflicto o crítica?',
    options: [
      { profile: PT.AS, text: 'Me lo tomo muy personal, mi mente sigue reviviendo la situación por días.' },
      { profile: PT.DP, text: 'Analizo la crítica en exceso, pensando en cómo podría haber respondido perfectamente.' },
      { profile: PT.SE, text: 'Siento una urgencia por defenderme o buscar otra actividad que me haga sentir mejor.' },
      { profile: PT.AD, text: 'Lo evito o me da igual, no tengo la energía emocional para enfrentarlo.' },
    ],
  },
  {
    id: 'P5',
    question: 'Cuando estás solo(a), ¿qué hace tu mente de forma natural?',
    options: [
      { profile: PT.SE, text: 'Inmediatamente busca estimulación externa (música, videos, juegos, etc.).' },
      { profile: PT.AS, text: 'Tiende a repasar preocupaciones, planes futuros o errores del pasado.' },
      { profile: PT.AD, text: 'A menudo está en blanco o con una sensación de "niebla mental".' },
      { profile: PT.DP, text: 'Salta rápidamente entre ideas, proyectos o tareas pendientes, sin aterrizar.' },
    ],
  },
  {
    id: 'P6',
    question: '¿Cuál de las siguientes frases te describe mejor?',
    options: [
      { profile: PT.AD, text: 'Siento que no tengo el impulso o la energía para esforzarme en muchas cosas.' },
      { profile: PT.DP, text: 'Siento que siempre hay algo más que debo corregir, mejorar o añadir a mis planes.' },
      { profile: PT.AS, text: 'Siento que necesito la validación de los demás para sentir que valgo o estoy seguro(a).' },
      { profile: PT.SE, text: 'Siento que el día a día es aburrido y necesito estímulos fuertes que me motiven.' },
    ],
  },
  {
    id: 'P7',
    question: '¿Qué haces cuando intentas relajarte por la noche?',
    options: [
      { profile: PT.DP, text: 'Empiezo a organizar, limpiar o planificar algo, ya que la inactividad me resulta improductiva.' },
      { profile: PT.SE, text: 'Me engancho a un placer instantáneo (snack, redes, contenido rápido).' },
      { profile: PT.AS, text: 'La relajación es difícil, siempre hay un pensamiento que me mantiene en tensión.' },
      { profile: PT.AD, text: 'Me duermo o me quedo en el sofá, sin mucho interés por una actividad específica.' },
    ],
  },
  {
    id: 'P8',
    question: '¿Cómo reaccionas ante la lentitud o la monotonía de una tarea?',
    options: [
      { profile: PT.AS, text: 'Me pongo ansioso(a) por la pérdida de tiempo o lo que "debería" estar haciendo en su lugar.' },
      { profile: PT.SE, text: 'Me siento inquieto(a) y necesito buscar algo nuevo, emocionante o de "pico" de novedad.' },
      { profile: PT.DP, text: 'Intento llenar el tiempo haciendo varias micro-tareas o analizando cómo optimizar esa lentitud.' },
      { profile: PT.AD, text: 'Me siento completamente desmotivado(a) y me rindo a la inercia o al sueño.' },
    ],
  },
    {
    id: 'P9',
    question: '¿Cuál es tu relación con el consumo de redes sociales o videos?',
    options: [
      { profile: PT.AD, text: 'No me interesan mucho o los uso solo por obligación social.' },
      { profile: PT.DP, text: 'Los reviso en ráfagas de tiempo, para aprender, organizar ideas o buscar la mejor estrategia.' },
      { profile: PT.AS, text: 'Los reviso mucho, pero más por la preocupación de lo que se comparte o lo que me pierdo.' },
      { profile: PT.SE, text: 'Tiendo a consumir grandes cantidades, buscando constantemente la siguiente dosis de contenido (el "scroll").' },
    ],
  },
  {
    id: 'P10',
    question: '¿Qué sueles buscar cuando sientes "hambre" emocional o estrés?',
    options: [
      { profile: PT.DP, text: 'Información, un nuevo libro, un nuevo curso, o una forma de organizar mi entorno.' },
      { profile: PT.AD, text: 'Nada en particular, solo una sensación de vacío o falta de interés general.' },
      { profile: PT.SE, text: 'Comida chatarra, estimulantes, compras impulsivas o una recompensa inmediata.' },
      { profile: PT.AS, text: 'Una respuesta de los demás, o la reafirmación de que todo va a salir bien.' },
    ],
  },
    {
    id: 'P11',
    question: 'Si empiezas un nuevo hobby o proyecto, ¿qué ocurre?',
    options: [
      { profile: PT.AS, text: 'Me obsesiono con no cometer errores o no hacerlo tan bien como los demás.' },
      { profile: PT.AD, text: 'Lo dejo casi inmediatamente porque me resulta demasiado esfuerzo.' },
      { profile: PT.SE, text: 'Me entusiasma mucho al principio, pero si es lento, pierdo el interés rápidamente.' },
      { profile: PT.DP, text: 'Lo convierto inmediatamente en un plan de acción complejo y detallado.' },
    ],
  },
  {
    id: 'P12',
    question: '¿Cuál es tu método principal para evitar los sentimientos desagradables?',
    options: [
      { profile: PT.DP, text: 'Intentar "trabajar" más o hacer más cosas para que el sentimiento no tenga espacio.' },
      { profile: PT.SE, text: 'Escapar de ellos con distracciones de alta intensidad (entretenimiento, comida, etc.).' },
      { profile: PT.AD, text: 'Simplemente dejar de pensar en ellos y caer en un estado de letargo o inacción.' },
      { profile: PT.AS, text: 'Rumiar y analizarlos buscando una solución perfecta para la ansiedad.' },
    ],
  },
  {
    id: 'P13',
    question: '¿Cómo describes tu umbral de aburrimiento?',
    options: [
      { profile: PT.AD, text: 'Alto; me aburro, pero acepto el aburrimiento sin mucha lucha ni reacción.' },
      { profile: PT.AS, text: 'Difícil de sentir, porque mi mente ya está llena de preocupaciones y tensiones.' },
      { profile: PT.DP, text: 'Bajo; lo combato con una lista de tareas mentales para llenar cada segundo.' },
      { profile: PT.SE, text: 'Extremadamente bajo; necesito novedades constantes para sentirme vivo.' },
    ],
  },
  {
    id: 'P14',
    question: '¿Qué tipo de interrupción te distrae más en una tarea?',
    options: [
      { profile: PT.AS, text: 'Un pensamiento ansioso o la preocupación de si lo estoy haciendo bien o si es suficiente.' },
      { profile: PT.DP, text: 'Una idea de mejora o una nueva forma de hacer la tarea que rompe mi flujo.' },
      { profile: PT.AD, text: 'Una sensación de fatiga o la idea de que "no vale la pena" seguir.' },
      { profile: PT.SE, text: 'Una notificación, un sonido, o cualquier cosa que prometa gratificación instantánea.' },
    ],
  },
  {
    id: 'P15',
    question: '¿Cómo te sientes respecto a iniciar un nuevo desafío o proyecto?',
    options: [
      { profile: PT.DP, text: 'Lo planifico detalladamente, pero me abruman todos los pasos que debo dar.' },
      { profile: PT.AS, text: 'Me siento ansioso(a) por la presión de tener que hacerlo bien y las expectativas.' },
      { profile: PT.SE, text: 'Me emociona la novedad, pero temo que el interés no me dure mucho.' },
      { profile: PT.AD, text: 'Me siento apático(a) o con falta de energía, la idea del esfuerzo me resulta agotadora.' },
    ],
  },
  {
    id: 'P16',
    question: '¿Cuál de estas situaciones describe mejor tu relación con el descanso?',
    options: [
      { profile: PT.SE, text: 'Me cuesta relajarme, siempre tengo que estar haciendo algo o buscando entretenimiento.' },
      { profile: PT.AD, text: 'A menudo duermo más de lo necesario o uso el descanso como un escape.' },
      { profile: PT.DP, text: 'Me siento culpable por descansar si hay algo pendiente en mi lista de tareas.' },
      { profile: PT.AS, text: 'Me cuesta conciliar el sueño debido a la rumiación de pensamientos.' },
    ],
  },
  {
    id: 'P17',
    question: '¿Cómo es tu nivel de interés en actividades que antes disfrutabas?',
    options: [
      { profile: PT.AS, text: 'Disfruto, pero la preocupación por el tiempo que le dedico o los resultados siempre está presente.' },
      { profile: PT.DP, text: 'Solo disfruto si puedo ver un claro progreso o si lo estoy haciendo de la mejor manera.' },
      { profile: PT.AD, text: 'Ha disminuido o desaparecido; las actividades placenteras ya no me generan emoción.' },
      { profile: PT.SE, text: 'Mi interés salta entre actividades; disfruto algo un momento y luego busco otra cosa.' },
    ],
  },
  {
    id: 'P18',
    question: 'Al despertar, ¿cuál es tu sentimiento predominante?',
    options: [
      { profile: PT.DP, text: 'La necesidad de revisar mi agenda y asegurarme de que el día esté perfectamente estructurado.' },
      { profile: PT.SE, text: 'Ansiedad por empezar a hacer cosas, o revisar el teléfono/redes de inmediato.' },
      { profile: PT.AD, text: 'Inercia y desgana; me cuesta encontrar la motivación para empezar el día.' },
      { profile: PT.AS, text: 'Inquietud o un estado de alerta por lo que el día podría traer (preocupaciones).' },
    ],
  },
  {
    id: 'P19',
    question: '¿Cuál es tu reacción principal a las responsabilidades?',
    options: [
      { profile: PT.SE, text: 'Las atiendo solo si me ofrecen una recompensa inmediata o si son interesantes.' },
      { profile: PT.AS, text: 'Las asumo con mucha presión y temor a no cumplir con las expectativas.' },
      { profile: PT.DP, text: 'Las abordo, pero me detengo en los detalles o las complico demasiado.' },
      { profile: PT.AD, text: 'La pospongo indefinidamente, me siento paralizado(a) por la falta de voluntad.' },
    ],
  },
  {
    id: 'P20',
    question: 'Si pudieras pasar un fin de semana ideal, ¿cómo sería?',
    options: [
      { profile: PT.AS, text: 'Habiendo completado todas mis tareas pendientes, con tiempo para analizar y planificar el futuro.' },
      { profile: PT.DP, text: 'Dedicado a un proyecto que requiera mucha concentración y un alto nivel de detalle.' },
      { profile: PT.AD, text: 'Quedarme en casa sin hacer nada, en un estado de quietud o letargo.' },
      { profile: PT.SE, text: 'Lleno de actividades nuevas, emocionantes, viajes cortos o socialización activa.' },
    ],
  },
  {
    id: 'P21',
    question: '¿Qué te detiene a la hora de buscar ayuda o hacer un cambio?',
    options: [
      { profile: PT.SE, text: 'La impaciencia para ver resultados o la necesidad de una solución instantánea.' },
      { profile: PT.AS, text: 'El miedo de que la ayuda me exponga o me haga sentir más vulnerable.' },
      { profile: PT.DP, text: 'La dificultad para organizar y decidir el "plan perfecto" para pedir ayuda.' },
      { profile: PT.AD, text: 'La creencia de que no importa lo que haga, el esfuerzo no vale la pena.' },
    ],
  },
  {
    id: 'P22',
    question: '¿Cómo abordas el aprendizaje de una nueva habilidad?',
    options: [
      { profile: PT.DP, text: 'Me concentro en el método, investigo "la mejor manera", y me cuesta empezar porque el plan es ambicioso.' },
      { profile: PT.AD, text: 'La veo como algo que requiere demasiado esfuerzo, por lo que es mejor no intentarlo.' },
      { profile: PT.AS, text: 'Me preocupo más por lo que podría salir mal que por el proceso de aprendizaje en sí.' },
      { profile: PT.SE, text: 'Me lanzo sin planear, disfruto la emoción del descubrimiento y me aburro cuando se vuelve técnico.' },
    ],
  },
  {
    id: 'P23',
    question: '¿Cómo es tu espacio de trabajo o estudio?',
    options: [
      { profile: PT.AD, text: 'No me molesta el desorden; la limpieza me parece un esfuerzo innecesario.' },
      { profile: PT.SE, text: 'Suele ser desordenado, lleno de cosas que me dan placer o que me distraen fácilmente.' },
      { profile: PT.DP, text: 'Intento mantenerlo organizado, pero se convierte en un caos de múltiples proyectos a medio terminar.' },
      { profile: PT.AS, text: 'Pulcro y ordenado, el desorden me genera una ansiedad que me impide trabajar.' },
    ],
  },
  {
    id: 'P24',
    question: 'Cuando estás trabajando, ¿cómo manejas tu atención?',
    options: [
      { profile: PT.SE, text: 'Busco excusas para el break o la gratificación (revisar el teléfono, snack, paseo).' },
      { profile: PT.DP, text: 'Mi mente genera constantemente ideas de mejora, haciendo que salte de una tarea a otra.' },
      { profile: PT.AS, text: 'Tengo dificultades para concentrarme por la ansiedad por el tiempo o la perfección.' },
      { profile: PT.AD, text: 'Tengo dificultades para concentrarme debido a la neblina mental o la fatiga.' },
    ],
  },
  {
    id: 'P25',
    question: '¿Cuál es tu mayor obstáculo para completar una tarea?',
    options: [
      { profile: PT.AS, text: 'La preocupación de que, una vez terminada, será juzgada y encontrarán errores.' },
      { profile: PT.AD, text: 'La fatiga, la falta de motivación o la sensación de que ya no me importa.' },
      { profile: PT.SE, text: 'Me distraen las nuevas y más emocionantes oportunidades o proyectos que surgen.' },
      { profile: PT.DP, text: 'Nunca está "lo suficientemente bien"; siempre hay un detalle más que se puede ajustar.' },
    ],
  },
  {
    id: 'P26',
    question: '¿Cómo te sientes respecto a delegar tareas?',
    options: [
      { profile: PT.DP, text: 'Me cuesta, pues creo que nadie lo hará con el nivel de detalle o perfección que yo exijo.' },
      { profile: PT.AD, text: 'Me da igual; si alguien más lo hace, mejor, así me ahorro el esfuerzo.' },
      { profile: PT.SE, text: 'Lo hago solo si me aburre demasiado, pero no me importa cómo se haga el resultado.' },
      { profile: PT.AS, text: 'Me resulta difícil pedir ayuda por miedo a molestar o a ser percibido como débil.' },
    ],
  },
  {
    id: 'P27',
    question: '¿Cómo abordas la planificación?',
    options: [
      { profile: PT.SE, text: 'Prefiero la improvisación o solo planifico a corto plazo, lo que me permite ser más libre.' },
      { profile: PT.AS, text: 'La planificación es esencial, pero la hago con mucha ansiedad por los posibles imprevistos.' },
      { profile: PT.AD, text: 'No planifico casi nunca, pues no tengo la energía o la motivación para hacerlo.' },
      { profile: PT.DP, text: 'Planifico con un nivel de detalle excesivo, creando sistemas complejos que luego me cuesta seguir.' },
    ],
  },
  {
    id: 'P28',
    question: '¿Qué haces cuando sientes que estás estancado en un problema?',
    options: [
      { profile: PT.AD, text: 'Me rindo a la situación y espero a que la motivación (o el plazo) me fuerce a moverme.' },
      { profile: PT.DP, text: 'Intento solucionar el problema agregando más información, más pasos o más trabajo a mi plan.' },
      { profile: PT.AS, text: 'Me angustio y me paralizo, rumiando el problema y la posibilidad de que sea un fracaso.' },
      { profile: PT.SE, text: 'Abandono la tarea y busco algo totalmente diferente para hacer o ver.' },
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
