export default function StatsSection() {
  const totalTickets = 100;
  const bookedTickets = 60;
  const availableTickets = totalTickets - bookedTickets;

  const stats = [
    { title: "إجمالي التذاكر", value: totalTickets },
    { title: "التذاكر المحجوزة", value: bookedTickets },
    { title: "التذاكر المتاحة", value: availableTickets },
  ];

  const lowestPrice = 2800;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-right">
      
      {/* 💢 الرحلة تبدأ من */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white p-3 rounded-xl shadow-lg flex flex-col justify-center items-center animate-pulse">
        <span className="text-3xl">💢</span>
        <h3 className="text-lg font-bold mt-2">السعر يبدأ من</h3>
        <p className="text-xl font-extrabold">{lowestPrice} جنيه</p>
      </div>

      {/* احصائيات التذاكر */}
      {stats.map((item, index) => (
        <div
          key={index}
          className="border border-blue-500 p-3 rounded-xl shadow-md transform transition-transform hover:scale-105 bg-white"
        >
          <h3 className="text-base font-semibold text-center text-blue-800">{item.title}</h3>
          <p className="text-2xl font-bold mt-1 text-center text-gray-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
