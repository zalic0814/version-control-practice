import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const FilterDropdown = ({ title, options = [] }) => (
  <div className="relative inline-block text-left mr-2">
    <button className="bg-green-500 text-white px-3 py-1 rounded">
      {title} ▼
    </button>
    {/* Dropdown content would go here */}
  </div>
);

const VersionRecord = ({ id, date, title, status }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white p-4 rounded-lg shadow mb-4 cursor-pointer hover:bg-gray-50"
      onClick={() => navigate(`/version-detail/${id}`)}
    >
      <h3 className="text-lg font-semibold">
        {date}发版 - {title}
      </h3>
      <p>状态: {status}</p>
    </div>
  );
};

const Pagination = ({ totalPages }) => (
  <div className="flex justify-center mt-4">
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        className="bg-green-500 text-white px-3 py-1 rounded mx-1"
      >
        {i + 1}
      </button>
    ))}
    <button className="bg-green-500 text-white px-3 py-1 rounded mx-1">
      »
    </button>
  </div>
);

const VersionRequestListPage = () => {
  const [records] = useState([
    { id: 1, date: "2023年9月20日", title: "系统更新 v2.1", status: "成功" },
    { id: 2, date: "2023年9月15日", title: "安全修复", status: "成功" },
  ]);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">发版记录</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">筛选</h2>
        <FilterDropdown title="发版人" />
        <FilterDropdown title="审查人" />
        <FilterDropdown title="验证人" />
        <FilterDropdown title="状态" options={["成功", "失败"]} />
      </div>

      <div className="space-y-4">
        {records.map((record) => (
          <VersionRecord key={record.id} {...record} />
        ))}
      </div>

      <Pagination totalPages={5} />
    </div>
  );
};

export default VersionRequestListPage;
