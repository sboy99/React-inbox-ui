import { HiOutlineInbox, HiOutlineFlag } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFileDone } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

export const user = {
  name: "Pete White",
  image:
    "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=144&q=80",
};

export const sidebarContent = [
  {
    id: 1,
    title: "Mailbox",
    links: [
      {
        id: 11,
        icon: <HiOutlineInbox />,
        title: "Inbox",
        notificationCount: 6,
      },
      {
        id: 12,
        icon: <HiOutlineFlag />,
        title: "Flagged",
        notificationCount: 0,
      },
      {
        id: 13,
        icon: <BsPencilSquare />,
        title: "Drafts",
        notificationCount: 2,
      },
      {
        id: 14,
        icon: <CgProfile />,
        title: "Assigned",
        notificationCount: 1,
      },
      {
        id: 15,
        icon: <AiOutlineFileDone />,
        title: "Closed",
        notificationCount: 0,
      },
      {
        id: 16,
        icon: <FiTrash />,
        title: "junk",
        notificationCount: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Folders",
    links: [
      {
        id: 21,
        title: "Refund",
      },
      {
        id: 22,
        title: "Discount",
      },
      {
        id: 23,
        title: "Bonus",
      },
    ],
  },
];

export const inboxMessages = [
  {
    id: 1,
    name: `Joe Armstrong`,
    subject: "Re: Student Discount?",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum reprehenderit! Corporis?
`,
    date: "1 day ago",
    read: false,
  },
  {
    id: 2,
    name: `Gloria Robertson`,
    subject: "Refund",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum reprehenderit! Corporis?
`,
    date: "2 days ago",
    read: true,
  },
  {
    id: 3,
    name: `Pat Steward`,
    subject: "Issue with reporting",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum reprehenderit! Corporis?
`,
    date: "4 days ago",
    read: true,
  },
  {
    id: 4,
    name: `Jerome Warren`,
    subject: "Email not working",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum reprehenderit! Corporis?
`,
    date: "4 days ago",
    read: false,
  },
  {
    id: 5,
    name: `Glads Mccoy`,
    subject: "Do you have a student discount",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum reprehenderit! Corporis?
`,
    date: "1 week ago",
    read: true,
  },
  {
    id: 6,
    name: `Jorge Murphy`,
    subject: "Not what I expected",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, earum reprehenderit! Corporis?
`,
    date: "1 week ago",
    read: true,
  },
];

export const chat = [
  {
    name: "Joe Armstrong",
    action: "wrote",
    dateAndTime: "Yesterday at 7:24 AM",
    image:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate explicabo sequi maiores illo optio temporibus sapiente ratione dicta alias aliquid.`,
  },
  {
    name: "Pete White",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=144&q=80",
    action: "replied",
    dateAndTime: "Yesterday at 10:09 AM",
    body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate explicabo sequi maiores illo optio temporibus sapiente ratione dicta alias aliquid.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel blanditiis molestiae, voluptatem delectus officiis dolores reiciendis, veritatis, debitis nostrum ad dicta tempora saepe neque harum perspiciatis quam illo earum asperiores magni sequi ducimus quisquam amet. Nesciunt, perspiciatis laborum molestias, doloribus, consectetur tempore a sit maxime delectus quam dolores accusamus odio.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel blanditiis molestiae, voluptatem delectus officiis dolores reiciendis, veritatis, debitis nostrum ad dicta tempora saepe neque harum perspiciatis quam illo earum asperiores magni sequi ducimus quisquam amet. Nesciunt, perspiciatis laborum molestias, doloribus, consectetur tempore a sit maxime delectus quam dolores accusamus odio.
    `,
    signature: {
      name: `Pete White`,
      position: `Content Manager`,
    },
  },
  {
    name: "Joe Armstrong",
    action: "wrote",
    dateAndTime: "Yesterday at 7:24 AM",
    image:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate explicabo sequi maiores illo optio temporibus sapiente ratione dicta alias aliquid sit amet consectetur adipisicing elit. Cupiditate explicabo sequi maiores illo optio temporibus sapiente ratione dicta alias aliquid.`,
  },
];
