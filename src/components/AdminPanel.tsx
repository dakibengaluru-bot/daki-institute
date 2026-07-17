import React, { useState, useEffect } from 'react';
import { Inquiry } from '../types';
import { COURSES } from '../data';
import { 
  Users, 
  CheckCircle, 
  PhoneCall, 
  Search, 
  Trash2, 
  Download, 
  Lock, 
  Key, 
  Unlock, 
  X,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinError, setPinError] = useState('');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'enrolled'>('all');
  const [courseFilter, setCourseFilter] = useState<string>('all');

  // Load inquiries
  useEffect(() => {
    if (isUnlocked) {
      loadInquiries();
    }
  }, [isUnlocked]);

  const loadInquiries = () => {
    const data = localStorage.getItem('daki_inquiries') || '[]';
    try {
      setInquiries(JSON.parse(data));
    } catch (e) {
      setInquiries([]);
    }
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234' || pin === 'daki2026') {
      setIsUnlocked(true);
      setPinError('');
    } else {
      setPinError('Invalid Admin Access PIN. Please try "1234"!');
    }
  };

  const updateInquiryStatus = (id: string, newStatus: 'new' | 'contacted' | 'enrolled') => {
    const updated = inquiries.map(item => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setInquiries(updated);
    localStorage.setItem('daki_inquiries', JSON.stringify(updated));
  };

  const deleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to delete this enrollment inquiry?')) {
      const updated = inquiries.filter(item => item.id !== id);
      setInquiries(updated);
      localStorage.setItem('daki_inquiries', JSON.stringify(updated));
    }
  };

  const purgeAllInquiries = () => {
    if (window.confirm('CRITICAL: This will delete ALL registrations permanently. Proceed?')) {
      localStorage.removeItem('daki_inquiries');
      setInquiries([]);
    }
  };

  // Seed sample data for testing if empty
  const seedSampleData = () => {
    const samples: Inquiry[] = [
      {
        id: 's1',
        name: 'Arjun Gowda',
        email: 'arjun.gowda@gmail.com',
        phone: '9845012345',
        courseId: 'power-bi',
        message: 'Looking for physical weekend batch in Banasawadi.',
        timestamp: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 hours ago
        status: 'new'
      },
      {
        id: 's2',
        name: 'Sunitha Krishnan',
        email: 'sunitha.k@yahoo.com',
        phone: '8095112233',
        courseId: 'sql',
        message: 'Need training on PostgreSQL window functions specifically.',
        timestamp: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 day ago
        status: 'contacted'
      },
      {
        id: 's3',
        name: 'Mohammed Rizwan',
        email: 'rizwan.analytics@gmail.com',
        phone: '9980123456',
        courseId: 'python-ai',
        message: 'I have zero coding background. Can I join?',
        timestamp: new Date(Date.now() - 3600000 * 48).toISOString(), // 2 days ago
        status: 'enrolled'
      }
    ];
    localStorage.setItem('daki_inquiries', JSON.stringify(samples));
    setInquiries(samples);
  };

  // Calculations
  const stats = React.useMemo(() => {
    const total = inquiries.length;
    const isNew = inquiries.filter(i => i.status === 'new').length;
    const contacted = inquiries.filter(i => i.status === 'contacted').length;
    const enrolled = inquiries.filter(i => i.status === 'enrolled').length;
    
    return {
      total,
      new: isNew,
      contacted,
      enrolled,
      conversion: total > 0 ? `${((enrolled / total) * 100).toFixed(0)}%` : '0%'
    };
  }, [inquiries]);

  // Filtering
  const filteredInquiries = React.useMemo(() => {
    return inquiries.filter(item => {
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.phone.includes(searchTerm) || 
                          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (item.message && item.message.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchCourse = courseFilter === 'all' || item.courseId === courseFilter;

      return matchSearch && matchStatus && matchCourse;
    });
  }, [inquiries, searchTerm, statusFilter, courseFilter]);

  // Export to simple HTML table copyable action
  const exportToClipboard = () => {
    if (filteredInquiries.length === 0) return;
    
    let text = "Name,Phone,Email,Course,Registered At,Status,Message\n";
    filteredInquiries.forEach(item => {
      const courseTitle = COURSES.find(c => c.id === item.courseId)?.title || item.courseId;
      const cleanMsg = item.message ? item.message.replace(/,/g, ';').replace(/\n/g, ' ') : '';
      text += `${item.name},${item.phone},${item.email},"${courseTitle}",${new Date(item.timestamp).toLocaleDateString()},${item.status},"${cleanMsg}"\n`;
    });

    navigator.clipboard.writeText(text);
    alert('Leads list copied as CSV to clipboard! Paste it into Excel easily.');
  };

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 w-full max-w-md rounded-2xl p-6 md:p-8 space-y-6 relative shadow-2xl">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="h-12 w-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Lock className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-white text-lg tracking-tight">Daki Institute Leads Portal</h4>
              <p className="text-xs text-slate-400 font-sans mt-1">Founders authentication dashboard</p>
            </div>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                <Key className="h-3 w-3 text-indigo-400" />
                Enter Authentication PIN:
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Hint: Enter 1234 or daki2026"
                className="w-full bg-slate-950 text-white font-mono text-center tracking-widest text-sm py-3 px-4 rounded-xl border border-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                maxLength={8}
                autoFocus
              />
            </div>

            {pinError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-[11px] flex items-center gap-2">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{pinError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm shadow-indigo-600/10 cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="text-[10px] text-slate-500 text-center font-sans border-t border-slate-800/80 pt-4">
            PIN is saved completely offline for quick preview assessment. Default is <span className="text-slate-300 font-mono">1234</span>.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-slate-950 border border-slate-800 w-full max-w-5xl rounded-2xl flex flex-col h-[90vh] shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 p-2 rounded-lg">
              <Unlock className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-white text-md">Daki Registrants & Leads Portal</h4>
              <p className="text-xs text-slate-400 font-sans">Review active enrollments and callback requests</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-xl border border-slate-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Stats Row */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800/60 grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex flex-col">
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Total Leads</span>
            <span className="text-xl font-mono font-bold text-white mt-1">{stats.total}</span>
          </div>
          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex flex-col">
            <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> New Enquiries
            </span>
            <span className="text-xl font-mono font-bold text-amber-400 mt-1">{stats.new}</span>
          </div>
          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex flex-col">
            <span className="text-[10px] text-sky-400 font-semibold uppercase tracking-wider flex items-center gap-1">
              <PhoneCall className="h-3 w-3" /> Contacted
            </span>
            <span className="text-xl font-mono font-bold text-sky-400 mt-1">{stats.contacted}</span>
          </div>
          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex flex-col">
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Enrolled
            </span>
            <span className="text-xl font-mono font-bold text-emerald-400 mt-1">{stats.enrolled}</span>
          </div>
          <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex flex-col col-span-2 sm:col-span-1">
            <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">Conversion</span>
            <span className="text-xl font-mono font-bold text-indigo-400 mt-1">{stats.conversion}</span>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 bg-slate-950/50 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Name, Phone, Email..."
              className="w-full bg-slate-950 text-white text-xs pl-11 pr-4 py-2.5 rounded-xl border border-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-sans"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Status Selector */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="bg-slate-950 text-slate-300 text-xs px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500 font-sans"
            >
              <option value="all">All Statuses</option>
              <option value="new">New Requests</option>
              <option value="contacted">Contacted</option>
              <option value="enrolled">Enrolled</option>
            </select>

            {/* Course Selector */}
            <select
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
              className="bg-slate-950 text-slate-300 text-xs px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500 font-sans"
            >
              <option value="all">All Courses</option>
              {COURSES.map(course => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>

            <button
              onClick={exportToClipboard}
              disabled={filteredInquiries.length === 0}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors disabled:opacity-50 cursor-pointer font-sans"
              title="Copy table to Excel clipboard"
            >
              <FileSpreadsheet className="h-3.5 w-3.5" />
              Excel Export
            </button>

            {inquiries.length === 0 && (
              <button
                onClick={seedSampleData}
                className="bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer font-sans"
              >
                Seed Mock Data
              </button>
            )}

            {inquiries.length > 0 && (
              <button
                onClick={purgeAllInquiries}
                className="bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 p-2 rounded-xl transition-colors cursor-pointer"
                title="Purge leads list completely"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Lead List Table */}
        <div className="flex-1 overflow-auto bg-slate-950">
          {filteredInquiries.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <Users className="h-12 w-12 text-slate-600" />
              <div>
                <h5 className="font-display font-semibold text-slate-400 text-sm">No registrations found</h5>
                <p className="text-xs text-slate-500 font-sans mt-1">Try relaxing your search terms or seed mock leads data above!</p>
              </div>
            </div>
          ) : (
            <div className="min-w-[800px] text-xs text-slate-300">
              <div className="grid grid-cols-12 bg-slate-900 px-6 py-3 border-b border-slate-800 text-slate-400 font-semibold tracking-wider font-sans uppercase text-[10px]">
                <div className="col-span-3">Student / Contacts</div>
                <div className="col-span-3">Target Training Course</div>
                <div className="col-span-2">Date Received</div>
                <div className="col-span-2 text-center">Inquiry Status</div>
                <div className="col-span-2 text-center">Manage Actions</div>
              </div>

              <div className="divide-y divide-slate-800/60">
                {filteredInquiries.map(item => {
                  const courseTitle = COURSES.find(c => c.id === item.courseId)?.title || item.courseId;
                  
                  return (
                    <div key={item.id} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-slate-900/30 transition-colors font-sans">
                      {/* Name & Contacts */}
                      <div className="col-span-3 space-y-1">
                        <span className="font-bold text-white text-xs block">{item.name}</span>
                        <div className="flex flex-col gap-0.5 font-mono text-[10px] text-slate-400">
                          <span>📱 {item.phone}</span>
                          <span>✉️ {item.email}</span>
                        </div>
                      </div>

                      {/* Course Selection & message details */}
                      <div className="col-span-3 pr-4 space-y-1">
                        <span className="font-medium text-indigo-400 text-xs block">{courseTitle}</span>
                        {item.message && (
                          <p className="text-[10px] text-slate-400 leading-normal italic bg-slate-950/40 p-1.5 rounded border border-slate-900">
                            "{item.message}"
                          </p>
                        )}
                      </div>

                      {/* Timestamp */}
                      <div className="col-span-2 font-mono text-[11px] text-slate-400">
                        {new Date(item.timestamp).toLocaleDateString()}
                        <span className="block text-[9px] text-slate-500 mt-0.5">
                          {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      {/* Status select badge */}
                      <div className="col-span-2 flex justify-center">
                        <select
                          value={item.status}
                          onChange={(e) => updateInquiryStatus(item.id, e.target.value as any)}
                          className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border focus:outline-none cursor-pointer ${
                            item.status === 'new' 
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
                              : item.status === 'contacted'
                              ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          }`}
                        >
                          <option value="new" className="bg-slate-900 text-amber-400">🔴 New</option>
                          <option value="contacted" className="bg-slate-900 text-sky-400">🔵 Contacted</option>
                          <option value="enrolled" className="bg-slate-900 text-emerald-400">🟢 Enrolled</option>
                        </select>
                      </div>

                      {/* Delete actions */}
                      <div className="col-span-2 flex justify-center">
                        <button
                          onClick={() => deleteInquiry(item.id)}
                          className="text-rose-400 hover:text-rose-300 p-2 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                          title="Delete Lead record"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Console info footer */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-3 flex items-center justify-between text-[11px] text-slate-400">
          <span>Logged in as: <strong className="text-indigo-400 font-semibold">Daki Admin</strong></span>
          <span>Offline database sync: <strong className="text-white">Active (Local)</strong></span>
        </div>
      </div>
    </div>
  );
}
