import React from "react";
import { Calendar, Shirt, Hash, ChevronRight, AlertCircle } from "lucide-react";

const OrderSummaryCard = ({ order, onViewDetails, onEndOrder }) => {
  const {
    id = "N/A",
    clientName = "Unknown Client",
    category = "General",
    deadline = "N/A",
    targetUnits = 0,
    completionPercentage = 0,
    status = "NEW",
    statusType = "secondary",
  } = order || {};

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md hover:shadow-lg transition-shadow duration-200 w-full">
      <div className="card-body p-5 sm:p-6 gap-4">
        {/* Header Section */}
        <div className="flex flex-wrap items-start justify-between gap-2 border-b border-base-200 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-base-content/60 uppercase tracking-wider mb-1">
              <Hash className="w-3.5 h-3.5" />
              <span>{id}</span>
            </div>
            <h2 className="card-title text-xl font-bold text-base-content">
              {clientName}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className={`badge badge-${statusType} badge-sm font-medium`}>
              {status}
            </span>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-1">
          {/* Garment Category */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-base-content/60 font-medium">
                Category
              </p>
              <p className="text-sm font-semibold text-base-content">
                {category}
              </p>
            </div>
          </div>

          {/* Target Deadline */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-warning/10 text-warning">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-base-content/60 font-medium">
                Deadline
              </p>
              <p className="text-sm font-semibold text-base-content">
                {deadline}
              </p>
            </div>
          </div>

          {/* Order Quantity */}
          <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-base-content/60 font-medium">
                Target Units
              </p>
              <p className="text-sm font-semibold text-base-content">
                {targetUnits.toLocaleString()} Pcs
              </p>
            </div>
          </div>
        </div>

        {/* Production Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className="text-base-content/70">Production Progress</span>
            <span className="text-primary font-bold">
              {completionPercentage}%
            </span>
          </div>
          <progress
            className="progress progress-primary w-full h-2.5"
            value={completionPercentage}
            max="100"
          ></progress>
        </div>

        {/* Footer Actions */}
        <div className="card-actions justify-end items-center pt-3 border-t border-base-200">
          <button
            onClick={() => onEndOrder && onEndOrder(id)}
            className="btn btn-ghost btn-xs text-error hover:bg-error/10"
          >
            End Order
          </button>
          <button
            onClick={() => onViewDetails && onViewDetails(id)}
            className="btn btn-primary btn-sm gap-1"
          >
            <span>View Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
