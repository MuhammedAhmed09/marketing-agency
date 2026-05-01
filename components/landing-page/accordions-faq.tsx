import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "what-we-do",
    question: "What services does your agency offer?",
    answer:
      "We offer a full suite of digital marketing services including website design, e-commerce store development, social media management, SEO optimization, paid advertising, branding & identity, and content creation.",
  },
  {
    id: "how-long",
    question: "How long does it take to build a website or online store?",
    answer:
      "A typical website takes 2–4 weeks, while a fully custom e-commerce store can take 4–8 weeks depending on the scope. We'll give you a clear timeline before we start.",
  },
  {
    id: "pricing",
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the service and scope of work. We offer flexible packages for businesses of all sizes. Contact us for a free consultation and custom quote.",
  },
  {
    id: "results",
    question: "How soon will I see results from SEO or paid ads?",
    answer:
      "Paid ads can drive traffic within days of launch. SEO is a longer-term investment — most clients start seeing significant improvements within 3–6 months.",
  },
  {
    id: "social-media",
    question: "Do you manage social media accounts on our behalf?",
    answer:
      "Yes. We handle everything from content planning and creation to scheduling and community management across platforms like Instagram, Facebook, TikTok, and LinkedIn.",
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "Simply reach out through our contact form or book a free discovery call. We'll learn about your business, goals, and recommend the best strategy for you.",
  },
]

export function Accordions() {
  return (
    <Accordion type="single" collapsible defaultValue="what-we-do">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}