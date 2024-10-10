import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { CostCalculator } from "@/components/cost-calculator";
import { Header } from "@/components/header";
import {
    Zap,
    CheckCircle,
    MessageCircle,
    Code,
    RefreshCw,
    DollarSign,
    Users,
    Maximize,
    Cloud,
    Cpu,
    Database,
    Leaf,
    Shield,
} from "lucide-react";
import { WhenWorkWithUs } from "@/components/when-work-with-us";
import {
    Container,
    H1,
    Icon,
    Lead,
    List,
    ListItem,
    Section,
    SectionTitle,
} from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { AnimatedListDemo } from "@/components/problem-list";

const Hero = () => (
    <Section className="flex flex-col md:flex-row items-center">
        <Container>
            <div className="space-y-6">
                <H1>
                    Launch Your MVP in{" "}
                    <span className="text-blue-600">4 Weeks</span>
                    <br />
                    <span className="text-3xl sm:text-4xl text-gray-600">
                        Without Breaking the Bank
                    </span>
                </H1>
                <Lead>
                    Transform your startup idea into a market-ready MVP. Our
                    experienced team builds and launches your product in just
                    2-4 weeks, so you can start validating faster.
                </Lead>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="xl" className="space-x-2">
                        <span>Schedule Free Consultation</span>
                        <Icon name="ArrowRight" className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="xl">
                        View Pricing
                    </Button>
                </div>
                <List className="text-sm mt-4">
                    {[
                        {
                            icon: "Zap",
                            text: "First MVP in 2 weeks, iterations in the next 2 weeks",
                        },
                        {
                            icon: "Check",
                            text: "Focused on core MVP needs, no inflated requirements",
                        },
                        {
                            icon: "ListTodo",
                            text: "Direct accountability - work with builders, not sales reps",
                        },
                    ].map((item, index) => (
                        <ListItem key={index}>
                            <Icon
                                name={item.icon}
                                className="w-4 h-4 mr-2 text-yellow-500"
                            />
                            {item.text}
                        </ListItem>
                    ))}
                </List>
            </div>
        </Container>
    </Section>
);

const Hero2 = () => (
    <Section className="flex flex-col items-center">
        <Container>
            <div className="space-y-6 text-center">
                <H1>
                    Launch Your MVP in{" "}
                    <span className="text-blue-600">4 Weeks</span>
                    <br />
                    <span className="text-3xl sm:text-4xl text-gray-600">
                        Without Breaking the Bank
                    </span>
                </H1>
                <Lead>
                    Transform your startup idea into a market-ready MVP. Our
                    experienced team builds and launches your product in just
                    2-4 weeks, so you can start validating faster.
                </Lead>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="xl" className="space-x-2">
                        <span>Schedule Free Consultation</span>
                        <Icon name="ArrowRight" className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="xl">
                        View Pricing
                    </Button>
                </div>
            </div>
        </Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
                {
                    icon: "Zap",
                    title: "Rapid Development",
                    text: "First MVP in 2 weeks, iterations in the next 2 weeks",
                },
                {
                    icon: "Check",
                    title: "Focused Approach",
                    text: "Focused on core MVP needs, no inflated requirements",
                },
                {
                    icon: "ListTodo",
                    title: "Direct Accountability",
                    text: "Work with builders, not sales reps",
                },
            ].map((item, index) => (
                <Card
                    key={index}
                    className="text-center bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors duration-300"
                >
                    <CardContent className="pt-6">
                        <Icon
                            name={item.icon}
                            className="w-12 h-12 mx-auto mb-4 text-blue-600"
                        />
                        <h3 className="text-lg font-semibold mb-2 text-blue-800">
                            {item.title}
                        </h3>
                        <p className="text-gray-700">{item.text}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </Section>
);

const TrustedBy = () => {
    const clients = [
        { name: "TechNova", icon: Zap },
        { name: "DataFlow", icon: Database },
        { name: "CloudPeak", icon: Cloud },
        { name: "AIVentures", icon: Cpu },
        { name: "EcoSmart", icon: Leaf },
        { name: "CyberShield", icon: Shield },
    ];

    return (
        <Section id="trusted-by">
            <SectionTitle>Trusted by Innovative Startups</SectionTitle>
            <div className="relative overflow-hidden">
                <div className="fade-edge-overlay"></div>
                <div className="flex animate-scroll">
                    {[...clients, ...clients, ...clients].map(
                        (client, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 text-xl font-semibold mx-8 whitespace-nowrap"
                            >
                                <client.icon className="w-6 h-6" />
                                <span>{client.name}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </Section>
    );
};

const HowItWorks = () => {
    const steps = [
        {
            title: "Consult",
            description:
                "We discuss your idea and create a detailed product roadmap.",
            icon: MessageCircle,
            iconColor: "text-blue-500",
        },
        {
            title: "Develop",
            description:
                "Our team builds and launches the first version in 2-4 weeks.",
            icon: Code,
            iconColor: "text-green-500",
        },
        {
            title: "Iterate",
            description: "We continuously improve based on real user feedback.",
            icon: RefreshCw,
            iconColor: "text-purple-500",
        },
    ];

    return (
        <Section id="how-it-works">
            <SectionTitle>How We Build Your MVP</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="mb-4 bg-gray-100 rounded-full p-4">
                            <step.icon
                                className={`w-6 h-6 ${step.iconColor}`}
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
            <p className="text-lg text-center max-w-2xl mx-auto">
                Launch your web app without the hassle of hiring a full team or
                sacrificing equity. We handle everything so you can focus on
                growing your business and validating your idea faster.
            </p>
            <div className="text-center">
                <Button size="lg" className="mt-4">
                    Start Your MVP Journey
                </Button>
            </div>
        </Section>
    );
};

const FeatureCard = ({
    title,
    description,
    icon: Icon,
}: {
    title: string;
    description: string;
    icon: React.ElementType;
}) => (
    <Card>
        <CardHeader>
            <h3 className="text-xl font-semibold flex items-center">
                <Icon className="mr-2 text-blue-500 w-6 h-6" />
                {title}
            </h3>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

const Benefits = () => {
    const benefits = [
        {
            title: "Rapid Development",
            description: "Your MVP ready in just 2-4 weeks.",
            icon: Zap,
        },
        {
            title: "Cost-Effective",
            description:
                "Save up to 75% compared to traditional development costs.",
            icon: DollarSign,
        },
        {
            title: "Experienced Team",
            description: "Access senior developers with startup experience.",
            icon: Users,
        },
        {
            title: "Flexible & Scalable",
            description:
                "Start small and scale as you grow, with no long-term commitments.",
            icon: Maximize,
        },
    ];

    return (
        <Section id="benefits">
            <SectionTitle>Why Choose Bolt ⚡ Studio for Your MVP</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                    <FeatureCard key={index} {...benefit} />
                ))}
            </div>
        </Section>
    );
};

const Services = () => {
    const services = [
        {
            title: "Web App Development",
            description:
                "Full-stack development using modern technologies like React, Node.js, and AWS.",
        },
        {
            title: "UI/UX Design",
            description:
                "Intuitive and appealing interfaces that enhance user engagement.",
        },
        {
            title: "MVP Strategy",
            description:
                "We help you identify core features to validate your idea quickly.",
        },
    ];

    return (
        <Section id="services">
            <SectionTitle>Our MVP Development Services</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <FeatureCard key={index} {...service} icon={Code} />
                ))}
            </div>
        </Section>
    );
};

interface PlanType {
    title: string;
    description: string;
    price: string;
    period: string;
    spotsLeft: string;
    features: string[];
    ctaText: string;
    bgColor: string;
}

const PricingCard = ({
    plan,
    isHighlighted,
}: {
    plan: PlanType;
    isHighlighted: boolean;
}) => (
    <Card
        className={`${plan.bgColor} overflow-hidden ${
            isHighlighted ? "border-blue-500 border-2" : ""
        }`}
    >
        <CardHeader className="pb-0">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <Badge variant="outline">{plan.spotsLeft}</Badge>
            </div>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <div className="pb-4 mb-4 border-b border-dashed border-gray-300">
                <div
                    className="text-3xl font-bold transition-transform duration-300 hover:scale-110 inline-block"
                    style={{ transformOrigin: "left" }}
                >
                    {plan.price}
                    <span className="text-base font-normal text-gray-500 ml-1">
                        {plan.period}
                    </span>
                </div>
            </div>
        </CardHeader>
        <CardContent className="pt-4">
            <ul className="space-y-2 mb-6">
                {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-0.5 w-4 h-4" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button
                className="w-full"
                variant={isHighlighted ? "secondary" : "default"}
            >
                {plan.ctaText}
            </Button>
        </CardContent>
    </Card>
);

const Pricing = () => {
    const plans = [
        {
            title: "MVP Starter",
            description: "Validate your idea quickly with a basic MVP.",
            price: "$9,999",
            period: "/ Month",
            spotsLeft: "2 spots left",
            features: [
                "4-week MVP development",
                "Senior Full-stack Developer + UI/UX Designer",
                "Basic feature set implementation",
                "React.js / Node.js tech stack",
                "User authentication & basic database",
                "Responsive web design",
                "Cloud deployment (AWS/GCP/Azure)",
                "1 round of revisions",
                "Private GitHub repository",
                "Weekly progress updates",
            ],
            ctaText: "Start Your MVP",
            bgColor: "bg-gray-100",
        },
        {
            title: "MVP Pro",
            description: "Build a comprehensive MVP with advanced features.",
            price: "$14,999",
            period: "/ Month",
            spotsLeft: "1 spot left",
            features: [
                "6-week MVP development",
                "Senior Full-stack Developer + UI/UX Designer + DevOps",
                "Advanced feature set implementation",
                "React.js / Node.js / Python tech stack",
                "User roles & permissions",
                "Responsive web & basic mobile app",
                "CI/CD pipeline deployment",
                "2 rounds of revisions",
                "Private GitHub with branching strategy",
                "Bi-weekly video call updates",
            ],
            ctaText: "Build Pro MVP",
            bgColor: "bg-white",
        },
    ];

    return (
        <Section id="pricing" className="max-w-4xl mx-auto">
            <SectionTitle>Transparent Pricing, No Surprises</SectionTitle>
            <p className="text-xl text-center">
                Fixed monthly rate with the flexibility to cancel anytime. Get a
                full product team at a fraction of the cost.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                {plans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        plan={plan}
                        isHighlighted={index === 1}
                    />
                ))}
            </div>
        </Section>
    );
};

const PainPoints = () => (
    <Section id="pain-points">
        <Container>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <SectionTitle>Common Startup Struggles</SectionTitle>
                    <p className="text-xl mb-6">
                        Founders often face these challenges when building their
                        MVP:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Delayed launches due to development issues</li>
                        <li>Overspending on features that aren't essential</li>
                        <li>Difficulty in finding reliable tech partners</li>
                        <li>Struggling to balance quality and speed</li>
                    </ul>
                    <p className="text-lg">
                        At Bolt ⚡ Studio, we solve these problems by delivering
                        your MVP quickly and efficiently.
                    </p>
                    <Button size="lg" className="mt-6">
                        Solve Your MVP Challenges
                    </Button>
                </div>
                <div className="md:w-1/2">
                    <AnimatedListDemo className="" />
                </div>
            </div>
        </Container>
    </Section>
);

const FoundersAdvantage = () => {
    const advantages = [
        {
            title: "Startup Experience",
            description:
                "We've built and scaled startups, understanding the unique challenges you face.",
        },
        {
            title: "Investor Insights",
            description:
                "Our VC background helps shape your MVP to attract potential investors.",
        },
        {
            title: "Rapid Iteration",
            description:
                "We help you move fast and adapt quickly based on market feedback.",
        },
        {
            title: "Growth-Focused",
            description:
                "Beyond building, we advise on strategies to acquire your first users.",
        },
    ];

    return (
        <Section id="founders-advantage">
            <SectionTitle>The Founder's Advantage</SectionTitle>
            <h3 className="text-2xl font-semibold text-center">
                Built By Founders, For Founders
            </h3>
            <p className="text-xl text-center">
                Benefit from our firsthand experience in the startup trenches.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                    <FeatureCard key={index} {...advantage} icon={Zap} />
                ))}
            </div>
        </Section>
    );
};

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
}

const TestimonialCard = ({
    quote,
    author,
    role,
    company,
}: TestimonialCardProps) => (
    <Card>
        <CardContent className="p-6">
            <p className="text-gray-800 italic mb-4">"{quote}"</p>
            <div>
                <p className="font-semibold">{author}</p>
                <p className="text-gray-600">
                    {role}, {company}
                </p>
            </div>
        </CardContent>
    </Card>
);

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Bolt ⚡ Studio turned our idea into a fully functional MVP in just 3 weeks. Their expertise and efficiency are unmatched!",
            author: "Sarah Johnson",
            role: "Founder",
            company: "TechStart",
        },
        {
            quote: "Working with Bolt ⚡ Studio was a game-changer. They delivered a high-quality product that helped us secure our first round of funding.",
            author: "Michael Chen",
            role: "CEO",
            company: "InnovateCo",
        },
    ];

    return (
        <Section id="testimonials">
            <SectionTitle>What Our Clients Say</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </Section>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How long does it take to build an MVP?",
            answer: "We typically deliver MVPs in 2-4 weeks, depending on the complexity of the project.",
        },
        {
            question: "What if I need changes after the MVP is built?",
            answer: "We offer flexible plans that include revision rounds. Our iterative approach ensures your MVP can evolve based on user feedback and market demands.",
        },
        {
            question: "Do you offer ongoing support after the MVP launch?",
            answer: "Yes, we provide ongoing support and maintenance options to ensure your MVP continues to perform optimally as you grow.",
        },
        {
            question: "How do you protect my intellectual property?",
            answer: "We sign comprehensive NDAs before starting any project and ensure all code and designs are your exclusive property.",
        },
        {
            question: "Can you help with fundraising after the MVP is built?",
            answer: "While we don't directly assist with fundraising, our team can provide insights and prepare materials that can support your fundraising efforts.",
        },
    ];

    return (
        <Section id="faq">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <Accordion
                type="single"
                collapsible
                className="w-full bg-gray-50 rounded-3xl ring-gray-900/10 ring-1"
            >
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className={`px-8 ${
                            index === faqs.length - 1 ? "border-none" : ""
                        }`}
                    >
                        <AccordionTrigger className="text-left text-xl font-semibold">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Section>
    );
};

const CTA = () => (
    <Section
        id="cta"
        className="bg-blue-600 text-white py-16 px-4 rounded-3xl text-center"
    >
        <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your Startup?
        </h2>
        <p className="text-xl mb-8">
            Get your MVP built and launched in as little as 2 weeks. Let's turn
            your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
                Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg">
                View Our Work
            </Button>
        </div>
        <p className="mt-6 text-sm">
            No commitment required. We'll discuss your project and provide a
            free estimate.
        </p>
    </Section>
);

const Footer = () => (
    <footer className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Bolt ⚡ Studio</h3>
                <p className="text-sm">
                    Turning startup ideas into successful MVPs in weeks, not
                    months.
                </p>
                <p className="text-sm mt-2">
                    Contact us at hello@launchable.studio
                </p>
            </div>
            <div className="flex flex-col space-y-2">
                {["Services", "Pricing", "FAQ", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:underline"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} Bolt ⚡ Studio. All Rights Reserved.
        </div>
    </footer>
);

const FounderProfile = () => (
    <Section id="founder">
        <SectionTitle>Meet Our Founder</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
                <Image
                    src="/founder.png"
                    alt="Alican Torun"
                    width={250}
                    height={250}
                    className="rounded-full"
                    style={{
                        objectFit: "cover",
                        width: "250px",
                        height: "250px",
                    }}
                />
            </div>
            <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Alican Torun</h3>
                <p className="text-lg mb-4">
                    Experienced Full Stack Developer with 6 years of expertise
                    in TypeScript/JavaScript. Specializes in building responsive
                    and dynamic web and mobile applications.
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Co-Founder and CPO at Visuo</li>
                    <li>Former Entrepreneur in Residence at Antler</li>
                    <li>Frontend Developer at Parloa</li>
                    <li>Full Stack Developer at cirplus</li>
                </ul>
                <p className="mt-4">
                    Alican brings a wealth of experience in developing
                    sophisticated web applications, managing projects, and
                    driving technological innovations. His expertise spans
                    across various technologies including React.js, Node.js, and
                    cloud platforms like GCP and AWS.
                </p>
            </div>
        </div>
    </Section>
);

export default function Home() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Bolt ⚡ Studio | MVP Development in 2-4 Weeks</title>
                <meta
                    name="description"
                    content="Transform your startup idea into reality with our expert MVP development services. Get your web app built and launched in just 2-4 weeks."
                />
                <link rel="canonical" href="https://launchable.studio" />
                <meta
                    property="og:title"
                    content="Bolt ⚡ Studio | Rapid MVP Development for Startups"
                />
                <meta
                    property="og:description"
                    content="Launch your MVP in 2-4 weeks. Expert team, fixed pricing, no hidden fees. Start validating your idea faster."
                />
                <meta
                    property="og:image"
                    content="https://launchable.studio/og-image.jpg"
                />
                <meta property="og:url" content="https://launchable.studio" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-24 mt-24">
                <Hero />
                {/* <Hero2 /> */}
                <PainPoints /> {/* Add this line */}
                <TrustedBy />
                <HowItWorks />
                <Benefits />
                <CostCalculator />
                <WhenWorkWithUs />
                <Services />
                <Pricing />
                <FoundersAdvantage />
                <FounderProfile /> {/* Add this line */}
                <Testimonials />
                <FAQ />
                <CTA />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}
