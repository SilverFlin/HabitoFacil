import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: '¿Qué es Habitofácil?',
      answer:
        'Habitofácil es una aplicación diseñada para ayudarte a construir hábitos positivos de manera simple y efectiva. Ofrece plantillas personalizadas, seguimiento detallado y apoyo motivacional para impulsar tu progreso.',
    },
    {
      question: '¿Cómo puedo empezar con Habitofácil?',
      answer:
        'Es fácil comenzar con Habitofácil. Solo descarga la aplicación, crea tu cuenta y elige el plan que mejor se adapte a tus necesidades. ¡Estás listo para transformar tus hábitos!',
    },
    {
      question: '¿Qué tipo de plantillas están disponibles en Habitofácil?',
      answer:
        'Habitofácil ofrece una variedad de plantillas para diversos objetivos, desde salud hasta productividad. Personaliza tu experiencia eligiendo plantillas que se adapten a tus metas específicas.',
    },
  ],
  [
    {
      question: '¿Qué diferencia a los planes de suscripción?',
      answer:
        'Ofrecemos varios planes para satisfacer diversas necesidades. Desde el acceso gratuito con características esenciales hasta planes premium con beneficios exclusivos como leaderboard y personalización avanzada de plantillas.',
    },
    {
      question:
        '¿Habitofácil es adecuado para mí si soy nuevo en la mejora de hábitos?',
      answer:
        '¡Absolutamente! Habitofácil fue diseñado para personas de todos los niveles. Las plantillas personalizadas y el apoyo motivacional te guiarán, independientemente de tu experiencia previa.',
    },
    {
      question: '¿Puedo compartir mi progreso con amigos en Habitofácil?',
      answer:
        'Sí, Habitofácil cuenta con la función de leaderboard que te permite competir y compartir tus logros con amigos, brindando un toque social a tu viaje de mejora de hábitos.',
    },
  ],
  [
    {
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer:
        'Sí, puedes cancelar tu suscripción en cualquier momento. No hay contratos a largo plazo, así que eres libre de ajustar tu plan según tus necesidades.',
    },
    {
      question: '¿Cómo garantizan la privacidad de mis datos?',
      answer:
        'La seguridad y privacidad de tus datos son nuestra prioridad. Utilizamos cifrado de múltiples capas y seguimos estrictas prácticas de privacidad para proteger tu información personal.',
    },
    {
      question: '¿Ofrecen soporte al cliente?',
      answer:
        'Sí, contamos con un equipo de soporte al cliente dedicado para ayudarte en cualquier pregunta o problema que puedas tener. ¡Estamos aquí para apoyarte en tu viaje de mejora de hábitos!',
    },
  ],
]
export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Preguntas frecuentes
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
