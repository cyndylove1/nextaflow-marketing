"use client";
import logo from "@/public/assets/Nextaflow-allwhite.png"
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../components/button";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  fullName: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace this with your API call
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="bg-black pb-16 px-4 md:px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center pt-10">
        <Image
          src={logo}
          alt="Nextaflow logo"
          className="md:h-8 h-5 w-auto"
          priority
        />
      </Link>
      <div className="max-w-lg mx-auto bg-white mt-10 rounded-3xl overflow-hidden">
        <div className="md:px-8 px-4 py-10">
          <h2 className="md:text-3xl text-xl font-[600] text-gray-900 mb-2 text-center">
            Start Your 30-Days Free Trial
          </h2>
          <p className="text-center md:text-[16px] text-[13px] text-[#1a1a1a] font-[300] mb-8">
            We'll set up your NextaFlow account for you no coding required.
          </p>

          {submitted ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-[400] text-[#1a1a1a]">
                Thank you for signing up!
              </h3>
              <p className="text-[#1a1a1a] mt-2">
                Our team will contact you shortly to complete your free setup.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-[300] text-[#1a1a1a]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1 block w-full px-4 py-3 border outline-none border-gray-200 rounded-md font-[300] focus:ring-black focus:border-black sm:text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-[300] text-[#1a1a1a]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-1 block w-full px-4 py-3 border outline-none border-gray-200 rounded-md font-[300] focus:ring-black focus:border-black sm:text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-[300] text-[#1a1a1a]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="mt-1 block w-full px-4 py-3 border border-gray-200 outline-none rounded-md font-[300] focus:ring-black focus:border-black sm:text-sm"
                />
              </div>

              {/* Submit Button */}

              <Button
                text="Start My Free Trial + Free Setup"
                className="bg-[var(--secondary)] text-black w-full"
              />

              {/* Social Proof */}
              <p className="text-center text-[#1a1a1a] font-[300] text-sm my-2">
                Join business owners who 5X their business by trading app
                fatigue for growth.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
