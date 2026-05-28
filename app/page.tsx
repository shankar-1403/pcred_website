'use client';
import { useLayoutEffect } from "react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import initial from "../public/logo.png";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Image from "next/image";
import HorizontalScrollCarousel from "@/components/ui/card-carousel";

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
      description:
        'Helping businesses access the right capital opportunities and navigate financial markets with confidence.',
    },
    {
      id: 2,
      label: 'FISCAL OPTIMIZATION',
      description:
        'Creating efficient financial structures that support profitability, compliance, and long-term business growth.',
    },
    {
      id: 3,
      label: 'INVESTMENT STRATEGY CONSULTING',
      description:
        'Designing investment strategies that align financial resources with business objectives and future aspirations.',
    },
    {
      id: 4,
      label: 'CREDIT RATING OPTIMIZATION',
      description:
        'Strengthening your credit profile to improve financing opportunities and build greater lender confidence.',
    },
    {
      id: 5,
      label: 'VIRTUAL CFO SERVICES',
      description:
        'Providing strategic financial leadership, insights, and oversight to support informed business decisions.',
    },
    {
      id: 6,
      label: 'RISK MANAGEMENT ADVISORY',
      description:
        'Identifying potential risks and developing practical strategies to protect business stability and performance.',
    },
    {
      id: 7,
      label: 'TREASURY MANAGEMENT SERVICES',
      description:
        'Enhancing cash flow visibility and liquidity management to support efficient financial operations.',
    },
    {
      id: 8,
      label: 'SUCCESSION PLANNING ADVISORY',
      description:
        'Preparing businesses for seamless leadership transitions while preserving long-term continuity and value.',
    },
    {
      id: 9,
      label: 'CORPORATE GOVERNANCE ADVISORY',
      description:
        'Establishing strong governance practices that promote accountability, transparency, and sustainable growth.',
    },
    {
      id: 10,
      label: 'ESG & SUSTAINABILITY ADVISORY',
      description:
        'Helping businesses integrate responsible practices that create lasting value for stakeholders and society.',
    },
    {
      id: 11,
      label: 'BUSINESS VALUATION SERVICES',
      description:
        'Delivering reliable valuation insights to support fundraising, transactions, and strategic business decisions.',
    },
    {
      id: 12,
      label: 'PRIVATE FUND ADVISORY',
      description:
        'Connecting businesses with suitable capital sources to support expansion and growth initiatives.',
    },
    {
      id: 13,
      label: 'GOVERNMENT SCHEME ADVISORY',
      description:
        'Guiding businesses in identifying and leveraging government programs, incentives, and support opportunities.',
    },
    {
      id: 14,
      label: 'DEBT ADVISORY',
      description:
        'Structuring debt solutions that strengthen financial stability and support future business objectives.',
    },
    {
      id: 15,
      label: 'IPO ADVISORY',
      description:
        'Supporting businesses through every stage of their journey towards capital market readiness.',
    },
    {
      id: 16,
      label: 'WEALTH MANAGEMENT & FAMILY OFFICE SERVICES',
      description:
        'Offering personalized wealth strategies focused on preservation, growth, and legacy planning.',
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
      fill: am5.color(0xffffff),
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
      strokeOpacity: 1,
      stroke: am5.color(0x084E75),
    });

    // Area Fill
    series.fills.template.setAll({
      visible: true,
      fillGradient: am5.LinearGradient.new(root, {
        stops: [
          {
            color: am5.color(0x084E75),
            opacity: 0.9,
          },
          {
            color: am5.color(0x5BBCEB),
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
          fill: am5.color(0x084E75),
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
            <div className="h-150 bg-[#084E75] rounded-lg w-130 p-6 relative">
              <div className="h-120">
                <div className="absolute top-10 left-6 flex flex-col gap-3">
                  <p className="uppercase text-xs text-white">Disbursements Facilitated</p>
                  <p className="text-4xl font-bold text-white">₹340Cr+</p>
                  <p className="text-base text-white">Fueling business growth <br/>accross India</p>
                </div>

                <div
                  id="chartdiv"
                  className="relative"
                  style={{
                    width: "100%",
                    height: "450px",
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((data)=>
                  <div className="bg-[#0a5d8a] flex flex-col items-center gap-2 p-2 rounded-lg">
                    <p className="text-lg text-white font-bold">{data.heading}</p>
                    <p className="text-sm text-white">{data.label}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#084E75] relative pt-20 pb-0">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white">Expert Solutions For Every Stage Of Growth</h3>
          <div className="mt-8">
            <HorizontalScrollCarousel cards={services}/>
          </div>
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">

        </div>
      </div>
    </>
  );
}