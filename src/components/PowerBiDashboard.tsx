import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  Filter, 
  Database, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Terminal,
  Play,
  BarChart3,
  CheckCircle2,
  Users,
  ShoppingBag,
  DollarSign
} from 'lucide-react';

// Seed raw data representing a sales database
interface SalesRecord {
  id: string;
  product: string;
  category: 'Technology' | 'Furniture' | 'Office Supplies';
  subCategory: string;
  sales: number;
  profit: number;
  orders: number;
  customers: number;
  region: 'Bengaluru' | 'Mumbai' | 'Delhi' | 'Chennai';
  month: string; // 'Jan', 'Feb', etc.
}

const RAW_SALES_DATA: SalesRecord[] = [
  // Jan
  { id: '1', product: 'Smart Watch X1', category: 'Technology', subCategory: 'Gadgets', sales: 45000, profit: 12000, orders: 150, customers: 120, region: 'Bengaluru', month: 'Jan' },
  { id: '2', product: 'Ergonomic Desk', category: 'Furniture', subCategory: 'Chairs', sales: 30000, profit: 5000, orders: 80, customers: 75, region: 'Mumbai', month: 'Jan' },
  { id: '3', product: 'Laser Printer', category: 'Technology', subCategory: 'Printers', sales: 25000, profit: 8000, orders: 50, customers: 48, region: 'Delhi', month: 'Jan' },
  { id: '4', product: 'Premium Notebooks', category: 'Office Supplies', subCategory: 'Paper', sales: 12000, profit: 4000, orders: 200, customers: 180, region: 'Chennai', month: 'Jan' },
  // Feb
  { id: '5', product: 'Smart Watch X1', category: 'Technology', subCategory: 'Gadgets', sales: 52000, profit: 15000, orders: 170, customers: 140, region: 'Bengaluru', month: 'Feb' },
  { id: '6', product: 'Executive Chair', category: 'Furniture', subCategory: 'Chairs', sales: 35000, profit: 7000, orders: 90, customers: 85, region: 'Mumbai', month: 'Feb' },
  { id: '7', product: 'LED Projector', category: 'Technology', subCategory: 'Gadgets', sales: 40000, profit: 11000, orders: 60, customers: 58, region: 'Delhi', month: 'Feb' },
  { id: '8', product: 'File Organizers', category: 'Office Supplies', subCategory: 'Binders', sales: 15000, profit: 5500, orders: 250, customers: 210, region: 'Chennai', month: 'Feb' },
  // Mar
  { id: '9', product: 'Smart Watch X1', category: 'Technology', subCategory: 'Gadgets', sales: 61000, profit: 18000, orders: 210, customers: 190, region: 'Bengaluru', month: 'Mar' },
  { id: '10', product: 'Standing Desk Pro', category: 'Furniture', subCategory: 'Tables', sales: 48000, profit: 9500, orders: 110, customers: 100, region: 'Mumbai', month: 'Mar' },
  { id: '11', product: 'Dual Monitor Arm', category: 'Technology', subCategory: 'Gadgets', sales: 28000, profit: 9000, orders: 120, customers: 115, region: 'Delhi', month: 'Mar' },
  { id: '12', product: 'Desk Organizer', category: 'Office Supplies', subCategory: 'Art', sales: 18000, profit: 6000, orders: 300, customers: 270, region: 'Chennai', month: 'Mar' },
  // Apr
  { id: '13', product: 'Conference Mic', category: 'Technology', subCategory: 'Phones', sales: 65000, profit: 21000, orders: 130, customers: 110, region: 'Bengaluru', month: 'Apr' },
  { id: '14', product: 'Bean Bag Chair', category: 'Furniture', subCategory: 'Chairs', sales: 22000, profit: 4500, orders: 140, customers: 130, region: 'Mumbai', month: 'Apr' },
  { id: '15', product: 'Webcam 4K Ultra', category: 'Technology', subCategory: 'Gadgets', sales: 39000, profit: 13000, orders: 190, customers: 175, region: 'Delhi', month: 'Apr' },
  { id: '16', product: 'Whiteboard Pack', category: 'Office Supplies', subCategory: 'Paper', sales: 21000, profit: 7500, orders: 280, customers: 240, region: 'Chennai', month: 'Apr' },
  // May
  { id: '17', product: 'Smart Watch X1', category: 'Technology', subCategory: 'Gadgets', sales: 70000, profit: 24000, orders: 230, customers: 210, region: 'Bengaluru', month: 'May' },
  { id: '18', product: 'L-Shaped Desk', category: 'Furniture', subCategory: 'Tables', sales: 55000, profit: 11000, orders: 95, customers: 90, region: 'Mumbai', month: 'May' },
  { id: '19', product: 'Mechanical Keyboard', category: 'Technology', subCategory: 'Gadgets', sales: 34000, profit: 10000, orders: 220, customers: 200, region: 'Delhi', month: 'May' },
  { id: '20', product: 'Acrylic Sign Holders', category: 'Office Supplies', subCategory: 'Binders', sales: 19000, profit: 6500, orders: 310, customers: 290, region: 'Chennai', month: 'May' },
  // Jun
  { id: '21', product: 'Smart Watch X1', category: 'Technology', subCategory: 'Gadgets', sales: 78000, profit: 26000, orders: 250, customers: 230, region: 'Bengaluru', month: 'Jun' },
  { id: '22', product: 'Ergonomic Desk', category: 'Furniture', subCategory: 'Chairs', sales: 42000, profit: 8000, orders: 115, customers: 105, region: 'Mumbai', month: 'Jun' },
  { id: '23', product: 'Noise Canceling Pods', category: 'Technology', subCategory: 'Gadgets', sales: 58000, profit: 17500, orders: 180, customers: 160, region: 'Delhi', month: 'Jun' },
  { id: '24', product: 'Heavy Duty Stapler', category: 'Office Supplies', subCategory: 'Binders', sales: 16000, profit: 5000, orders: 240, customers: 220, region: 'Chennai', month: 'Jun' },
];

const SQL_PRESETS = [
  {
    id: 'q1',
    label: 'Get Total Revenue by Category',
    query: 'SELECT category, SUM(sales) AS total_sales\nFROM sales_db\nGROUP BY category\nORDER BY total_sales DESC;',
    resultType: 'table',
    headers: ['category', 'total_sales'],
    rows: [
      ['Technology', '₹3,71,000'],
      ['Furniture', '₹2,67,000'],
      ['Office Supplies', '₹1,01,000']
    ]
  },
  {
    id: 'q2',
    label: 'Find High Profit Margin Products',
    query: 'SELECT product, SUM(profit) / SUM(sales) * 100 AS profit_margin\nFROM sales_db\nGROUP BY product\nHAVING SUM(sales) > 30000\nORDER BY profit_margin DESC\nLIMIT 3;',
    resultType: 'table',
    headers: ['product', 'profit_margin'],
    rows: [
      ['Smart Watch X1', '32.1%'],
      ['Laser Printer', '32.0%'],
      ['Webcam 4K Ultra', '33.3%']
    ]
  },
  {
    id: 'q3',
    label: 'Monthly Regional Performance',
    query: 'SELECT month, region, SUM(sales) AS monthly_sales\nFROM sales_db\nWHERE region IN ("Bengaluru", "Chennai")\nGROUP BY month, region\nORDER BY month;',
    resultType: 'table',
    headers: ['month', 'region', 'monthly_sales'],
    rows: [
      ['Jan', 'Bengaluru', '₹45,000'],
      ['Jan', 'Chennai', '₹12,000'],
      ['Feb', 'Bengaluru', '₹52,000'],
      ['Feb', 'Chennai', '₹15,000'],
      ['Mar', 'Bengaluru', '₹61,000'],
      ['Mar', 'Chennai', '₹18,000']
    ]
  }
];

const CO_PILOT_QUESTIONS = [
  "What is our best-performing region and category?",
  "How can I improve sales in Office Supplies?",
  "Analyze the profit margin trends across the 6-month period."
];

export default function PowerBiDashboard() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'sql' | 'ai'>('dashboard');
  
  // SQL Terminal State
  const [activeSqlQuery, setActiveSqlQuery] = useState<string>(SQL_PRESETS[0].query);
  const [sqlResult, setSqlResult] = useState<any>(SQL_PRESETS[0]);
  const [isRunningSql, setIsRunningSql] = useState<boolean>(false);

  // AI Assistant State
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'ai', text: string }>>([
    { sender: 'ai', text: 'Hello! I am your Daki AI Copilot. Ask me anything about this sales data, or select one of the suggested analytical questions below!' }
  ]);
  const [userMsg, setUserMsg] = useState<string>('');

  // Filter Data Dynamically
  const filteredData = useMemo(() => {
    return RAW_SALES_DATA.filter(item => {
      const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchRegion && matchCategory;
    });
  }, [selectedRegion, selectedCategory]);

  // Aggregate Metrics based on filter
  const metrics = useMemo(() => {
    let sales = 0;
    let profit = 0;
    let orders = 0;
    let customers = 0;

    filteredData.forEach(item => {
      sales += item.sales;
      profit += item.profit;
      orders += item.orders;
      customers += item.customers;
    });

    const profitMargin = sales > 0 ? (profit / sales) * 100 : 0;

    return {
      sales: `₹${(sales / 1000).toFixed(0)}K`,
      profit: `₹${(profit / 1000).toFixed(1)}K`,
      orders: orders.toLocaleString(),
      customers: customers.toLocaleString(),
      profitMargin: `${profitMargin.toFixed(1)}%`
    };
  }, [filteredData]);

  // Aggregate charts data
  const chartDataOverTime = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return months.map(m => {
      let sales = 0;
      let profit = 0;
      filteredData.forEach(item => {
        if (item.month === m) {
          sales += item.sales;
          profit += item.profit;
        }
      });
      return { month: m, sales, profit };
    });
  }, [filteredData]);

  const chartDataByCategory = useMemo(() => {
    const categories: ('Technology' | 'Furniture' | 'Office Supplies')[] = ['Technology', 'Furniture', 'Office Supplies'];
    let total = 0;
    const values = categories.map(cat => {
      let sales = 0;
      filteredData.forEach(item => {
        if (item.category === cat) sales += item.sales;
      });
      total += sales;
      return { name: cat, sales };
    });

    return values.map(v => ({
      ...v,
      percentage: total > 0 ? (v.sales / total) * 100 : 0
    }));
  }, [filteredData]);

  const topProducts = useMemo(() => {
    const prodMap: Record<string, { name: string, sales: number, profit: number }> = {};
    filteredData.forEach(item => {
      if (!prodMap[item.product]) {
        prodMap[item.product] = { name: item.product, sales: 0, profit: 0 };
      }
      prodMap[item.product].sales += item.sales;
      prodMap[item.product].profit += item.profit;
    });

    return Object.values(prodMap)
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 5);
  }, [filteredData]);

  // Handle SQL Execution Simulation
  const handleRunSql = (queryText: string) => {
    setIsRunningSql(true);
    setTimeout(() => {
      const preset = SQL_PRESETS.find(p => p.query.trim() === queryText.trim()) || {
        headers: ['Query Result'],
        rows: [['1 row returned successfully (No changes made in trial model)']],
        resultType: 'msg'
      };
      setSqlResult(preset);
      setIsRunningSql(false);
    }, 600);
  };

  // Handle AI Chat Simulation
  const handleSendAiMessage = (msg: string) => {
    if (!msg.trim()) return;
    const newHistory = [...chatHistory, { sender: 'user', text: msg }];
    setChatHistory(newHistory);
    setUserMsg('');

    // Simulated analytical intelligence response
    setTimeout(() => {
      let response = "Excellent query. Looking closely at the aggregated data, ";
      const lower = msg.toLowerCase();

      if (lower.includes('best') || lower.includes('region') || lower.includes('performance')) {
        response += "Bengaluru is our clear star region, driven heavily by sales of the 'Smart Watch X1' which fetched over ₹3.8 Lakhs alone. Technology remains our biggest category, making up roughly 51.2% of total receipts, followed by Furniture.";
      } else if (lower.includes('improve') || lower.includes('office') || lower.includes('supplies')) {
        response += "Office Supplies holds an exceptional profit margin of 31-35%, but currently only represents about 14% of gross sales volume. To scale overall profits, we should group accessories like Premium Notebooks and File Organizers as standard bundle items when delivering desks or technology setup items.";
      } else if (lower.includes('margin') || lower.includes('trend') || lower.includes('profit')) {
        response += "Our profit margin trends are exceptionally steady, sitting right around 26.8% in Q1 and increasing to 28.5% in Q2. This margin lift correlates directly with the sales spike in Gadgets (Smart Watch, Noise Cancelling Pods) and high-end tech services.";
      } else {
        response += "this analytical model indicates a highly predictable trend. Gross sales peaked in June at ₹1.94L, presenting an month-over-month growth of 14.8%. We recommend optimizing inventory levels for Technology and Furniture to handle this Q3 seasonal velocity.";
      }

      setChatHistory([...newHistory, { sender: 'ai', text: response }]);
    }, 800);
  };

  return (
    <div id="analytics-lab" className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Banner (Power BI/Dashboard header look) */}
      <div className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-500/10 text-indigo-400 p-2 rounded-lg">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
              Daki Hands-On Analytics Lab
              <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-medium border border-emerald-500/20 flex items-center gap-1 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Live Interactive
              </span>
            </h3>
            <p className="text-xs text-slate-400 font-sans">Practice real-time analytics with Power BI, SQL, and AI agents</p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/10' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="h-3.5 w-3.5" />
            Power BI View
          </button>
          <button
            onClick={() => setActiveTab('sql')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'sql' 
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/10' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Database className="h-3.5 w-3.5" />
            SQL Terminal
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'ai' 
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/10' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI Analyst
          </button>
        </div>
      </div>

      {/* FILTER PANEL - Only visible/active for Dashboard & AI analysis */}
      {activeTab === 'dashboard' && (
        <div className="bg-slate-950/60 px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold">
              <Filter className="h-3.5 w-3.5 text-indigo-400" />
              Filters:
            </div>
            
            {/* Region Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Region:</span>
              <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-800">
                {['All', 'Bengaluru', 'Mumbai', 'Delhi', 'Chennai'].map(reg => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      selectedRegion === reg
                        ? 'bg-slate-800 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Category:</span>
              <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-800">
                {['All', 'Technology', 'Furniture', 'Office Supplies'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-slate-800 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat === 'Office Supplies' ? 'Office' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              setSelectedRegion('All');
              setSelectedCategory('All');
            }}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <RefreshCw className="h-3 w-3" />
            Reset Filters
          </button>
        </div>
      )}

      {/* BODY WORKSPACE */}
      <div className="p-6">
        {/* ==================== TAB 1: POWER BI DASHBOARD ==================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Sales KPI */}
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Total Sales</span>
                  <span className="text-xl md:text-2xl font-mono font-bold text-white mt-1 block">{metrics.sales}</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-1 font-semibold">
                    <TrendingUp className="h-3 w-3" /> +14.8% MoM
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 hidden sm:block">
                  <DollarSign className="h-5 w-5" />
                </div>
              </div>

              {/* Profit KPI */}
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Total Profit</span>
                  <span className="text-xl md:text-2xl font-mono font-bold text-indigo-400 mt-1 block">{metrics.profit}</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-1 font-semibold">
                    <TrendingUp className="h-3 w-3" /> +12.3% MoM
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 hidden sm:block">
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>

              {/* Margin KPI */}
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Profit Margin</span>
                  <span className="text-xl md:text-2xl font-mono font-bold text-teal-400 mt-1 block">{metrics.profitMargin}</span>
                  <span className="text-[10px] text-teal-400 flex items-center gap-0.5 mt-1 font-semibold">
                    <CheckCircle2 className="h-3 w-3" /> Healthy Margin
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 hidden sm:block">
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>

              {/* Orders KPI */}
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Total Orders</span>
                  <span className="text-xl md:text-2xl font-mono font-bold text-white mt-1 block">{metrics.orders}</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-1 font-semibold">
                    <TrendingUp className="h-3 w-3" /> +8.5% MoM
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 hidden sm:block">
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </div>

              {/* Customers KPI */}
              <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex items-center justify-between col-span-2 lg:col-span-1">
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Total Customers</span>
                  <span className="text-xl md:text-2xl font-mono font-bold text-white mt-1 block">{metrics.customers}</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-1 font-semibold">
                    <TrendingUp className="h-3 w-3" /> +16.2% MoM
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 hidden sm:block">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Interactive Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Chart 1: Sales & Profit Over Time (Area Chart Simulation via SVGs) */}
              <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl lg:col-span-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-semibold text-white text-sm">Sales & Profit Trends (6-Month Range)</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="h-2 w-4 rounded bg-[#3b82f6]"></span> Sales
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className="h-2 w-4 rounded bg-[#818cf8]"></span> Profit
                    </div>
                  </div>
                </div>

                {/* SVG Area Chart */}
                <div className="relative h-64 w-full">
                  <svg className="w-full h-full" viewBox="0 0 600 220" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="40" y1="20" x2="580" y2="20" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="40" y1="70" x2="580" y2="70" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="40" y1="120" x2="580" y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="40" y1="170" x2="580" y2="170" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Area path for Sales */}
                    <path
                      d={`
                        M 40 180 
                        L 140 ${180 - (chartDataOverTime[0].sales / 1200)}
                        L 240 ${180 - (chartDataOverTime[1].sales / 1200)}
                        L 340 ${180 - (chartDataOverTime[2].sales / 1200)}
                        L 440 ${180 - (chartDataOverTime[3].sales / 1200)}
                        L 540 ${180 - (chartDataOverTime[4].sales / 1200)}
                        L 580 ${180 - (chartDataOverTime[5].sales / 1200)}
                        L 580 180 Z
                      `}
                      fill="url(#salesAreaGrad)"
                      opacity="0.2"
                    />

                    {/* Line path for Sales */}
                    <path
                      d={`
                        M 40 180
                        L 140 ${180 - (chartDataOverTime[0].sales / 1200)}
                        L 240 ${180 - (chartDataOverTime[1].sales / 1200)}
                        L 340 ${180 - (chartDataOverTime[2].sales / 1200)}
                        L 440 ${180 - (chartDataOverTime[3].sales / 1200)}
                        L 540 ${180 - (chartDataOverTime[4].sales / 1200)}
                        L 580 ${180 - (chartDataOverTime[5].sales / 1200)}
                      `}
                      stroke="#3b82f6"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />

                    {/* Line path for Profit */}
                    <path
                      d={`
                        M 40 180
                        L 140 ${180 - (chartDataOverTime[0].profit / 1200 * 3)}
                        L 240 ${180 - (chartDataOverTime[1].profit / 1200 * 3)}
                        L 340 ${180 - (chartDataOverTime[2].profit / 1200 * 3)}
                        L 440 ${180 - (chartDataOverTime[3].profit / 1200 * 3)}
                        L 540 ${180 - (chartDataOverTime[4].profit / 1200 * 3)}
                        L 580 ${180 - (chartDataOverTime[5].profit / 1200 * 3)}
                      `}
                      stroke="#818cf8"
                      strokeWidth="2.5"
                      strokeDasharray="2 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />

                    {/* Points on the line */}
                    {chartDataOverTime.map((pt, idx) => {
                      const x = 140 + idx * 85;
                      const ySales = 180 - (pt.sales / 1200);
                      const yProfit = 180 - (pt.profit / 1200 * 3);
                      return (
                        <g key={pt.month}>
                          <circle cx={x} cy={ySales} r="5" fill="#3b82f6" stroke="#071d33" strokeWidth="2" />
                          <circle cx={x} cy={yProfit} r="4" fill="#818cf8" stroke="#071d33" strokeWidth="1.5" />
                        </g>
                      );
                    })}

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="salesAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Month X-Axis labels */}
                  <div className="absolute bottom-1 left-0 right-0 flex justify-between px-[54px] text-[11px] text-slate-400 font-medium">
                    {chartDataOverTime.map(pt => (
                      <span key={pt.month}>{pt.month}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart 2: Category Share (Donut Chart Simulation via CSS) */}
              <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl lg:col-span-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-semibold text-white text-sm mb-4">Sales by Category Share</h4>
                  
                  {/* Visual Category Bars (Highly Readable & Responsive Representation) */}
                  <div className="space-y-4 my-6">
                    {chartDataByCategory.map((cat, idx) => {
                      const colors = ['bg-indigo-500', 'bg-teal-500', 'bg-amber-500'];
                      const textColors = ['text-indigo-400', 'text-teal-400', 'text-amber-400'];
                      return (
                        <div key={cat.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-slate-300">{cat.name}</span>
                            <span className={textColors[idx]}>{cat.percentage.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${colors[idx]} transition-all duration-500`}
                              style={{ width: `${cat.percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                            <span>Sales: ₹{(cat.sales / 1000).toFixed(0)}K</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-950/50 p-3 rounded-lg border border-slate-800/60 font-sans">
                  💡 <span className="text-white font-medium">Insights:</span> Click on filters above to see real-time recalculations of market percentage!
                </div>
              </div>

            </div>

            {/* Top Products Table & Regional Summary Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Product Leaderboard */}
              <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl lg:col-span-7">
                <h4 className="font-display font-semibold text-white text-sm mb-4">Top 5 Performing Products</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                     <thead>
                      <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                        <th className="py-3 px-2">Rank</th>
                        <th className="py-3 px-2">Product Name</th>
                        <th className="py-3 px-2 text-right">Gross Sales</th>
                        <th className="py-3 px-2 text-right">Net Profit</th>
                        <th className="py-3 px-2 text-center">Profit Margin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50 font-sans">
                      {topProducts.map((prod, idx) => {
                        const margin = prod.sales > 0 ? (prod.profit / prod.sales) * 100 : 0;
                        return (
                          <tr key={prod.name} className="hover:bg-slate-800/30 transition-colors">
                            <td className="py-3 px-2 font-mono text-indigo-400 font-bold">#0{idx + 1}</td>
                            <td className="py-3 px-2 font-medium text-white">{prod.name}</td>
                            <td className="py-3 px-2 text-right font-mono">₹{prod.sales.toLocaleString()}</td>
                            <td className="py-3 px-2 text-right font-mono text-emerald-400">₹{prod.profit.toLocaleString()}</td>
                            <td className="py-3 px-2 text-center">
                              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-medium">
                                {margin.toFixed(1)}%
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Regional Sales Heat Map simulation */}
              <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-semibold text-white text-sm mb-4">Regional Center Performance</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Bengaluru (HQ)', sales: 313000, profit: 98000, leads: 240, active: true },
                      { name: 'Mumbai', sales: 232000, profit: 46000, leads: 185, active: false },
                      { name: 'Delhi', sales: 161000, profit: 42000, leads: 110, active: false },
                      { name: 'Chennai', sales: 84000, profit: 30000, leads: 95, active: false },
                    ].map(reg => (
                      <div 
                        key={reg.name} 
                        className={`p-3 rounded-xl border transition-all ${
                          selectedRegion === reg.name.split(' ')[0] 
                            ? 'bg-indigo-500/5 border-indigo-500/30 shadow-sm' 
                            : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                            <span className={`h-1.5 w-1.5 rounded-full ${reg.active ? 'bg-indigo-500' : 'bg-slate-500'}`}></span>
                            {reg.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-white">₹{reg.sales.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-sans">
                          <span>Profit: <strong className="text-slate-300">₹{reg.profit.toLocaleString()}</strong></span>
                          <span>Inquiry Leads: <strong className="text-slate-300">{reg.leads}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 bg-indigo-500/5 border border-indigo-500/10 p-2.5 rounded-xl">
                  <Terminal className="h-4 w-4 text-indigo-400" />
                  <span>Want to query these tables directly with raw code? Switch to the <strong className="text-white">SQL Terminal</strong> tab above!</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================== TAB 2: SQL INTERACTIVE TERMINAL ==================== */}
        {activeTab === 'sql' && (
          <div className="space-y-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-500/10 text-indigo-400 p-2 rounded-lg">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Interactive SQL Code Console</h4>
                  <p className="text-xs text-slate-400">Write Structured Query Language scripts to fetch dynamic data tables</p>
                </div>
              </div>
              
              {/* Preset selectors */}
              <div className="flex flex-wrap gap-2">
                {SQL_PRESETS.map((preset, idx) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setActiveSqlQuery(preset.query);
                      setSqlResult(preset);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      activeSqlQuery === preset.query
                        ? 'bg-indigo-500/10 border-indigo-505 text-indigo-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Query 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* SQL Textarea Editor */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden lg:col-span-7 flex flex-col">
                <div className="bg-slate-950/40 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500"></span>
                    <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                    <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] text-slate-500 font-mono ml-2">sales_db.sql</span>
                  </div>
                  <button
                    onClick={() => handleRunSql(activeSqlQuery)}
                    disabled={isRunningSql}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 transition-colors shadow-sm shadow-indigo-600/10"
                  >
                    {isRunningSql ? (
                      <RefreshCw className="h-3 w-3 animate-spin" />
                    ) : (
                      <Play className="h-3 w-3 fill-white" />
                    )}
                    Run Query
                  </button>
                </div>

                {/* Simulated Editor */}
                <div className="p-4 bg-slate-950 flex-1 font-mono text-xs text-indigo-300">
                  <textarea
                    value={activeSqlQuery}
                    onChange={(e) => setActiveSqlQuery(e.target.value)}
                    className="w-full h-44 bg-transparent border-none outline-none resize-none font-mono text-emerald-400 focus:ring-0 leading-relaxed"
                    spellCheck="false"
                  />
                </div>

                <div className="bg-slate-950/40 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Database: <strong className="text-white">dakidb_prod</strong></span>
                  <span>Tables: <strong className="text-indigo-400">sales_db, students_list</strong></span>
                </div>
              </div>

              {/* SQL Query Result Console */}
              <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-5 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-3">Query Console Output:</span>
                  
                  {isRunningSql ? (
                     <div className="h-44 flex flex-col items-center justify-center gap-2 text-slate-400 font-sans">
                      <RefreshCw className="h-8 w-8 text-indigo-400 animate-spin" />
                      <span className="text-xs">Executing relational compile...</span>
                    </div>
                  ) : sqlResult ? (
                    <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden">
                      {sqlResult.resultType === 'table' ? (
                        <table className="w-full text-left text-xs text-slate-300 border-collapse">
                          <thead>
                            <tr className="bg-slate-900 border-b border-slate-800 font-mono text-[10px] text-slate-400">
                              {sqlResult.headers.map((h: string) => (
                                <th key={h} className="py-2.5 px-3 uppercase">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/40 font-mono text-emerald-400">
                            {sqlResult.rows.map((row: any, rIdx: number) => (
                              <tr key={rIdx} className="hover:bg-slate-900/40">
                                {row.map((val: string, cIdx: number) => (
                                  <td key={cIdx} className="py-2.5 px-3">{val}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="p-4 font-mono text-xs text-emerald-400">
                          {sqlResult.rows[0][0]}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-44 border border-dashed border-slate-800 rounded-xl flex items-center justify-center text-xs text-slate-500 italic font-sans">
                      Enter SQL and click Run Query to view table output
                    </div>
                  )}
                </div>

                <div className="mt-4 bg-indigo-500/5 border border-indigo-500/10 p-3 rounded-xl">
                  <h5 className="text-xs font-semibold text-white mb-1 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                    Learn SQL from Basics to Advanced!
                  </h5>
                  <p className="text-[10px] text-slate-400">
                    Our Daki program teaches you database optimization, windows functions, CTEs, subqueries, and real schema modeling in PostgreSQL and SQL Server.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: AI ANALYST COPILOT ==================== */}
        {activeTab === 'ai' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Chat Window */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden lg:col-span-8 flex flex-col h-[400px]">
                {/* Chat Top header */}
                <div className="bg-slate-950/40 border-b border-slate-800 px-4 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Daki AI Business Analyst</span>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Copilot Ready
                    </span>
                  </div>
                </div>

                {/* Messages Panel */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950 font-sans">
                  {chatHistory.map((chat, idx) => (
                    <div 
                      key={idx} 
                      className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                        chat.sender === 'user'
                          ? 'bg-indigo-600 text-white font-medium rounded-tr-none'
                          : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                      }`}>
                        {chat.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Panel */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendAiMessage(userMsg);
                  }}
                  className="bg-slate-950/40 p-3 border-t border-slate-800 flex gap-2"
                >
                  <input
                    type="text"
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                    placeholder="Ask the AI Analyst about sales, margins, or strategies..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-500 font-sans"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl flex items-center justify-center transition-colors shadow-md shadow-indigo-600/10"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Suggestions Panel */}
              <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-5 lg:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-3">Quick Analytical Questions:</span>
                  <div className="space-y-2.5">
                    {CO_PILOT_QUESTIONS.map(q => (
                      <button
                        key={q}
                        onClick={() => handleSendAiMessage(q)}
                        className="w-full text-left bg-slate-950/80 hover:bg-slate-950 p-3 rounded-xl border border-slate-800/60 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-all font-sans flex items-start gap-2 group"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{q}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 bg-indigo-500/5 border border-indigo-500/10 p-3.5 rounded-xl">
                  <h5 className="text-xs font-semibold text-white mb-1 flex items-center gap-1 font-sans">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                    AI Integration is standard curriculum!
                  </h5>
                  <p className="text-[10px] text-slate-400 font-sans">
                    At Daki, you will not only master Power BI & SQL, but also learn how to integrate modern LLM tools like ChatGPT and GitHub Copilot directly into your business analysis workflows!
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
