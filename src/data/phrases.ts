export type Language = 'Hausa' | 'Yoruba' | 'Igbo' | 'Nigerian Pidgin'

export interface Phrase {
  id: string
  topic: string
  english: string
  context: string
  translations: Record<Language, string>
}

export const languages: Language[] = ['Hausa', 'Yoruba', 'Igbo', 'Nigerian Pidgin']

export const phrases: Phrase[] = [
  {
    id: 'greeting',
    topic: 'Greetings',
    english: 'Hello / How are you?',
    context: 'A friendly everyday greeting. Confirm preferred spelling and register with fluent speakers.',
    translations: {
      Hausa: 'Sannu, ya ya?',
      Yoruba: 'Báwo ni?',
      Igbo: 'Ndewo, kedu?',
      'Nigerian Pidgin': 'How far?',
    },
  },
  {
    id: 'thanks',
    topic: 'Courtesy',
    english: 'Thank you',
    context: 'A basic expression of appreciation; usage and formality can vary by setting.',
    translations: {
      Hausa: 'Na gode',
      Yoruba: 'Ẹ ṣé',
      Igbo: 'Daalụ',
      'Nigerian Pidgin': 'Thank you',
    },
  },
  {
    id: 'community',
    topic: 'Community',
    english: 'We are together',
    context: 'A starting point for discussing solidarity, belonging, and collective identity.',
    translations: {
      Hausa: 'Muna tare',
      Yoruba: 'A wà papọ̀',
      Igbo: 'Anyị nọ ọnụ',
      'Nigerian Pidgin': 'We dey together',
    },
  },
]
