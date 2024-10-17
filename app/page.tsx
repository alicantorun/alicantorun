import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    Globe,
    Brain,
    Cog,
    Palette,
    Rocket,
    Smartphone,
    Briefcase,
    Award,
    TrendingUp,
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
    SectionSubtitle,
    H3,
    H2,
} from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { AnimatedListDemo } from "@/components/problem-list";
import TextReveal from "@/components/ui/text-reveal";
import NumberTicker from "@/components/ui/number-ticker";
import { Timeline } from "@/components/timeline";
import { CTACalendarButton } from "@/components/cta-calendar-button";

const Hero2 = () => (
    <Section className="flex flex-col items-center">
        <Container className="px-4 sm:px-6 w-full">
            <div className="space-y-6 text-center w-full">
                <H1>
                    Launch Your MVP in <br />
                    <span className="text-blue-600">
                        <NumberTicker
                            startValue={24}
                            direction="down"
                            value={4}
                        />{" "}
                        Weeks
                    </span>
                </H1>
                <Lead>
                    Turn your startup idea into a market-ready MVP in 4 weeks.
                </Lead>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <CTACalendarButton>
                        <span>Schedule Free Consultation</span>
                        <Icon name="ArrowRight" className="w-5 h-5" />
                    </CTACalendarButton>
                </div>
            </div>
        </Container>
        <Container className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    { icon: "Zap", text: "Rapid Development" },
                    { icon: "Check", text: "Focused Approach" },
                    { icon: "ListTodo", text: "Direct Accountability" },
                ].map((item, index) => (
                    <div key={index} className="flex items-center">
                        <Icon
                            name={item.icon}
                            className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600 flex-shrink-0"
                        />
                        <span className="text-sm font-medium text-gray-700">
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        </Container>
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
            {/* <SectionSubtitle>
                Join the ranks of successful startups who've launched with us
            </SectionSubtitle> */}
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

const FounderExperience = () => {
    const experiences = [
        { name: "Visuo", role: "Co-Founder", logo: "/visuo-logo.svg" },
        {
            name: "Antler",
            role: "Entrepreneur in Residence",
            logo: "/antler-logo.svg",
        },
        {
            name: "Parloa",
            role: "Frontend Developer",
            logo: "/parloa-logo.svg",
        },
        {
            name: "cirplus",
            role: "Full Stack Developer",
            logo: "/cirplus-logo.svg",
        },
    ];

    return (
        <Section id="founder-experience">
            <SectionTitle>Founder's Industry Experience</SectionTitle>
            <SectionSubtitle>
                Leveraging expertise from leading tech companies
            </SectionSubtitle>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center space-y-2"
                    >
                        <Image
                            src={exp.logo}
                            alt={`${exp.name} logo`}
                            width={100}
                            height={100}
                            className="w-24 h-24 object-contain"
                        />
                        <span className="text-xl font-semibold">
                            {exp.name}
                        </span>
                        <span className="text-sm text-gray-600">
                            {exp.role}
                        </span>
                    </div>
                ))}
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
            bgColor: "bg-blue-100",
        },
        {
            title: "Develop",
            description:
                "Our team builds and launches the first version in 2-4 weeks.",
            icon: Code,
            iconColor: "text-green-500",
            bgColor: "bg-green-100",
        },
        {
            title: "Iterate",
            description: "We continuously improve based on real user feedback.",
            icon: RefreshCw,
            iconColor: "text-purple-500",
            bgColor: "bg-purple-100",
        },
    ];

    return (
        <Section id="how-it-works">
            <SectionTitle>How We Build Your MVP</SectionTitle>
            <SectionSubtitle>
                Our streamlined process gets your product to market fast
            </SectionSubtitle>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
                {steps.map((step, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-2">
                            <div
                                className={`${step.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
                            >
                                <step.icon
                                    className={`w-6 h-6 ${step.iconColor}`}
                                />
                            </div>
                            <h3 className="text-xl font-semibold">
                                {step.title}
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">{step.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg mb-6">
                    Launch your web app without the hassle of hiring a full team
                    or sacrificing equity. We handle everything so you can focus
                    on growing your business and validating your idea faster.
                </p>
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
            iconColor: "text-yellow-500",
            bgColor: "bg-yellow-100",
        },
        {
            title: "Cost-Effective",
            description:
                "Save up to 75% compared to traditional development costs.",
            icon: DollarSign,
            iconColor: "text-green-500",
            bgColor: "bg-green-100",
        },
        {
            title: "Experienced Team",
            description: "Access senior developers with startup experience.",
            icon: Users,
            iconColor: "text-blue-500",
            bgColor: "bg-blue-100",
        },
        {
            title: "Flexible & Scalable",
            description:
                "Start small and scale as you grow, with no long-term commitments.",
            icon: Maximize,
            iconColor: "text-purple-500",
            bgColor: "bg-purple-100",
        },
    ];

    return (
        <Section id="benefits">
            <SectionTitle>Why Choose Bolt ⚡ Studio for Your MVP</SectionTitle>
            <SectionSubtitle>
                Unmatched advantages for your startup journey
            </SectionSubtitle>
            <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardHeader>
                            <div className="flex items-center">
                                <div
                                    className={`${benefit.bgColor} w-12 h-12 rounded-full flex items-center justify-center mr-4`}
                                >
                                    <benefit.icon
                                        className={`w-6 h-6 ${benefit.iconColor}`}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {benefit.title}
                                </h3>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </CardContent>
                    </Card>
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
                "Full-stack web applications using modern technologies like React, Node.js, and cloud platforms.",
            icon: Globe,
        },
        {
            title: "Mobile App Development",
            description:
                "Native and cross-platform mobile apps for iOS and Android using React Native.",
            icon: Smartphone,
        },
        {
            title: "AI Development",
            description:
                "Integration of AI and machine learning capabilities to enhance your product's intelligence.",
            icon: Brain,
        },
        {
            title: "Automation Solutions",
            description:
                "Custom automation tools and workflows to streamline your business processes.",
            icon: Cog,
        },
        {
            title: "MVP Strategy & Development",
            description:
                "Rapid development of Minimum Viable Products to quickly validate your ideas in the market.",
            icon: Rocket,
        },
        {
            title: "UI/UX Design",
            description:
                "User-centered design solutions to create intuitive and engaging interfaces for your digital products.",
            icon: Palette,
        },
    ];

    return (
        <Section id="services">
            <SectionTitle>Our Development Services</SectionTitle>
            <SectionSubtitle>
                Comprehensive solutions to bring your vision to life
            </SectionSubtitle>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <FeatureCard key={index} {...service} icon={service.icon} />
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
            <SectionSubtitle>
                Fixed monthly rate with the flexibility to cancel anytime. Get a
                full product team at a fraction of the cost.
            </SectionSubtitle>
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
                    <SectionSubtitle>
                        Founders often face these challenges when building their
                        MVP:
                    </SectionSubtitle>
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
                    <CTACalendarButton size="lg" className="mt-6">
                        Solve Your MVP Challenges
                    </CTACalendarButton>
                </div>
                <div className="md:w-1/2">
                    <AnimatedListDemo className="" />
                </div>
            </div>
        </Container>
    </Section>
);

const Timeline2 = () => {
    const timelineItems = [
        {
            week: "Week 1",
            description: "Project kickoff and requirements gathering",
        },
        {
            week: "Week 2",
            description: "UI/UX design and architecture planning",
        },
        { week: "Week 3", description: "Core feature development" },
        {
            week: "Week 4",
            description: "MVP completion and initial testing",
        },
        { week: "Week 5", description: "User feedback and first iteration" },
        {
            week: "Week 6",
            description: "Final adjustments and market-ready MVP",
        },
        {
            week: "Weeks 7-8",
            description: "Launch support and user acquisition",
        },
        { week: "Ongoing", description: "Continuous improvement and scaling" },
    ];

    const getFutureDate = (weeksFromNow: number) => {
        const today = new Date();
        const futureDate = new Date(
            today.getTime() + weeksFromNow * 7 * 24 * 60 * 60 * 1000
        );
        return futureDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
        });
    };

    return (
        <Section id="timeline">
            <Container>
                <SectionTitle>The Bolt ⚡ Studio MVP Journey</SectionTitle>
                <SectionSubtitle>
                    From concept to market-ready product in weeks
                </SectionSubtitle>

                <div className="relative mt-12">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2" />
                    {timelineItems.map((item, index) => (
                        <div
                            key={index}
                            className="mb-12 relative flex items-center"
                        >
                            <div className="w-1/2 pr-8 text-right">
                                <p className="font-semibold text-blue-600">
                                    {item.week}
                                </p>
                            </div>
                            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                            <div className="w-64 pl-8">
                                <p className="text-gray-700 whitespace-pre-line">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Lead>
                        Start today and by{" "}
                        <span className="text-blue-600 font-semibold">
                            {getFutureDate(8)}
                        </span>
                        , you could have
                    </Lead>
                    <H3 className="text-blue-600 mb-8">A Market-Ready MVP</H3>
                    <Button size="xl" className="">
                        Start Your MVP Journey
                    </Button>
                </div>
            </Container>
        </Section>
    );
};

const TextRevealDemo = () => {
    return (
        // <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
        <TextReveal text="What if there's a better way to build your product?" />
        // </div>
    );
};

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
            <SectionSubtitle>
                Built By Founders, For Founders. Benefit from our firsthand
                experience in the startup trenches.
            </SectionSubtitle>
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
        className="shadow-md bg-transparent border py-16 px-4 rounded-3xl text-center"
    >
        <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your Startup?
        </h2>
        <p className="text-xl mb-8">
            Get your MVP built and launched in as little as 2 weeks. Let's turn
            your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTACalendarButton size="xl" className="space-x-2">
                <span>Schedule Free Consultation</span>
                <Icon name="ArrowRight" className="w-5 h-5" />
            </CTACalendarButton>
            {/* <Button variant="outline" size="xl" className="text-black">
                View Our Work
            </Button> */}
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
                    Contact us at torun.alican@gmail.com
                </p>
            </div>
            {/* <div className="flex flex-col space-y-2">
                {["Services", "Pricing", "FAQ", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:underline"
                    >
                        {item}
                    </Link>
                ))}
            </div> */}
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} Bolt ⚡ Studio. All Rights Reserved.
        </div>
    </footer>
);

const FounderProfile = () => {
    const experiences = [
        {
            name: "Visuo",
            role: "Co-Founder",
            logo: "/visuo-logo.svg",
            website: "https://www.visuo.ai",
        },
        {
            name: "Antler",
            role: "EIR",
            logo: "/antler-logo.svg",
            website: "https://www.antler.co",
        },
        {
            name: "Parloa",
            role: "Frontend Dev",
            logo: "/parloa-logo.svg",
            website: "https://www.parloa.com",
        },
        {
            name: "cirplus",
            role: "Full Stack Dev",
            logo: "/cirplus-logo.svg",
            website: "https://www.cirplus.com",
        },
    ];

    const badges = [
        { text: "6+ Years Pro", icon: Award },
        { text: "Tech Pioneer", icon: TrendingUp },
        { text: "Software Expert", icon: Code },
        { text: "Cloud Savvy", icon: Cloud },
    ];

    const founderAdvantages = [
        {
            title: "Startup Savvy",
            description: "Built & scaled startups",
            icon: Rocket,
        },
        {
            title: "Investor Insights",
            description: "VC-backed perspective",
            icon: TrendingUp,
        },
        {
            title: "Rapid Iteration",
            description: "Fast market adaptation",
            icon: RefreshCw,
        },
        {
            title: "Growth-Focused",
            description: "User acquisition strategies",
            icon: Users,
        },
    ];

    return (
        <Section id="founder">
            <h2 className="text-4xl font-bold text-center mb-12">
                Meet Our Founder
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {/* Founder Image Column */}
                <div className="lg:col-span-1 flex flex-col items-center">
                    <Image
                        src="/founder.png"
                        alt="Alican Torun"
                        width={200}
                        height={200}
                        className="rounded-full w-48 h-48 border shadow-xl mb-6"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                        Alican Torun
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {badges.map((badge, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="text-sm py-1"
                            >
                                <badge.icon className="w-4 h-4 mr-1" />
                                {badge.text}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Experiences Column */}
                <div className="lg:col-span-2 space-y-6">
                    <p className="text-gray-600 mb-6">
                        Full Stack Developer with 6+ years in
                        TypeScript/JavaScript. Expert in responsive web and
                        mobile apps.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {experiences.map((exp, index) => (
                            <Card key={index}>
                                <Link
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CardContent className="p-4 flex flex-col items-start gap-3">
                                        <Image
                                            src={exp.logo}
                                            alt={exp.name}
                                            width={120}
                                            height={40}
                                        />
                                        <p className="text-sm text-gray-600">
                                            {exp.role}
                                        </p>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                    <p className="text-gray-600 mt-6">
                        Expertise: React.js, Node.js, GCP, AWS. Proven track
                        record in web app development and project management.
                    </p>
                </div>

                {/* Founder's Advantage Column */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">
                                Founder's Edge
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-gray-600">
                                Founders building for founders.
                            </p>
                            {founderAdvantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <advantage.icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-semibold text-sm">
                                            {advantage.title}
                                        </h5>
                                        <p className="text-xs text-gray-600">
                                            {advantage.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default function Home() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Bolt ⚡ Studio | MVP Development in 2-4 Weeks</title>
                <meta
                    name="description"
                    content="Transform your startup idea into reality with our expert MVP development services. Get your web app built and launched in just 2-4 weeks."
                />
                <link rel="canonical" href="https://alicantorun.com" />
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
                    content="https://alicantorun.com/og-image.jpg"
                />
                <meta property="og:url" content="https://alicantorun.com" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-24 mt-12">
                {/* <Hero /> */}
                <Hero2 />
                <PainPoints />
                <TextRevealDemo />
                <Timeline />
                {/* <FoundersAdvantage /> */}
                <FounderProfile />
                {/* <FounderExperience /> */}
                {/* <TrustedBy /> */}
                {/* <HowItWorks /> */}
                {/* <CostCalculator /> */}
                {/* <Benefits /> */}
                {/* <Services /> */}
                {/* <WhenWorkWithUs /> */}
                {/* <Pricing /> */}
                {/* <Testimonials /> */}
                <FAQ />
                <CTA />
                {/* <ContactForm /> */}
            </main>
            <Footer />
        </div>
    );
}
