/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';

import NavbarData from '../components/models/Navbar';

const { logo, links, action, action2 } = NavbarData;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  interface LinkProps {
    parent: string;
    link?: string;
    children:
      | {
          name: string;
          desc: string;
          link: string;
        }[]
      | null;
  }

  const [parent, setParent] = useState<LinkProps | null>(null);
  const handleClick = (link: LinkProps) => {
    if (link.link != null) {
      window.location.href = link.link;
    } else {
      setParent(link);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="absolute top-0 z-50 block w-full lg:hidden">
      <div className="flex h-auto min-h-[600px] w-full flex-col justify-between rounded-lg bg-white p-3 text-black-200">
        <div className="relative text-xl">
          <div className="flex items-center justify-between pb-5">
            <a href={logo.link}>
              <h1 className="font-head text-indigo-500 text-xl font-bold">
                <Image
                  alt="Logo"
                  width="50"
                  height="50"
                  src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
                />
              </h1>
            </a>
            <button
              onClick={() => {
                setParent(null);
                onClose();
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path
                  d="M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className={`${parent === null ? '' : 'hidden'}`}>
            {links.map((link, index) => (
              // eslint-disable-next-line react/button-has-type
              <button
                key={link.parent}
                className="flex w-full flex-col text-xl"
                onClick={() => handleClick(link)}
              >
                <div className="w-full">
                  <div className="my-2 flex justify-between px-2 py-3">
                    <h1 className="text-left text-xl font-semibold">
                      {link.parent}
                    </h1>
                    {link.link ? null : (
                      <svg
                        fill="none"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                      >
                        <path
                          className="fill-slate-600"
                          d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z"
                        />
                      </svg>
                    )}
                  </div>
                  {index !== links.length - 1 && (
                    <hr className="border-dashed" />
                  )}
                </div>
              </button>
            ))}
          </div>
          <div className="px-2 py-3" id="sub-items">
            <button
              className={`mb-10 flex items-center justify-center gap-2 ${
                parent === null ? 'hidden' : ''
              }`}
              onClick={() => setParent(null)}
            >
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-transparent"
                  d="M5.5 9L1.5 5L5.5 1"
                  stroke="black"
                />
              </svg>
              <p className="text-indigo-500 font-semibold">Back</p>
            </button>
            <h1 className="text-md text-slate-500 mb-3 font-semibold uppercase">
              {parent?.parent}
            </h1>
            {parent?.children?.map((child) => (
              <a key={child.name} href={child.link} className="group">
                <div className="w-full rounded-lg py-2">
                  <p className="text-slate-800 font-semibold">{child.name}</p>
                  <p className="text-slate-500 group-hover:text-slate-800 animate-short">
                    {child.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-slate-100 mt-20 flex h-16 w-full items-center justify-center rounded">
          <a
            href={action.link}
            className="bg-indigo-500 text-md animtate-smooth group flex items-center rounded-full px-4 py-2 font-semibold text-white"
          >
            <span className="mr-2">{action.name}</span>
            <svg
              className="stroke-current"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
            >
              <g>
                <path
                  className="animate-short opacity-0 group-hover:opacity-100"
                  d="M0 5.5h7"
                />
                <path
                  className="fill-transparent animate-short opacity-100 group-hover:translate-x-1 group-hover:transform"
                  d="M1 1l3 5-5 5"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <nav>
      {/* Desktop */}
      <div className="hidden w-full bg-white text-green-100 lg:block">
        <div className="flex items-center justify-around p-5">
          <div>
            <a href={logo.link}>
              {/* <h1 className="font-head font-bold text-2xl">{logo.name}</h1> */}
              <Image
                alt="Logo"
                width="50"
                height="50"
                src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
              />
            </a>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-10">
              {links.map((link) => (
                <li className="group relative" key={link.parent}>
                  {link.link ? (
                    <a
                      href={link.link}
                      className="cursor-pointer font-semibold hover:opacity-50"
                    >
                      {link.parent}
                    </a>
                  ) : (
                    <button className="cursor-default font-semibold hover:opacity-50">
                      {link.parent}
                    </button>
                  )}
                  {link.children && (
                    <div className="animate-short invisible absolute left-0 top-0 z-50 min-w-[250px] translate-y-5 transform opacity-0 transition group-hover:visible group-hover:transform group-hover:opacity-100">
                      <div className="relative top-6 z-50 flex w-full flex-col rounded-xl bg-white p-2 shadow-xl">
                        <div className="absolute top-0 z-0 h-10 w-10 translate-x-0 rotate-45 transform rounded-sm bg-white" />
                        {link.children && (
                          <div
                            className={`grid ${
                              link.children.length > 4
                                ? 'min-w-[500px] grid-cols-2'
                                : 'grid-cols-1'
                            }`}
                          >
                            {link.children.map((child) => (
                              <a
                                key={child.name}
                                href={child.link}
                                className="z-50"
                              >
                                <div className="hover:bg-slate-100 w-full rounded-lg px-4 py-2">
                                  <p className="text-slate-800 font-semibold">
                                    {child.name}
                                  </p>
                                  <p className="text-slate-500 text-sm">
                                    {child.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href={action.link}
              className="hover:bg-blue-700 rounded-full bg-orange px-4 py-2 font-bold text-black-200 shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px]"
            >
              <span>{action.name}</span>
            </a>
            <a
              href={action2.link}
              className="hover:bg-blue-700 rounded-full bg-white px-4 py-2 font-bold text-black-200"
            >
              <span>{action2.name}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block bg-white text-green-100 lg:hidden">
        <div className="p-7">
          <div className="flex items-center justify-between">
            <a href={logo.link}>
              {/* <h1 className="font-head font-bold text-2xl">{logo.name}</h1> */}
              <Image
                alt="Logo"
                width="50"
                height="50"
                src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
              />
            </a>
            <button
              onClick={openModal}
              className="cursor-pointer rounded-full bg-white bg-opacity-5 px-4 py-3"
            >
              <svg width="16" height="10" viewBox="0 0 16 10">
                <title>Open mobile navigation</title>
                <g fill="black">
                  <rect y="8" width="16" height="2" rx="1" />
                  <rect y="4" width="16" height="2" rx="1" />
                  <rect width="16" height="2" rx="1" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <NavModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
