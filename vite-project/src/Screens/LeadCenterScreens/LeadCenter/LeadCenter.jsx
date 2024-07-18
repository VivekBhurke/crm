import React, { useEffect, useState, useMemo } from "react";
import "./LeadCenter.css";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import sampleData from "../../../TempData/sampleData.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LeadCenter() {
  // State variables to manage leads data, selected rows, pagination, and filters
  const [isVisible, setIsVisible] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);
  const [leads, setLeads] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(6); // Default page size
  const [stageCounts, setStageCounts] = useState({});
  const [assigneeFilter, setAssigneeFilter] = useState("All");
  const [dateFilterType, setDateFilterType] = useState("All");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Handle modal state

  // Load sample data and calculate stage counts
  useEffect(() => {
    setLeads(sampleData);

    const counts = sampleData.reduce((acc, lead) => {
      acc[lead.Stage] = (acc[lead.Stage] || 0) + 1;
      return acc;
    }, {});

    setStageCounts(counts);
  }, []);

  // hide and show filter options
  const toggleFilters = () => {
    setIsVisible(!isVisible);
  };

  // hide and show filter options
  const toggleDateFilters = () => {
    setIsDateVisible(!isDateVisible);
  };

  // Define table columns
  const columns = [
    { Header: "Date Added", accessor: "Date" },
    { Header: "Name", accessor: "Name" },
    { Header: "Stage", accessor: "Stage" },
    { Header: "Assigned to", accessor: "Assigned_to" },
    { Header: "Status", accessor: "Status" },
    { Header: "Last Call Date", accessor: "Last_Call_Date" },
    { Header: "Last Call Status", accessor: "Last_Call_Status" },
    { Header: "Last Call Remarks", accessor: "Last_Call_Remark" },
  ];

  // Apply filters to leads based on assignee and date
  const filteredLeads = useMemo(() => {
    let filtered =
      assigneeFilter === "All"
        ? leads
        : leads.filter((lead) => lead.Assigned_to === assigneeFilter);

    if (dateFilterType === "today") {
      const today = new Date();
      filtered = filtered.filter((lead) =>
        isSameDate(new Date(lead.Date), today)
      );
    } else if (dateFilterType === "yesterday") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      filtered = filtered.filter((lead) =>
        isSameDate(new Date(lead.Date), yesterday)
      );
    } else if (dateFilterType === "last7days") {
      const last7Days = new Date();
      last7Days.setDate(last7Days.getDate() - 6);
      filtered = filtered.filter((lead) => new Date(lead.Date) >= last7Days);
    } else if (dateFilterType === "custom" && startDate && endDate) {
      filtered = filtered.filter(
        (lead) =>
          new Date(lead.Date) >= startDate && new Date(lead.Date) <= endDate
      );
    }

    return filtered;
  }, [leads, assigneeFilter, dateFilterType, startDate, endDate]);

  // Calculate the total number of pages
  const pageCount = Math.ceil(filteredLeads.length / pageSize);

  // Get the leads to display on the current page
  const page = useMemo(() => {
    const startIndex = pageIndex * pageSize;
    return filteredLeads.slice(startIndex, startIndex + pageSize);
  }, [filteredLeads, pageIndex, pageSize]);

  // Render page numbers for pagination
  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
      if (i === pageIndex || (i < pageIndex + 2 && i > pageIndex - 1)) {
        pages.push(
          <button
            key={i}
            onClick={() => setPageIndex(i)}
            className={pageIndex === i ? "active" : " "}
          >
            {i + 1}
          </button>
        );
      }
    }

    if (pageIndex > 2) {
      pages.unshift(<span key="dots1">. . .</span>);
      pages.unshift(
        <button key={0} onClick={() => setPageIndex(0)}>
          1
        </button>
      );
    }

    if (pageIndex < pageCount - 2) {
      pages.push(<span key="dots2">. . .</span>);
      pages.push(
        <button key={pageCount - 1} onClick={() => setPageIndex(pageCount - 1)}>
          {pageCount}
        </button>
      );
    }

    return pages;
  };

  // Get unique assignees for the filter dropdown
  const uniqueAssignees = [...new Set(leads.map((lead) => lead.Assigned_to))];

  // Handle changes in the assignee filter
  const handleFilterChange = (e) => {
    setAssigneeFilter(e.target.value);
    setPageIndex(0); // Reset to the first page when filtering
    setSelectedRows([]); // Reset selected rows when filter changes
  };

  // Handle changes in the date filter type
  const handleDateFilterChange = (e) => {
    setDateFilterType(e.target.value);
    setPageIndex(0); // Reset to the first page when filtering by date
    setSelectedRows([]); // Reset selected rows when filter changes
    setStartDate(null); // Reset start date when date filter type changes
    setEndDate(null); // Reset end date when date filter type changes
  };

  // Handle changes in the start date for the custom date filter
  const handleStartDateChange = (date) => {
    setStartDate(date);
    setPageIndex(0); // Reset to the first page when start date changes
    setSelectedRows([]); // Reset selected rows when start date changes
  };

  // Handle changes in the end date for the custom date filter
  const handleEndDateChange = (date) => {
    setEndDate(date);
    setPageIndex(0); // Reset to the first page when end date changes
    setSelectedRows([]); // Reset selected rows when end date changes
  };

  // Handle clearing all filters
  const handleClearFilter = () => {
    setAssigneeFilter("All");
    setDateFilterType("All");
    setStartDate(null);
    setEndDate(null);
    setPageIndex(0);
    setSelectedRows([]); // Reset selected rows when filter is cleared
    setPageSize(8); // Reset pageSize to default value when filter is cleared
  };

  // Helper function to check if two dates are the same
  const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  function toggleFiltersDiv() {
    {
      isDateVisible && toggleDateFilters();
    }
    toggleFilters();
  }

  const getCellStyle = (column, row) => {
    switch (column.accessor) {
      case "Stage":
        return `stage-${row.Stage.toLowerCase().replace(/\s/g, "-")}`;
      case "Status":
        return row.Status === "complete form"
          ? "completeForm"
          : "incompleteForm";
      case "Assigned_to":
        return "AssignedToTable";
      case "Last_Call_Status":
        return "AssignedToTable";
      default:
        return "";
    }
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  // Event handler to close the selected row data container
  const handleCloseSelectedRow = () => {
    setSelectedRow(null);
  };

  return (
    <>
      <div className="LeadCenterContainer">
        <div className="LeadHeader">
          <h1>Lead Center</h1>
          <div className="rightMenu">
            <button className="HeaderBtns Downloadbtn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9999 16.3335L4.33325 9.66683L6.19992 7.7335L9.66659 11.2002V0.333496H12.3333V11.2002L15.7999 7.7335L17.6666 9.66683L10.9999 16.3335ZM2.99992 21.6668C2.26659 21.6668 1.63881 21.4057 1.11659 20.8835C0.594363 20.3613 0.333252 19.7335 0.333252 19.0002V15.0002H2.99992V19.0002H18.9999V15.0002H21.6666V19.0002C21.6666 19.7335 21.4055 20.3613 20.8833 20.8835C20.361 21.4057 19.7333 21.6668 18.9999 21.6668H2.99992Z"
                  fill="#6C6B6B"
                />
              </svg>
            </button>
            <button className="HeaderBtns Alertbtn">
              <svg
                width="24"
                height="22"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.333252 23.3332V20.6665H2.99992V11.3332C2.99992 9.48873 3.55547 7.84984 4.66659 6.4165C5.7777 4.98317 7.22214 4.04428 8.99992 3.59984V2.6665C8.99992 2.11095 9.19436 1.63873 9.58325 1.24984C9.97214 0.860948 10.4444 0.666504 10.9999 0.666504C11.5555 0.666504 12.0277 0.860948 12.4166 1.24984C12.8055 1.63873 12.9999 2.11095 12.9999 2.6665V3.59984C14.7777 4.04428 16.2221 4.98317 17.3333 6.4165C18.4444 7.84984 18.9999 9.48873 18.9999 11.3332V20.6665H21.6666V23.3332H0.333252ZM10.9999 27.3332C10.2666 27.3332 9.63881 27.0721 9.11659 26.5498C8.59436 26.0276 8.33325 25.3998 8.33325 24.6665H13.6666C13.6666 25.3998 13.4055 26.0276 12.8833 26.5498C12.361 27.0721 11.7333 27.3332 10.9999 27.3332ZM5.66659 20.6665H16.3333V11.3332C16.3333 9.8665 15.811 8.61095 14.7666 7.5665C13.7221 6.52206 12.4666 5.99984 10.9999 5.99984C9.53325 5.99984 8.2777 6.52206 7.23325 7.5665C6.18881 8.61095 5.66659 9.8665 5.66659 11.3332V20.6665Z"
                  fill="#6C6B6B"
                />
              </svg>
            </button>
            <button className="HeaderBtns AddFacebookLeadsbtn">
              <span>
                <FiPlus className="AddLeadsIco" />
              </span>
              Add Leads via Facebook
            </button>
            <button className="HeaderBtns AddLeadsbtn">
              <span>
                <FiPlus className="AddLeadsIco" />
              </span>
              Add Leads
              <span>
                <IoMdArrowDropdown className="AddLeadsIco dropdownIco" />
              </span>
            </button>
          </div>
        </div>

        <div className="LeadFilter">
          <div className="LeadFilterHeader">
            <button className="viewBtn">
              <span>
                <svg
                  className="FilterSVGs"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21C8.45 21 7.97917 20.8042 7.5875 20.4125C7.19583 20.0208 7 19.55 7 19V9C7 8.45 7.19583 7.97917 7.5875 7.5875C7.97917 7.19583 8.45 7 9 7H19C19.55 7 20.0208 7.19583 20.4125 7.5875C20.8042 7.97917 21 8.45 21 9V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H9ZM9 11H19V9H9V11ZM13 15H15V13H13V15ZM13 19H15V17H13V19ZM9 15H11V13H9V15ZM17 15H19V13H17V15ZM9 19H11V17H9V19ZM17 19H19V17H17V19ZM5 17C4.45 17 3.97917 16.8042 3.5875 16.4125C3.19583 16.0208 3 15.55 3 15V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H15C15.55 3 16.0208 3.19583 16.4125 3.5875C16.8042 3.97917 17 4.45 17 5V6H15V5H5V15H6V17H5Z"
                    fill="#F46220"
                  />
                </svg>
              </span>
              Table view
            </button>
            <div className="rightMenu">
              <button className="filterBtn" onClick={toggleFiltersDiv}>
                <span>
                  <svg
                    className="FilterSVGs"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 17.25C14.7 17.25 13.8125 16.8875 13.0875 16.1625C12.3625 15.4375 12 14.55 12 13.5C12 12.45 12.3625 11.5625 13.0875 10.8375C13.8125 10.1125 14.7 9.75 15.75 9.75C16.8 9.75 17.6875 10.1125 18.4125 10.8375C19.1375 11.5625 19.5 12.45 19.5 13.5C19.5 14.55 19.1375 15.4375 18.4125 16.1625C17.6875 16.8875 16.8 17.25 15.75 17.25ZM15.75 15.25C16.2333 15.25 16.6458 15.0792 16.9875 14.7375C17.3292 14.3958 17.5 13.9833 17.5 13.5C17.5 13.0167 17.3292 12.6042 16.9875 12.2625C16.6458 11.9208 16.2333 11.75 15.75 11.75C15.2667 11.75 14.8542 11.9208 14.5125 12.2625C14.1708 12.6042 14 13.0167 14 13.5C14 13.9833 14.1708 14.3958 14.5125 14.7375C14.8542 15.0792 15.2667 15.25 15.75 15.25ZM2 14.5V12.5H10V14.5H2ZM4.25 8.25C3.2 8.25 2.3125 7.8875 1.5875 7.1625C0.8625 6.4375 0.5 5.55 0.5 4.5C0.5 3.45 0.8625 2.5625 1.5875 1.8375C2.3125 1.1125 3.2 0.75 4.25 0.75C5.3 0.75 6.1875 1.1125 6.9125 1.8375C7.6375 2.5625 8 3.45 8 4.5C8 5.55 7.6375 6.4375 6.9125 7.1625C6.1875 7.8875 5.3 8.25 4.25 8.25ZM4.25 6.25C4.73333 6.25 5.14583 6.07917 5.4875 5.7375C5.82917 5.39583 6 4.98333 6 4.5C6 4.01667 5.82917 3.60417 5.4875 3.2625C5.14583 2.92083 4.73333 2.75 4.25 2.75C3.76667 2.75 3.35417 2.92083 3.0125 3.2625C2.67083 3.60417 2.5 4.01667 2.5 4.5C2.5 4.98333 2.67083 5.39583 3.0125 5.7375C3.35417 6.07917 3.76667 6.25 4.25 6.25ZM10 5.5V3.5H18V5.5H10Z"
                      fill="#353535"
                    />
                  </svg>
                </span>
                {isVisible ? "Hide" : "Show"} filters
              </button>
            </div>
          </div>
          {isVisible && (
            <div className="filterOptions">
              <button className="filterOptionBtn">Bulk Edit</button>
              <button className="filterOptionBtn" onClick={toggleDateFilters}>
                <svg
                  className="FilterSVGs"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z"
                    fill="#353535"
                  />
                </svg>
                Select Date
                <svg
                  className="FilterSVGs"
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 10L0 0H20L10 10Z" fill="#353535" />
                </svg>
              </button>

              <select
                value={assigneeFilter}
                onChange={handleFilterChange}
                className="filterOptionBtn"
              >
                <option value="All">Assigned To</option>
                {uniqueAssignees.map((assignee) => (
                  <option key={assignee} value={assignee}>
                    {assignee}
                  </option>
                ))}
              </select>

              <button className="filterOptionBtn">
                <FiPlus className="AddLeadsIco" />
                Add other filters
              </button>

              <div className="rightMenu">
                <button
                  className="filterOptionBtn clearFilterBtn"
                  onClick={handleClearFilter}
                >
                  <FiPlus className="AddLeadsIco clearFilterICo" />
                  Clear Filter
                </button>
              </div>
            </div>
          )}

          {/* Date filter section */}
          {isDateVisible && (
            <div className="dateFilterContainer">
              <div className="dateFilterOpt">
                <label>
                  <input
                    className="DateRadioBtn"
                    type="radio"
                    value="All"
                    checked={dateFilterType === "All"}
                    onChange={handleDateFilterChange}
                  />{" "}
                  All
                </label>
                <label>
                  <input
                    className="DateRadioBtn"
                    type="radio"
                    value="today"
                    checked={dateFilterType === "today"}
                    onChange={handleDateFilterChange}
                  />{" "}
                  Today
                </label>
                <label>
                  <input
                    className="DateRadioBtn"
                    type="radio"
                    value="yesterday"
                    checked={dateFilterType === "yesterday"}
                    onChange={handleDateFilterChange}
                  />{" "}
                  Yesterday
                </label>
                <label>
                  <input
                    className="DateRadioBtn"
                    type="radio"
                    value="last7days"
                    checked={dateFilterType === "last7days"}
                    onChange={handleDateFilterChange}
                  />{" "}
                  Last 7 Days
                </label>
                <label>
                  <input
                    className="DateRadioBtn"
                    type="radio"
                    value="last30days"
                    checked={dateFilterType === "last30days"}
                    onChange={handleDateFilterChange}
                  />{" "}
                  Last 30 Days
                </label>
                <label>
                  <input
                    className="DateRadioBtn"
                    type="radio"
                    value="ThisMonth"
                    checked={dateFilterType === "ThisMonth"}
                    onChange={handleDateFilterChange}
                  />{" "}
                  This Month
                </label>
                <label>
                  <input
                    className="DateRadioBtn"
                    type="radio"
                    value="custom"
                    checked={dateFilterType === "custom"}
                    onChange={handleDateFilterChange}
                  />{" "}
                  Custom
                </label>
              </div>

              {dateFilterType === "custom" && (
                <div className="datePickerSection">
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="leadStats">
          <div className="statsOptions">
            <button className="statsBtn">All ({filteredLeads.length})</button>
            <button className="statsBtn">
              Unread ({stageCounts["unread"]}){" "}
            </button>
            <button className="statsBtn">
              Intake ({stageCounts["intake"]})
            </button>
            <button className="statsBtn">
              Qualified ({stageCounts["qualified"]})
            </button>
            <button className="statsBtn">
              Converted ({stageCounts["converted"]})
            </button>
            <button className="statsBtn">Lost ({stageCounts["lost"]})</button>
            <button className="statsBtn">
              Not qualified ({stageCounts["not qualified"]})
            </button>
          </div>

          {/* Table section */}
          <div className="leadTable">
            <table>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectedRow && page[0] === selectedRow}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRow(page[0]);
                        } else {
                          setSelectedRow(null);
                        }
                      }}
                    />
                  </th>
                  {columns.map((column) => (
                    <th key={column.accessor}>{column.Header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {page.map((row, rowIndex) => (
                  <tr
                    key={`${row.Date}-${rowIndex}`}
                    className={selectedRow === row ? "selected-row" : ""}
                  >
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRow === row}
                        onChange={() => setSelectedRow(row)}
                      />
                    </td>
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        onClick={
                          column.accessor === "Name"
                            ? () => handleRowClick(row)
                            : null
                        }
                        style={
                          column.accessor === "Name"
                            ? { cursor: "pointer" }
                            : {}
                        }
                      >
                        <p className={getCellStyle(column, row)}>
                          {row[column.accessor]}
                        </p>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination section */}
            <div className="pagination">
              <div className="totalEntries">
                {filteredLeads.length} total leads
              </div>

              <div className="paginationMain">
                <button
                  className="ArrowBtn"
                  onClick={() => setPageIndex(pageIndex - 1)}
                  disabled={pageIndex === 0}
                >
                  {"<"}
                </button>
                <div className="paginationNums">{renderPageNumbers()}</div>
                <button
                  className="ArrowBtn"
                  onClick={() => setPageIndex(pageIndex + 1)}
                  disabled={pageIndex === pageCount - 1}
                >
                  {">"}
                </button>
              </div>

              <div className="selectSize">
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[6, 10, 20, 30, 40, 50].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* modal */}
        {selectedRow && (
          <div
            className={`selectedRowDataContainer ${isOpen ? "slidein" : "slideout"
              }`}
          >
            <div className="Modalheader">
              <h2 className="SelectedName">{selectedRow["Name"]}</h2>
              <div className="rightMenu">
                <button className="CloseBtn" onClick={handleCloseSelectedRow}>
                  X
                </button>
              </div>
            </div>

            <div className="contactInfo">
              <h4>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 15.5C12.8889 15.5 11.1736 15.1215 9.47917 14.3646C7.78472 13.6076 6.24306 12.5347 4.85417 11.1458C3.46528 9.75694 2.39236 8.21528 1.63542 6.52083C0.878472 4.82639 0.5 3.11111 0.5 1.375C0.5 1.125 0.583333 0.916667 0.75 0.75C0.916667 0.583333 1.125 0.5 1.375 0.5H4.75C4.94444 0.5 5.11806 0.565972 5.27083 0.697917C5.42361 0.829861 5.51389 0.986111 5.54167 1.16667L6.08333 4.08333C6.11111 4.30556 6.10417 4.49306 6.0625 4.64583C6.02083 4.79861 5.94444 4.93056 5.83333 5.04167L3.8125 7.08333C4.09028 7.59722 4.42014 8.09375 4.80208 8.57292C5.18403 9.05208 5.60417 9.51389 6.0625 9.95833C6.49306 10.3889 6.94444 10.7882 7.41667 11.1562C7.88889 11.5243 8.38889 11.8611 8.91667 12.1667L10.875 10.2083C11 10.0833 11.1632 9.98958 11.3646 9.92708C11.566 9.86458 11.7639 9.84722 11.9583 9.875L14.8333 10.4583C15.0278 10.5139 15.1875 10.6146 15.3125 10.7604C15.4375 10.9062 15.5 11.0694 15.5 11.25V14.625C15.5 14.875 15.4167 15.0833 15.25 15.25C15.0833 15.4167 14.875 15.5 14.625 15.5ZM3.02083 5.5L4.39583 4.125L4.04167 2.16667H2.1875C2.25694 2.73611 2.35417 3.29861 2.47917 3.85417C2.60417 4.40972 2.78472 4.95833 3.02083 5.5ZM10.4792 12.9583C11.0208 13.1944 11.5729 13.3819 12.1354 13.5208C12.6979 13.6597 13.2639 13.75 13.8333 13.7917V11.9583L11.875 11.5625L10.4792 12.9583Z"
                    fill="#5F6368"
                  />
                </svg>
                +919303141179
              </h4>

              <a href="#">Edit contact information</a>

              <button className="HeaderBtns">View Form</button>
            </div>

            <hr />
          </div>
        )}
      </div>
    </>
  );
}

export default LeadCenter;
