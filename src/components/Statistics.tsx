'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const specialtyData = [
  { name: 'Cardiology', doctors: 12 },
  { name: 'Neurology', doctors: 8 },
  { name: 'Orthopedics', doctors: 10 },
  { name: 'Pediatrics', doctors: 15 },
  { name: 'Dermatology', doctors: 7 },
  { name: 'Oncology', doctors: 6 },
];

const bookingData = [
  { month: 'Jan', bookings: 120 },
  { month: 'Feb', bookings: 180 },
  { month: 'Mar', bookings: 150 },
  { month: 'Apr', bookings: 210 },
  { month: 'May', bookings: 190 },
  { month: 'Jun', bookings: 250 },
];

const pieData = [
  { name: 'Cardiology', value: 30 },
  { name: 'Neurology', value: 20 },
  { name: 'Orthopedics', value: 25 },
  { name: 'Others', value: 25 },
];

const COLORS = ['#0284C7', '#0EA5E9', '#38BDF8', '#BAE6FD'];

const Statistics = (): React.ReactElement => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#0284C7]/5 px-2.5 py-1 rounded-md">
            Platform Insights
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-3">
            Healync by the Numbers
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-2 max-w-xl mx-auto">
            Trusted by thousands of patients and doctors across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-black text-[#0F172A] mb-6">
              Monthly Bookings
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#64748B' }}
                />
                <YAxis
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#64748B' }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}
                />
                <Bar dataKey="bookings" fill="#0284C7" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-black text-[#0F172A] mb-6">
              Doctors by Specialty
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="flex flex-col gap-2 shrink-0">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-xs font-semibold text-slate-600">
                      {entry.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
