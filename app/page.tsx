'use client';
import { useCallback, useEffect, useLayoutEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconChevronLeft, IconChevronRight, IconQuote, IconStarFilled,IconMail, IconMapPin, IconPhone, IconClock, IconSend, IconCheck, IconArrowRight} from "@tabler/icons-react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import initial from "../public/logo.png";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Image from "next/image";
import Link from "next/link";
import HorizontalScrollCarousel from "@/components/ui/card-carousel";
import serviceOne from "../public/services/service_2.png"
import serviceTwo from "../public/services/service_2.png"
import intro from "../public/intro_img.png"

const reviews = [
  {
    id: 1,
    quote:"PCRED helped us streamline our finances and plan growth more confidently.",
    name: "Arvind Mehra",
    role: "Founder",
    rating: 5,
  },
  {
    id: 2,
    quote:"Their financial guidance was practical, transparent, and truly business-focused.",
    name: "Neha Agarwal",
    role: "Director",
    rating: 5,
  },
  {
    id: 3,
    quote:"PCRED understands MSME challenges and delivers solutions that actually work.",
    name: "Amit Kulkarni",
    role: "Managing Partner",
    rating: 5,
  },
  {
    id: 4,
    quote:"Professional support and smooth execution throughout the entire advisory process.",
    name: "Priya Nair",
    role: "Founder",
    rating: 5,
  },
  {
    id: 5,
    quote: "Their strategic insights helped us improve financial stability and planning.",
    name: "Sandeep Mehta",
    role: "CEO",
    rating: 5,
  },
  {
    id: 6,
    quote: "Reliable financial advisory backed by strong business understanding.",
    name: "Rohan Shah",
    role: "Co-Founder",
    rating: 5,
  },
  {
    id: 7,
    quote: "PCRED made our funding and expansion process much more structured.",
    name: "Kunal Arora",
    role: "Director",
    rating: 5,
  },
  {
    id: 8,
    quote: "The team provided personalized guidance aligned with our business goals.",
    name: "Aditi Deshmukh",
    role: "Founder",
    rating: 5,
  },
  {
    id: 9,
    quote: "Their structured financial approach helped us plan growth more effectively.",
    name: "Vivek Jain",
    role: "Managing Director",
    rating: 5,
  },
  {
    id: 10,
    quote: "Transparent communication and dependable support at every stage.",
    name: "Pooja Malhotra",
    role: "Operations Head",
    rating: 5,
  },
  {
    id: 11,
    quote: "PCRED simplified complex financial decisions and made the process seamless.",
    name: "Harsh Vardhan",
    role: "Founder",
    rating: 5,
  },
];

const contactServices = [
  "Capital Market Advisory",
  "Debt Advisory",
  "Virtual CFO Services",
  "IPO Advisory",
  "Investment Strategy Consulting",
  "Other",
];

const contactInfo = [
  { icon: IconPhone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: IconMail, label: "Email", value: "contact@pcred.org", href: "mailto:contact@pcred.org" },
  { icon: IconMapPin, label: "Office", value: "Mumbai, Maharashtra, India", href: undefined as string | undefined },
  { icon: IconClock, label: "Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM", href: undefined as string | undefined },
];

const inputClass =
  "w-full rounded-4xl border border-[#084E75]/15 bg-white px-4 py-3.5 text-[#084E75] placeholder:text-[#8E8E90]/60 outline-none transition-all duration-200 focus:border-[#084E75] focus:ring-2 focus:ring-[#084E75]/15";

export default function Home() {
  const achievements = [
    {id:1,heading:'322cr',label:'Total disbursement'},
    {id:2,heading:'16+',label:'Years of Experience'},
    {id:3,heading:'1600+',label:'Satisfied Customers'},
  ]

  const services = [
    {
      id: 1,
      label: 'CAPITAL MARKET ADVISORY',
      description:'Helping businesses access the right capital opportunities and navigate financial markets with confidence.',
      color:"bg-linear-to-b from-[#084E75]/90 from-40% via-[#084E75]/60 via-80% to-[#084E75]/40 to-100% text-white",
      image:serviceOne
    },
    {
      id: 2,
      label: 'FISCAL OPTIMIZATION',
      description:'Creating efficient financial structures that support profitability, compliance, and long-term business growth.',
      color:"bg-linear-to-br from-[#084E75]/20 from-40% to-[#DDB162]/20 backdrop-blur-lg text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 3,
      label: 'INVESTMENT STRATEGY CONSULTING',
      description:'Designing investment strategies that align financial resources with business objectives and future aspirations.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 4,
      label: 'CREDIT RATING OPTIMIZATION',
      description:'Strengthening your credit profile to improve financing opportunities and build greater lender confidence.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 5,
      label: 'VIRTUAL CFO SERVICES',
      description:'Providing strategic financial leadership, insights, and oversight to support informed business decisions.',
      color:"bg-linear-to-b from-[#084E75]/90 from-40% via-[#084E75]/60 via-80% to-[#084E75]/40 to-100% text-white",
      image:serviceTwo
    },
    {
      id: 6,
      label: 'RISK MANAGEMENT ADVISORY',
      description:'Identifying potential risks and developing practical strategies to protect business stability and performance.',
      color:"bg-linear-to-br from-[#084E75]/20 from-40% to-[#DDB162]/20 backdrop-blur-lg text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 7,
      label: 'TREASURY MANAGEMENT SERVICES',
      description:'Enhancing cash flow visibility and liquidity management to support efficient financial operations.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 8,
      label: 'SUCCESSION PLANNING ADVISORY',
      description:'Preparing businesses for seamless leadership transitions while preserving long-term continuity and value.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 9,
      label: 'CORPORATE GOVERNANCE ADVISORY',
      description:'Establishing strong governance practices that promote accountability, transparency, and sustainable growth.',
      color:"bg-linear-to-b from-[#084E75]/90 from-40% via-[#084E75]/60 via-80% to-[#084E75]/40 to-100% text-white",
      image:serviceTwo
    },
    {
      id: 10,
      label: 'ESG & SUSTAINABILITY ADVISORY',
      description:'Helping businesses integrate responsible practices that create lasting value for stakeholders and society.',
      color:"bg-linear-to-br from-[#084E75]/20 from-40% to-[#DDB162]/20 backdrop-blur-lg text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 11,
      label: 'BUSINESS VALUATION SERVICES',
      description:'Delivering reliable valuation insights to support fundraising, transactions, and strategic business decisions.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 12,
      label: 'PRIVATE FUND ADVISORY',
      description:'Connecting businesses with suitable capital sources to support expansion and growth initiatives.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 13,
      label: 'GOVERNMENT SCHEME ADVISORY',
      description:'Guiding businesses in identifying and leveraging government programs, incentives, and support opportunities.',
      color:"bg-linear-to-b from-[#084E75]/90 from-40% via-[#084E75]/60 via-80% to-[#084E75]/40 to-100% text-white",
      image:serviceTwo
    },
    {
      id: 14,
      label: 'DEBT ADVISORY',
      description:'Structuring debt solutions that strengthen financial stability and support future business objectives.',
      color:"bg-linear-to-br from-[#084E75]/20 from-40% to-[#DDB162]/20 backdrop-blur-lg text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 15,
      label: 'IPO ADVISORY',
      description:'Supporting businesses through every stage of their journey towards capital market readiness.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
    {
      id: 16,
      label: 'WEALTH MANAGEMENT & FAMILY OFFICE SERVICES',
      description:'Offering personalized wealth strategies focused on preservation, growth, and legacy planning.',
      color:"bg-white border border-gray-200 text-[#084E75]",
      image:serviceTwo
    },
  ]

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");
    root._logo?.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        layout: root.verticalLayout,
      })
    );

    const data = [
      { year: "2021", revenue: 120 },
      { year: "2022", revenue: 130 },
      { year: "2023", revenue: 200 },
      { year: "2024", revenue: 280 },
      { year: "2025", revenue: 340 },
    ];

    // X Axis
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 1,
    });

    xRenderer.grid.template.set("visible", false);
    xRenderer.labels.template.setAll({
      centerX: am5.percent(50),
      textAlign: "center",
      paddingTop: 10,
      fill: am5.color(0x084E75),
    });
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        startLocation: 0.3,
        endLocation: 0.7,
      })
    );

    xAxis.data.setAll(data);

    // Y Axis
    const yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.set("visible", false);
    yRenderer.labels.template.setAll({
      visible: false,
      fill: am5.color(0xffffff),
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
      })
    );

    // Smooth Line Series
    const series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        name: "Revenue",
        xAxis,
        yAxis,
        valueYField: "revenue",
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{categoryX}: ₹ {valueY}M",
        }),
      })
    );

    // Line Style
    series.strokes.template.setAll({
      strokeWidth: 4,
      strokeOpacity: 0,
      stroke: am5.color(0xDDB162),
    });

    // Area Fill
    series.fills.template.setAll({
      visible: true,
      fillGradient: am5.LinearGradient.new(root, {
        stops: [
          {
            color: am5.color(0xDDB162),
            opacity: 0.9,
          },
          {
            color: am5.color(0xDDB162),
            opacity: 0.1,
          },
        ],
      }),
    });

    // Dots
    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 6,
          fill: am5.color(0xDDB162),
          stroke: am5.color(0xffffff),
          strokeWidth: 2,
        }),
      });
    });

    series.data.setAll(data);

    // Animation
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  const [activeReview, setActiveReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const goToReview = useCallback(
    (index: number) => {
      setReviewDirection(index > activeReview ? 1 : -1);
      setActiveReview(index);
    },
    [activeReview]
  );

  const goNextReview = useCallback(() => {
    setReviewDirection(1);
    setActiveReview((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrevReview = useCallback(() => {
    setReviewDirection(-1);
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNextReview, 6000);
    return () => clearInterval(timer);
  }, [goNextReview]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const activeReviewData = reviews[activeReview];
  const reviewInitials = activeReviewData.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video */}
        <video
          src="/banner.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col gap-4 justify-end h-full max-w-7xl mx-auto py-30">
          <h1 className="text-white text-3xl md:text-[80px] font-bold uppercase flex gap-2 items-start">
            <div className="text-[#084E75]"><Image src={initial} alt="inital" className="-mt-4" width={70} height={70}/></div><span><DiaTextReveal repeat duration={1.8} repeatDelay={1} text={["ERSISTANCE", "LANNING", "ERFORMANCE"]}/></span>
          </h1>
          <p className="text-white text-2xl leading-relaxed max-w-xl">Strategic Financial Advisory Solutions Designed to Strengthen and Scale Businesses</p>
          <div className="flex gap-5 mt-5">
            <div>
              <button className="px-6 py-3 rounded-4xl border-2 border-[#084E75] bg-[#084E75] text-white text-base font-semibold cursor-pointer text-center shadow-[5px_5px] shadow-[#084E75]/40">Our Services</button>
            </div>
            <div>
              <button className="px-6 py-3 rounded-4xl border-2 border-[#DDB162] bg-[#DDB162] text-white text-base font-semibold cursor-pointer text-center shadow-[5px_5px] shadow-[#DDB162]/40">Our Blogs</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6">
          <div>
              <h2 className="text-5xl leading-14 capitalize font-semibold"><span className="text-[#084E75]">Delivering Strategic Financial Solutions That</span><span className="text-[#DDB162]"> Empower Businesses to Grow with Confidence </span></h2>
            <div className="mt-4">
              <ul className="list-disc ml-4">
                <li className="text-lg text-[#084E75] mb-2">Funding and financial solutions designed for sustainable business growth</li>
                <li className="text-lg text-[#084E75] mb-2">Advisory support focused on performance, stability, and expansion</li>
                <li className="text-lg text-[#084E75] mb-2">Strategic guidance for businesses across multiple growth stages</li>
                <li className="text-lg text-[#084E75] mb-2">Ethical, transparent, and client-focused advisory approach</li>
                <li className="text-lg text-[#084E75] mb-2">Helping MSMEs and enterprises scale with financial confidence</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <Link href="/about-us" className="px-6 py-3 rounded-4xl bg-[#084E75] text-white text-base font-semibold cursor-pointer text-center shadow-[5px_5px] shadow-[#084E75]/40">Learn More About Us</Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-start relative">
            <div className="rounded-4xl w-130 relative">
              <div className=" bg-white border border-[#084E75]/10 shadow-lg rounded-4xl p-4">
                <div className="absolute top-20 left-15 flex flex-col gap-2">
                  <p className="text-sm text-[#084E75]">Disbursements Facilitated</p>
                  <p className="text-3xl font-bold text-[#DDB162]">₹340Cr+</p>
                  <p className="text-base font-semibold text-[#084E75]">Fueling business growth <br/>accross India</p>
                </div>
                <div
                  id="chartdiv"
                  className="relative"
                  style={{
                    width: "100%",
                    height: "400px",
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-6">
                {achievements.map((data)=>
                  <div key={data.id} className="bg-white border border-[#084E75]/10 flex flex-col items-start justify-center gap-0 p-4 rounded-4xl shadow-lg h-30">
                    <p className="text-lg text-[#DDB162] text-left font-bold">{data.heading}</p>
                    <p className="text-sm text-[#084E75] text-left font-bold">{data.label}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative pt-20 pb-0">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-semibold text-[#084E75] leading-14">Expert Solutions For Every <br /><span className="text-[#DDB162]">Stage Of Growth</span></h3>
          <div className="mt-8">
            <HorizontalScrollCarousel cards={services}/>
          </div>
        </div>
      </section>

      <section className="bg-[#8E8E90]/5 relative py-20">
        <div className="max-w-7xl mx-auto h-120 bg-white shadow-lg backdrop-blur-lg rounded-4xl grid grid-cols-2 px-10 border border-gray-200 relative overflow-hidden">
          <div className="bg-linear-to-br from-[#DDB162]/10 from-40% to-[#8D1821]/5 rounded-full w-80 h-80 -top-30 -right-30 absolute"/>
          <div className="bg-linear-to-br from-[#DDB162]/10 from-40% to-[#8D1821]/5 rounded-full w-100 h-100 -bottom-30 -left-30 absolute"/>
          <div className="flex flex-col justify-center">
            <h4 className="text-5xl text-[#084E75] font-semibold mb-4 leading-16">Proactive Financial Expertise</h4>
            <p className="text-lg">Tailored financial solutions designed to help MSMEs and businesses improve stability, optimize performance, and achieve sustainable growth</p>
          </div>
          <div className="flex flex-col justify-center">
            <Image src={intro} alt="Intro Image" className="h-100 w-full"/>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#084E75] py-14">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="max-w-xl">
            <h5 className="text-5xl leading-16 font-semibold text-white">Ready to strengthen your business finances?</h5>
            <p className="mt-3 text-white/70 text-lg">Connect with our advisory team and discover solutions tailored to your growth goals.</p>
          </div>
          <div className="flex items-center">
            <Link href="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-4xl bg-[#DDB162] px-8 py-4 text-base font-semibold text-white transition-all shadow-[5px_5px] shadow-[#DDB162]/50">
              Get In Touch
              <IconArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>


      {/* Client Reviews */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-[#5BBCEB]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <h5 className="text-4xl font-semibold leading-tight text-[#084E75] md:text-5xl">
                Trusted by Businesses
                <br />
                <span className="text-[#DDB162]">Across India</span>
              </h5>
            </div>

            <div className="flex items-center gap-6 rounded-4xl border border-[#084E75]/10 bg-[#084E75]/5 px-6 py-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#084E75]">4.9</p>
                <div className="mt-1 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="size-4 text-[#DDB162]" />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-[#084E75]/15" />
              <div>
                <p className="text-2xl font-bold text-[#084E75]">1600+</p>
                <p className="text-sm text-[#8E8E90]">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={reviewDirection}>
                <motion.div
                  key={activeReview}
                  custom={reviewDirection}
                  initial={{ opacity: 0, x: reviewDirection >= 0 ? 80 : -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reviewDirection >= 0 ? -80 : 80 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="relative overflow-hidden rounded-4xl bg-[#084E75] p-8 md:p-10">
                    <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/5" />
                    <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-[#5BBCEB]/10" />
                    <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                      <div>
                        <IconQuote className="mb-4 size-10 text-white/20" />
                        <p className="mb-6 text-lg leading-relaxed text-white/90 md:text-xl">
                          &ldquo;{activeReviewData.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex size-12 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white">
                            {reviewInitials}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{activeReviewData.name}</p>
                            <p className="text-sm text-white/60">
                              {activeReviewData.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IconStarFilled key={i} className="size-4 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => goToReview(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeReview
                        ? "w-8 bg-[#084E75]"
                        : "w-2 bg-[#084E75]/25 hover:bg-[#084E75]/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={goPrevReview}
                  className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#084E75]/15 bg-white text-[#084E75] transition-colors hover:bg-[#084E75] hover:text-white"
                >
                  <IconChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={goNextReview}
                  className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#084E75]/15 bg-white text-[#084E75] transition-colors hover:bg-[#084E75] hover:text-white"
                >
                  <IconChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-[#8E8E90]">
              {String(activeReview + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 from-50% to-[#8D1821]/10 backdrop-blur-lg py-24">

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h5 className="text-4xl font-semibold text-[#084E75] md:text-5xl">
              Let&apos;s Start a Conversation
            </h5>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#8E8E90]">
              Tell us about your business goals. Our advisory team will respond within one business day.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-4xl bg-[#084E75] p-8 text-white shadow-md shadow-[#084E75]/8">
                <h5 className="mb-2 text-2xl font-semibold">Ready to Move Your Business Forward?</h5>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="group flex items-start gap-4 rounded-4xl border border-[#084E75]/10 bg-white p-5 transition-all duration-300 hover:border-[#084E75]/25 shadow-md shadow-[#084E75]/8"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-4xl bg-[#084E75]/10 text-[#084E75] transition-colors group-hover:bg-[#084E75] group-hover:text-white">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#8E8E90]">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 block font-medium text-[#084E75] hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-medium text-[#084E75]">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-4xl border border-[#084E75]/10 bg-white p-8 shadow-xl shadow-[#084E75]/5 md:p-10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-105 flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#084E75]/10 text-[#084E75]">
                    <IconCheck className="size-8" />
                  </div>
                  <h5 className="text-2xl font-bold text-[#084E75]">Message Sent!</h5>
                  <p className="mt-3 max-w-sm text-[#8E8E90]">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
                    }}
                    className="mt-8 cursor-pointer rounded-xl border-2 border-[#084E75] px-6 py-3 text-sm font-semibold text-[#084E75] transition-colors hover:bg-[#084E75] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleFormChange} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleFormChange} placeholder="you@company.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleFormChange} placeholder="+91 98765 43210" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Company
                      </label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleFormChange} placeholder="Your company name" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-[#084E75]">
                      Service of Interest
                    </label>
                    <select id="service" name="service" value={form.service} onChange={handleFormChange} className={`${inputClass} cursor-pointer appearance-none`}>
                      <option value="">Select a service</option>
                      {contactServices.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#084E75]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleFormChange} placeholder="Tell us about your business needs and goals..." className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#084E75]/25 transition-all duration-300 hover:bg-[#0a5d8a] hover:shadow-xl hover:shadow-[#084E75]/30"
                  >
                    Send Message
                    <IconSend className="size-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}