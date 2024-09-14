import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

const SelectField = ({
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-700 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item
                key={option}
                value={option}
                className="relative flex items-center px-8 py-2 text-sm text-gray-700 cursor-default select-none hover:bg-gray-100"
              >
                <Select.ItemText>{option}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-700 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

const TagInput = ({ label, tags, setTags }) => {
  const [input, setInput] = useState("");

  const addTag = (tag) => {
    if (tag.trim() && !tags.includes(tag.trim())) {
      setTags([...tags, tag.trim()]);
    }
    setInput("");
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="p-2 border rounded-md bg-white flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 px-2 py-1 rounded-md flex items-center text-sm"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="ml-1 text-gray-500 hover:text-gray-700"
            >
              <Cross1Icon />
            </button>
          </span>
        ))}
        <input
          type="text"
          className="flex-grow outline-none text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag(input);
            }
          }}
          onBlur={() => addTag(input)}
          placeholder="输入新标签"
        />
      </div>
    </div>
  );
};

const BasicForm = ({ title }) => {
  const [formData, setFormData] = useState({
    applicant: "",
    expectedTime: "",
    pipelineImageNumber: "",
    releaseReason: "",
    keyRiskPoints: "",
    remarks: "",
    canRollback: "是",
  });
  const [qa, setQa] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [operations, setOperations] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, qa, supervisors, operations });
    alert("发版信息已提交");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">{title}填写区</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              申请人<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
              value={formData.applicant}
              onChange={(e) => handleInputChange("applicant", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              预计起止时间<span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              className="w-full p-2 border rounded-md"
              required
              value={formData.expectedTime}
              onChange={(e) =>
                handleInputChange("expectedTime", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              流水线镜像号
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={formData.pipelineImageNumber}
              onChange={(e) =>
                handleInputChange("pipelineImageNumber", e.target.value)
              }
            />
          </div>
          <SelectField
            label="发版原因"
            required
            value={formData.releaseReason}
            onChange={(value) => handleInputChange("releaseReason", value)}
            options={["WWLD-1940", "其他原因"]}
            placeholder="请选择"
          />
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              关键风险点
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              value={formData.keyRiskPoints}
              onChange={(e) =>
                handleInputChange("keyRiskPoints", e.target.value)
              }
              rows="3"
            ></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              备注
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              value={formData.remarks}
              onChange={(e) => handleInputChange("remarks", e.target.value)}
              rows="3"
            ></textarea>
          </div>
          <SelectField
            label="是否可回滚（是/否）"
            required
            value={formData.canRollback}
            onChange={(value) => handleInputChange("canRollback", value)}
            options={["是", "否"]}
          />
          <div className="col-span-2">
            <TagInput label="QA" tags={["QA1", "QA2", "QA3"]} setTags={setQa} />
          </div>
          <div className="col-span-2">
            <TagInput
              label="主管验证"
              tags={["主管A"]}
              setTags={setSupervisors}
            />
          </div>
          <div className="col-span-2">
            <TagInput
              label="维运验证"
              tags={["运维B"]}
              setTags={setOperations}
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              提交发版信息
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicForm;
