import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const VersionDetailPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const approveRelease = () => {
    alert("发版已批准");
    // 實際的批准邏輯
  };

  const submitComment = () => {
    if (comment.trim()) {
      alert("留言已提交: " + comment);
      setComment("");
      // 實際的留言提交邏輯
    } else {
      alert("请输入留言内容");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">发版详情</h1>

          <div className="space-y-4 mb-6">
            <InfoGroup label="发版标题" value="审批者范例" />
            <InfoGroup label="发版日期" value="2024-09-16" />
            <InfoGroup label="申请人" value="张三" />
            <InfoGroup label="发版类型" value="后端发版" />
            <InfoGroup label="流水线镜像号" value="image-12345" />
            <InfoGroup label="发版原因" value="WWLD-1940" />
            <div>
              <span className="font-bold inline-block w-32">关键风险点：</span>
              <p>
                1. 数据库迁移可能导致短暂服务中断
                <br />
                2. 新API可能与旧版本客户端不兼容
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4 text-gray-800">QA验证</h2>
          <table className="w-full mb-6 border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">验证人员</th>
                <th className="border p-2 text-left">验证时间</th>
                <th className="border p-2 text-left">
                  验证结果（通过/不通过）
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">leach</td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
              <tr>
                <td className="border p-2">freya</td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
            </tbody>
          </table>

          <InfoGroup label="是否可回滚" value="是" />

          <h2 className="text-xl font-bold my-4 text-gray-800">留言板</h2>
          <div className="mb-6">
            <textarea
              className="w-full h-24 p-2 border rounded-md mb-2"
              placeholder="请输入您的留言..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={submitComment}
            >
              提交留言
            </button>
          </div>

          <button
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={approveRelease}
          >
            批准发版
          </button>
        </div>
      </main>
    </div>
  );
};

const InfoGroup = ({ label, value }) => (
  <div>
    <span className="font-bold inline-block w-32">{label}：</span>
    <span>{value}</span>
  </div>
);

export default VersionDetailPage;
