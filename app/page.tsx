'use client';
import { useLayoutEffect } from "react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import initial from "../public/logo.png";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Image from "next/image";

export default function Home() {
  const achievements = [
    {id:1,heading:'322cr',label:'Total disbursement'},
    {id:2,heading:'16+',label:'Years of Experience'},
    {id:3,heading:'1600+',label:'Satisfied Customers'},
  ]

  const services = [
    {
      label: 'CAPITAL MARKET ADVISORY',
      description:
        'Helping businesses access the right capital opportunities and navigate financial markets with confidence.',
    },
    {
      label: 'FISCAL OPTIMIZATION',
      description:
        'Creating efficient financial structures that support profitability, compliance, and long-term business growth.',
    },
    {
      label: 'INVESTMENT STRATEGY CONSULTING',
      description:
        'Designing investment strategies that align financial resources with business objectives and future aspirations.',
    },
    {
      label: 'CREDIT RATING OPTIMIZATION',
      description:
        'Strengthening your credit profile to improve financing opportunities and build greater lender confidence.',
    },
    {
      label: 'VIRTUAL CFO SERVICES',
      description:
        'Providing strategic financial leadership, insights, and oversight to support informed business decisions.',
    },
    {
      label: 'RISK MANAGEMENT ADVISORY',
      description:
        'Identifying potential risks and developing practical strategies to protect business stability and performance.',
    },
    {
      label: 'TREASURY MANAGEMENT SERVICES',
      description:
        'Enhancing cash flow visibility and liquidity management to support efficient financial operations.',
    },
    {
      label: 'SUCCESSION PLANNING ADVISORY',
      description:
        'Preparing businesses for seamless leadership transitions while preserving long-term continuity and value.',
    },
    {
      label: 'CORPORATE GOVERNANCE ADVISORY',
      description:
        'Establishing strong governance practices that promote accountability, transparency, and sustainable growth.',
    },
    {
      label: 'ESG & SUSTAINABILITY ADVISORY',
      description:
        'Helping businesses integrate responsible practices that create lasting value for stakeholders and society.',
    },
    {
      label: 'BUSINESS VALUATION SERVICES',
      description:
        'Delivering reliable valuation insights to support fundraising, transactions, and strategic business decisions.',
    },
    {
      label: 'PRIVATE FUND ADVISORY',
      description:
        'Connecting businesses with suitable capital sources to support expansion and growth initiatives.',
    },
    {
      label: 'GOVERNMENT SCHEME ADVISORY',
      description:
        'Guiding businesses in identifying and leveraging government programs, incentives, and support opportunities.',
    },
    {
      label: 'DEBT ADVISORY',
      description:
        'Structuring debt solutions that strengthen financial stability and support future business objectives.',
    },
    {
      label: 'IPO ADVISORY',
      description:
        'Supporting businesses through every stage of their journey towards capital market readiness.',
    },
    {
      label: 'WEALTH MANAGEMENT & FAMILY OFFICE SERVICES',
      description:
        'Offering personalized wealth strategies focused on preservation, growth, and legacy planning.',
    },
  ]

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");
    root._logo?.dispose();

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout,
      })
    );

    const data = [
      { year: "2019", revenue: 850 },
      { year: "2020", revenue: 1080 },
      { year: "2021", revenue: 1370 },
      { year: "2022", revenue: 1740 },
      { year: "2023", revenue: 2070 },
      { year: "2024", revenue: 2450 },
    ];

    // X Axis
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
      })
    );

    xAxis.data.setAll(data);

    // Y Axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
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

    // Column Design
    series.columns.template.setAll({
      width: am5.percent(60),
      strokeOpacity: 0,
      cornerRadiusTL: 12,
      cornerRadiusTR: 12,
      fillGradient: am5.LinearGradient.new(root, {
        stops: [
          {
            color: am5.color(0x084E75),
          },
          {
            color: am5.color(0x084E75),
          },
        ],
      }),
    });

    // Labels
    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        locationY: 1,
        sprite: am5.Label.new(root, {
          text: "₹ {valueY}M",
          populateText: true,
          centerX: am5.percent(50),
          centerY: am5.percent(100),
          dy: -10,
          fill: am5.color(0x000000),
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
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
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
        <div className="relative z-20 flex flex-col gap-4 justify-end h-full max-w-7xl mx-auto px-6 py-30">
          <h1 className="text-white text-3xl md:text-[80px] font-bold uppercase flex gap-2 items-start">
            <div className="text-[#084E75]"><Image src={initial} alt="inital" className="-mt-4" width={70} height={70}/></div><span><DiaTextReveal repeat duration={1.8} repeatDelay={1} text={["ERSISTANCE", "LANNING", "ERFORMANCE"]}/></span>
          </h1>
          <p className="text-white text-2xl leading-relaxed max-w-xl">Strategic Financial Advisory Solutions Designed to Strengthen and Scale Businesses</p>
          <div className="flex gap-5 mt-5">
            <div>
              <button className="px-6 py-3 rounded-lg border-2 border-[#084E75] bg-[#084E75] text-white text-base font-semibold cursor-pointer text-center">Our Services</button>
            </div>
            <div>
              <button className="px-6 py-3 rounded-lg border-2 border-[#084E75] text-white text-base font-semibold cursor-pointer text-center">Our Services</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-4xl leading-normal capitalize"><span className="text-[#8E8E90] font-semibold">Delivering Strategic Financial Solutions That</span><br/><span className="font-bold text-[#084E75]"> Empower Businesses to Grow with Confidence </span></h2>
            <div className="mt-4">
              <ul className="list-disc ml-4">
                <li className="text-lg text-[#084E75] py-2">Funding and financial solutions designed for sustainable business growth</li>
                <li className="text-lg text-[#084E75] py-2">Advisory support focused on performance, stability, and expansion</li>
                <li className="text-lg text-[#084E75] py-2">Strategic guidance for businesses across multiple growth stages</li>
                <li className="text-lg text-[#084E75] py-2">Ethical, transparent, and client-focused advisory approach</li>
                <li className="text-lg text-[#084E75] py-2">Helping MSMEs and enterprises scale with financial confidence</li>
              </ul>
              <div className="flex gap-4 mt-6">
                <div>
                  <button className="px-6 py-3 rounded-lg bg-[#084E75] text-white text-base font-semibold cursor-pointer text-center shadow-[5px_5px] shadow-[#084E75]/40">Learn More About Us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="h-full bg-[#084E75]/10 rounded-lg w-130 p-6 flex justify-center items-center">
              <div
                id="chartdiv"
                style={{
                  width: "100%",
                  height: "450px",
                }}
              />
            </div>
            <div className="bg-white absolute rounded-lg flex gap-2 justify-center items-center p-4 -bottom-6 -left-2 shadow-lg">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg">3,40,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#084E75] relative py-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white">Expert Solutions For Every Stage Of Growth</h3>
          <div className="mt-8 grid grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.label}
                className="group relative bg-[#084E75] p-4 hover:bg-[#0a5d8a] transition-all duration-500 cursor-pointer"
              >
                {/* index */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-cyan-300/60 text-xs font-mono tracking-wider">
                    {i + 1}
                  </span>
                </div>

                <h4 className="text-white text-lg font-medium capitalize mb-3 h-14">
                  {service.label}
                </h4>
                <p className="text-white/60 text-base leading-relaxed mb-8 h-20">
                  {service.description}
                </p>

                {/* animated bottom rule */}
                <div className="h-px w-full bg-white/10 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-linear-to-r from-cyan-300 to-transparent transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}