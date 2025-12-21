import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I enroll in an online course?",
      answer: "Enrolling in an online course is simple. Browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll be guided through the registration process, including account creation and payment options."
    },
    {
      question: "How do I register for a course?",
      answer: "To register for a course, create an account on our platform, browse available courses, and click 'Register' on your chosen course. Complete the registration form with your details and proceed to payment to confirm your enrollment."
    },
    {
      question: "Are your courses available online or offline?",
      answer: "Our courses are primarily offered online, providing you with the flexibility to learn at your own pace from anywhere. Some specialized programs may offer hybrid options with both online modules and in-person sessions."
    },
    {
      question: "Do I need prior knowledge before joining?",
      answer: "It depends on the course. Each course listing includes prerequisites and recommended skill levels. Beginner courses require no prior knowledge, while advanced courses may require foundational understanding in the subject area."
    },
    {
      question: "How can the course help my career?",
      answer: "Our courses are designed with career advancement in mind. You'll gain industry-relevant skills, practical experience, and certifications that are recognized by employers. Many courses also include career support services like resume reviews and interview preparation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Title and Description */}
          <div className="lg:pr-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Find clear answers to common queries and learn more about our services easily.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}