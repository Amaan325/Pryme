import React, { useEffect, useState } from "react";
import { getServices } from "../../hooks/useGetServices";
import { formatDate } from "../../utils/date";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndustries, setSelectedIndustries] = useState(["All"]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const industries = [
    "All",
    "Home",
    "Hotel Clean",
    "Mirror Clean",
    "Bath Clean",
    "Floor Clean",
    "Kitchen Clean",
    "Office",
    "Wearhouse Clean",
  ];

  const statuses = [
    "In progress",
    "Upcoming",
    "Suspended",
    "Completed",
    "Anticipated",
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
        setFilteredServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedIndustries, selectedStatuses, services]);

  const applyFilters = () => {
    let result = [...services];

    // Apply industry filter
    if (!selectedIndustries.includes("All") && selectedIndustries.length > 0) {
      result = result.filter(service => 
        selectedIndustries.includes(service.industry)
      );
    }

    // Apply status filter
    if (selectedStatuses.length > 0) {
      result = result.filter(service => 
        selectedStatuses.includes(service.status)
      );
    }

    setFilteredServices(result);
  };

  const handleIndustryChange = (industry) => {
    if (industry === "All") {
      setSelectedIndustries(["All"]);
    } else {
      setSelectedIndustries(prev => {
        const newSelection = prev.filter(item => item !== "All");
        if (newSelection.includes(industry)) {
          return newSelection.filter(item => item !== industry);
        } else {
          return [...newSelection, industry];
        }
      });
    }
  };

  const handleStatusChange = (status) => {
    setSelectedStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(item => item !== status) 
        : [...prev, status]
    );
  };

  // Count services by status
  const statusCounts = services.reduce((acc, service) => {
    acc[service.status] = (acc[service.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg shadow space-y-6">
      <h2 className="text-xl font-semibold p-8">Service List</h2>
      
      {/* Industry Filter */}
      <div className="flex flex-wrap gap-3 px-8 items-center">
        <span className="text-sm font-medium">Industry:</span>
        {industries.map((industry) => (
          <button
            key={industry}
            className={`px-4 py-2 rounded-full text-sm hover:bg-gray-300 ${
              selectedIndustries.includes(industry)
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleIndustryChange(industry)}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Status Filter */}
      <div className="flex flex-wrap p-8 items-center gap-6 border-t border-gray-200 pt-6">
        <span className="text-sm font-medium">Status:</span>
        {statuses.map((status) => (
          <label key={status} className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="accent-blue-600"
              checked={selectedStatuses.includes(status)}
              onChange={() => handleStatusChange(status)}
            />
            <span className="text-sm">{status}</span>
          </label>
        ))}
        <div className="ml-auto flex gap-8 text-sm">
          <span>
            In progress <strong>{statusCounts["In progress"] || 0}</strong>
          </span>
          <span>
            Upcoming <strong>{statusCounts["Upcoming"] || 0}</strong>
          </span>
        </div>
      </div>

      {loading ? (
        <p className="px-8">Loading...</p>
      ) : filteredServices.length === 0 ? (
        <p className="px-8">No services found matching your filters.</p>
      ) : (
        <>
          <div className="rounded-md overflow-hidden border border-gray-200">
            <div className="flex justify-between items-center px-4 py-3 bg-blue-100">
              <span className="text-sm font-semibold">
                Found: {filteredServices.length}
              </span>
              <button className="text-blue-600 px-4 py-2 rounded-full text-sm border border-blue-600 hover:bg-blue-50">
                Export to Excel
              </button>
            </div>

            <table className="w-full table-fixed text-[12px]">
              <thead className="bg-gray-400 text-left">
                <tr>
                  {[
                    "Practice",
                    "Project name",
                    "Short name",
                    "Status",
                    "Start date",
                    "End date",
                    "Account",
                    "Region",
                    "Industry",
                    "Source type",
                    "Billing entry",
                  ].map((head) => (
                    <th
                      key={head}
                      className="p-3 font-medium whitespace-nowrap"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredServices.map((service, i) => (
                  <tr
                    key={service._id || i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-200"}
                  >
                    <td className="p-3">{service.practice}</td>
                    <td className="p-3">{service.projectName}</td>
                    <td className="p-3">{service.shortName}</td>
                    <td className="p-3">{service.status}</td>
                    <td className="p-3 whitespace-nowrap">
                      {formatDate(service.startDateFrom)}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {formatDate(service.finishDateFrom)}
                    </td>
                    <td className="p-3">{service.account}</td>
                    <td className="p-3">{service.region}</td>
                    <td className="p-3">{service.industry}</td>
                    <td className="p-3">{service.sourceType}</td>
                    <td className="p-3">{service.billingEntity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesList;