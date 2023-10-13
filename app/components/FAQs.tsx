import AccordionItem from "@/app/components/ui/AccordionItem";

const FAQ = [
  {
    title: "Why wouldn't I just hire a full-time developer?",
    content: [
      "Good question! For starters, the annual cost of a full-time senior-level developer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.",
      "With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
    ],
  },
  {
    title: "Is there a limit to how many requests I can have?",
    content: [
      "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
    ],
  },
  {
    title: "How fast will I receive my code?",
    content: [
      "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
    ],
  },
  {
    title: "Who are the developers?",
    content: [
      "You might be surprised to hear this, but Bytehopper.AI is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, I might join forces with some partners.",
    ],
  },
  {
    title: "How does the pause feature work?",
    content: [
      "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.",
    ],
  },
  {
    title: "What programs do you code in?",
    content: ["Most requests are designed using React and Node.js"],
  },
  {
    title: "How do I request designs?",
    content: [
      "Bytehopper.AI offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.",
    ],
  },
  {
    title: "What if I don't like the design?",
    content: [
      "No worries! We'll continue to revise the design until you're 100% satisfied.",
    ],
  },
  {
    title: "What if I only have a single request?",
    content: [
      "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste.",
    ],
  },
  {
    title: "Are there any refunds if I don't like the service?",
    content: [
      "Due to the high quality nature of the work, there will be no refunds issued.",
    ],
  },
];

export default function FAQs() {
  return (
    <div className="text-center max-w-5xl w-full items-center justify-between font-mono mb-12 lg:mb-24">
      <h1 className="mb-4 text-4xl font-extrabold">FAQs</h1>
      {FAQ.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
