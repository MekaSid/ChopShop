'use client';

import React from "react";
import Link from "next/link";
import { useState } from 'react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const generateMessage = () => {
    const { fullName, service, preferredDate, preferredTime, phoneNumber, notes } = formData;
    const notesText = notes ? ` Notes: ${notes}` : '';
    return `Hey! This is ${fullName}. I'd like to book a ${service} on ${preferredDate} at ${preferredTime}. My number is ${phoneNumber}.${notesText}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateMessage());
      alert('Message copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(generateMessage());
    return `https://wa.me/?text=${message}`;
  };

  const generateSMSLink = () => {
    const message = encodeURIComponent(generateMessage());
    return `sms:?body=${message}`;
  };

  return (
    <div className="min-h-screen bg-[#2b2d42] pt-8 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Ornamental Top Border */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8d99ae] to-transparent"></div>
            <div className="mx-4 text-[#8d99ae] text-xl">•</div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8d99ae] to-transparent"></div>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-[#8d99ae] mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-[#8d99ae] leading-relaxed opacity-90">
            Ready to book? Fill out the form below and we'll prepare a personalized message you can text us directly.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-[#edf2f4] p-6 sm:p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#2b2d42] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#8d99ae]/30 rounded-lg text-[#2b2d42] placeholder-[#8d99ae]/50 focus:outline-none focus:ring-2 focus:ring-[#ef233c] focus:border-[#ef233c] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#2b2d42] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#8d99ae]/30 rounded-lg text-[#2b2d42] placeholder-[#8d99ae]/50 focus:outline-none focus:ring-2 focus:ring-[#ef233c] focus:border-[#ef233c] transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#2b2d42] mb-2">
                Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#8d99ae]/30 rounded-lg text-[#2b2d42] focus:outline-none focus:ring-2 focus:ring-[#ef233c] focus:border-[#ef233c] transition-colors"
              >
                <option value="">Select a service</option>
                <option value="Haircut">Haircut</option>
                <option value="Beard Trim">Beard Trim</option>
                <option value="Shave">Shave</option>
              </select>
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-[#2b2d42] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#8d99ae]/30 rounded-lg text-[#2b2d42] focus:outline-none focus:ring-2 focus:ring-[#ef233c] focus:border-[#ef233c] transition-colors"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-[#2b2d42] mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#8d99ae]/30 rounded-lg text-[#2b2d42] focus:outline-none focus:ring-2 focus:ring-[#ef233c] focus:border-[#ef233c] transition-colors"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-[#2b2d42] mb-2">
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#8d99ae]/30 rounded-lg text-[#2b2d42] placeholder-[#8d99ae]/50 focus:outline-none focus:ring-2 focus:ring-[#ef233c] focus:border-[#ef233c] transition-colors resize-none"
                placeholder="Any special requests or additional information..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ef233c] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#d90429] transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#ef233c]/50"
            >
              Generate Message
            </button>
          </form>
        </div>

        {/* Generated Message Section */}
        {showMessage && (
          <div className="mt-8 bg-[#edf2f4] rounded-lg p-6 sm:p-8 shadow-lg">
            <h2 className="font-playfair text-2xl font-bold text-[#2b2d42] mb-4">Your Message</h2>
            
            {/* Message Preview */}
            <div className="bg-white rounded-lg p-4 mb-6 border border-[#8d99ae]/20">
              <p className="text-[#2b2d42] leading-relaxed">
                "{generateMessage()}"
              </p>
            </div>

            {/* Copy Button */}
            <button
              onClick={copyToClipboard}
              className="w-full sm:w-auto bg-[#8d99ae] hover:bg-[#6c757d] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8d99ae] mb-4"
            >
              Copy to Clipboard
            </button>

            {/* Text Links */}
            <div className="space-y-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Text us on WhatsApp
              </a>
              
              <a
                href={generateSMSLink()}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Text us via SMS
              </a>
            </div>
          </div>
        )}

        {/* Bottom Ornamental Border */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8d99ae] to-transparent"></div>
          <div className="mx-4 text-[#8d99ae] text-xl">•</div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#8d99ae] to-transparent"></div>
        </div>
      </div>
    </div>
  );
} 