import React from "react";
import OrderSummaryCard from "../components/OrderSummaryCard";

const OrdersPage = () => {
  const sampleOrders = [
    {
      id: "ORD-2026-8942",
      clientName: "Visit_Me Co.",
      category: "T-Shirt (Crew Neck)",
      deadline: "Oct 15, 2026",
      targetUnits: 5000,
      completionPercentage: 43,
      status: "DELAYED",
      statusType: "error",
    },
    {
      id: "ORD-2026-9011",
      clientName: "Samadi Ltd",
      category: "Denim Jackets",
      deadline: "Nov 02, 2026",
      targetUnits: 1200,
      completionPercentage: 80,
      status: "IN PRODUCTION",
      statusType: "info",
    },
    {
      id: "ORD-2026-1086",
      clientName: "Mishal Ltd",
      category: "Shirts (Button Down)",
      deadline: "Nov 24, 2026",
      targetUnits: 1600,
      completionPercentage: 0,
      status: "NOT STARTED",
      statusType: "",
    },
  ];

  const handleViewDetails = (id) => console.log("View details for:", id);
  const handleEndOrder = (id) => console.log("End order:", id);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-base-content">
        Production Orders
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleOrders.map((order) => (
          <OrderSummaryCard
            key={order.id}
            order={order}
            onViewDetails={handleViewDetails}
            onEndOrder={handleEndOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
