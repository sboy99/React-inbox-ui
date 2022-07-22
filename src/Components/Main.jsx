import React from "react";
import { FiChevronDown, FiTag, FiChevronUp } from "react-icons/fi";
import { MdOutlineSort, MdOutlineArrowBack } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

import { inboxMessages, chat } from "../Data/dummy";

const Main = () => {
  return (
    <main className="flex  flex-1 bg-gray-100">
      {/* inbox */}
      <div className="flex w-[319px] flex-shrink-0 flex-col border-[1px] border-gray-300 bg-gray-100 text-gray-600">
        {/* static */}
        <div className=" flex items-center justify-between border-b-[1px] border-gray-300 px-4 py-2 leading-none">
          <button className="flex items-center gap-2 border-none text-xs font-semibold outline-none">
            Sort by Date
            <span className="text-lg text-gray-500">
              <FiChevronDown />
            </span>
          </button>
          <button className="border-none to-gray-500 text-2xl outline-none">
            <MdOutlineSort />
          </button>
        </div>
        {/* scroll */}
        <div className="max-h-[90vh] overflow-y-auto">
          {inboxMessages.map((data) => {
            return <MailBrief key={data.id} data={data} />;
          })}
        </div>
      </div>
      {/* dashboard */}
      <div className=" flex flex-1 flex-col">
        {/* head segmeny */}
        <div className="flex flex-shrink-0 flex-col">
          {/* icons */}
          <div className="flex h-16 items-center justify-between border-b-[1px] border-gray-300 p-5 leading-none">
            <span className=" flex gap-6 text-xl  text-gray-600">
              <MdOutlineArrowBack />
              <FiTag />
              <CgProfile />
              <HiOutlineFolderDownload />
              <BsThreeDots />
            </span>
            <span className="flex gap-4 text-2xl text-gray-500">
              <FiChevronUp />
              <FiChevronDown />
            </span>
          </div>
          {/* heading */}
          <div className="flex h-16 items-center justify-between bg-white p-5 shadow-lg">
            <h1 className="text-xl font-semibold leading-none text-gray-700">
              Re: Student Discount
            </h1>
            <div className="textlg flex items-center gap-4  font-semibold">
              <p className="tag text-gray-600">#142B</p>
              <div className=" rounded-full bg-green-100 px-3 py-1 text-green-900">
                Active
              </div>
            </div>
          </div>
        </div>
        {/* mail full body scroll */}
        <div className="flex max-h-[80vh] flex-col gap-4 overflow-auto p-4">
          {chat.map((data, index) => {
            return <MailFullBody key={index} data={data} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;

const MailBrief = ({ data }) => {
  const { name, subject, body, date, read } = data;
  return (
    <>
      <div
        className={`flex cursor-pointer flex-col gap-1 border-b-[1px] border-gray-300 bg-gray-50 px-5 py-4 text-sm transition-colors hover:bg-sky-50 ${
          !read && `border-l-[3px] border-l-blue-600`
        }`}
      >
        <h1 className="flex items-center justify-between font-semibold text-gray-700">
          {name}{" "}
          <span className="text-xs font-medium text-gray-400">{date}</span>
        </h1>
        <h3 className="font-medium tracking-tight text-gray-600">{subject}</h3>
        <p className="text-xs text-gray-400 ">{`${body.slice(0, 80)}...`}</p>
      </div>
    </>
  );
};

const MailFullBody = ({ data }) => {
  const { name, action, dateAndTime, image, body, signature } = data;
  return (
    <div className="flex flex-shrink-0 flex-col gap-4 rounded-lg bg-white px-8 py-6 shadow-md">
      {/* Person */}
      <div className="flex items-center justify-between text-xl font-semibold capitalize text-gray-800">
        <h1>
          {name}{" "}
          <span className="text-lg lowercase text-gray-400">{action}</span>
        </h1>
        <p className="flex items-center gap-3 text-sm font-medium tracking-wide text-gray-400">
          {dateAndTime}
          <img
            src={image}
            alt={name}
            className="h-10 w-10 rounded-full object-cover object-center "
          />
        </p>
      </div>
      {/* Mail Body */}
      <p className="pr-2 text-sm font-medium  text-gray-600">{body}</p>

      {/* Signature */}
      {signature && (
        <div className="flex flex-col ">
          <h1 className="text-sm font-semibold text-gray-800">
            {signature.name}
          </h1>
          <h3 className="text-sm font-semibold text-gray-400">
            {signature.position}
          </h3>
        </div>
      )}
    </div>
  );
};
