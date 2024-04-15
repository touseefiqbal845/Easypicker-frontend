import { Fragment, useEffect } from "react";
import "../../App.css";
import "../../index.css";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaCogs, FaBox } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import { IoBarChartSharp } from "react-icons/io5";
import { selectItems } from "../cart/cartSlice";
import { fetchLoggedInUserAsync, selectUserInfo } from "../user/userSlice";
import { selectLoggedInUser } from "../auth/authSlice";

const img = {
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", link: "/admin/orders-charts", admin: true },
  { name: "Products Setting", link: "/admin", admin: true },
  { name: "Orders Managment", link: "/admin/orders", admin: true },
  { name: "Product List", link: "/products", admin: true },

];
const unavigation = [
  { name: "Home", link: "/",user: true },
  { name: "Products", link: "/products" ,user: true},
  { name: "About", link: "/about-us",user: true },
  { name: "Contact", link: "/contact-us" ,user: true},
];
const navigationIcons = {
  Dashboard: IoBarChartSharp,
  "Products Setting": FaCogs,
  "Orders Managment": IoCheckmarkDone,
  "Product List": BsCartCheck,
};
const userNavigation = [
  { name: "My Profile", link: "/profile", user: true },
  { name: "Orders", link: "/my-orders", user: true },
  { name: "Sign out", link: "/logout" },
];
const adminNavigation = [
  { name: "My Profile", link: "/profile", admin: true },
  { name: "Sign out", link: "/logout", admin: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar({ children }) {
  const items = useSelector(selectItems);
  const userinfo = useSelector(selectLoggedInUser);
  const userInfo = userinfo && userinfo.role;

  const isAdmin = userInfo && userInfo === "admin";
  const isUser = userInfo && userInfo === "user";

  console.log("admin check", isAdmin, userInfo);

  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className={`min-h-full ${!isAdmin ? " bg-white" : "bg-white"}`}
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
                <div className="flex h-19 items-center justify-between">
                  <div className="flex items-center">
                    {isUser && (
                      <div className="flex-shrink-0">
                        <Link to="/">
                          <img
                            className="my-0 logo"
                            src="/logo-black.png"
                            alt="Your Company"
                          />
                        </Link>
                      </div>
                    )}
                    {isAdmin && (
                      <div className="flex-shrink-0">
                        <Link to="/admin/orders-charts">
                          <img
                            className="my-0 logo"
                            src="/logo-black.png"
                            alt="Your Company"
                          />
                        </Link>
                      </div>
                    )}

                    <div className="hidden md:block my-4 mx-10">
                      <div className="ml-10 flex items-baseline space-x-4 ">
                        {isAdmin &&
                          navigation.map((item) => {
                            const Icon = navigationIcons[item.name];
                            return (
                              <Link
                                key={item.name}
                                to={item.link}
                                className={classNames(
                                  item.current
                                    ? "bg-white-900 text-white"
                                    : "text-black hover:bg-indigo-100 hover:text-black",
                                  "rounded-md px-3 py-2  custom-font"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {Icon && (
                                  <Icon className="inline-block mr-2 icons" />
                                )}
                                {item.name}
                              </Link>
                            );
                          })}
                        {isUser &&
                          unavigation.map((item) => {
                            const Icon = navigationIcons[item.name];
                            return (
                              <Link
                                key={item.name}
                                to={item.link}
                                className={classNames(
                                  item.current
                                    ? "bg-white-900 text-white"
                                    : "text-black hover:bg-indigo-100 hover:text-black",
                                  "rounded-md px-3 py-2  custom-font"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {Icon && (
                                  <Icon className="inline-block mr-2 icons" />
                                )}
                                {item.name}
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  {isUser && (
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <Link to="/cart">
                          <button
                            type="button"
                            className="rounded-full bg-white-800 p-1 text-black hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <span className="sr-only">View notifications</span>
                            <ShoppingCartIcon
                              className="h-12 w-9 "
                              aria-hidden="true"
                            />
                          </button>
                        </Link>
                        {items.length > 0 && (
                          <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                            {items.length}
                          </span>
                        )}

                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-12 w-13 rounded-full"
                                src={img.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map(
                                (item) => (
                                  // Only render items when the user is not an admin
                                  // (!isAdmin ) && (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link
                                        to={item.link}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                )
                                // )
                              )}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  )}
                  {isAdmin && (
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* <Link to="/cart">
      <button
        type="button"
        className="rounded-full bg-white-800 p-1 text-black hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View notifications</span>
        <ShoppingCartIcon
          className="h-12 w-9 "
          aria-hidden="true"
        />
      </button>
    </Link> 
   {items.length > 0 && (
      <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        {items.length}
      </span>
    )}
     } */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-12 w-13 rounded-full"
                                src={img.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {adminNavigation.map(
                                (item) => (
                                  // Only render items when the user is not an admin
                                  // (!isAdmin ) && (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link
                                        to={item.link}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                )
                                // )
                              )}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  )}
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {isAdmin
                    ? navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className={classNames(
                            item.current
                              ? "bg-gray-900"
                              : "hover:bg-blue-400 hover:text-blue",
                            "rounded-md px-3 py-2  custom-font"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))
                    : null}
                  {isUser
                    ? unavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className={classNames(
                            item.current
                              ? "bg-gray-900"
                              : "hover:bg-blue-400 hover:text-blue",
                            "rounded-md px-3 py-2  custom-font"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))
                    : null}
                </div>

                {isUser ? (
                  <>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        {/* <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={img.imageUrl}
                        alt=""
                      />
                    </div> */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 mx-0 rounded-full"
                                src={img.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              className="absolute right-30 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              style={{ marginright: "10px" }}
                            >
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link
                                      to={item.link}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>

                    <Link to="/cart">
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <ShoppingCartIcon
                          className="h-8 w-7 mx-7 "
                          aria-hidden="true"
                        />
                      </button>
                    </Link>
                    {items.length > 0 && (
                      <span className="inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {items.length}
                      </span>
                    )}
                  </>
                ) : null}

                {isAdmin ? (
                  <>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        {/* <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={img.imageUrl}
                        alt=""
                      />
                    </div> */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 mx-0 rounded-full"
                                src={img.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              className="absolute right-30 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                              style={{ marginright: "10px" }}
                            >
                              {adminNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link
                                      to={item.link}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </>
                ) : null}

                {/* <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}*/}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main className="">
          <div className="mx-auto max-w-7xl -mb-11 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default NavBar;
