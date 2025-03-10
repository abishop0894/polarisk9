'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { FaPhone, FaComment } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  type?: 'input' | 'text';
  placeholder?: string;
  field?: 'name' | 'email' | 'phone' | 'message';
}

export default function Widget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { field: 'name', text: 'What is your name?' },
    { field: 'email', text: 'What is your email address?' },
    { field: 'phone', text: 'What is your contact number?' },
    { field: 'message', text: 'Please enter your message:' }
  ];

  const handleCall = () => {
    window.location.href = 'tel:+17575634949';
  };

  const startChat = () => {
    setShowChat(true);
    setMessages([
      {
        id: 1,
        text: 'Hello, please leave your message below and we\'ll get back to you as soon as possible.',
        sender: 'bot'
      },
      {
        id: 2,
        text: steps[0].text,
        sender: 'bot',
        type: 'input',
        placeholder: 'Enter your name',
        field: 'name'
      }
    ]);
  };

  const handleInputSubmit = (value: string) => {
    const currentField = steps[currentStep].field;
    setFormData(prev => ({ ...prev, [currentField]: value }));
    
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    if (nextStep < steps.length) {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: value, sender: 'user' },
        {
          id: Date.now() + 1,
          text: steps[nextStep].text,
          sender: 'bot',
          type: 'input',
          placeholder: `Enter your ${steps[nextStep].field}`,
          field: steps[nextStep].field as 'name' | 'email' | 'phone' | 'message'
        }
      ]);
    } else {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: value, sender: 'user' },
        {
          id: Date.now() + 1,
          text: 'Thank you! We\'ll get back to you soon.',
          sender: 'bot'
        }
      ]);
      // Here you would typically send the formData to your backend
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl w-[350px] overflow-hidden"
          >
            {!showChat ? (
              <div className="p-4 space-y-4">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaPhone />
                  <span>Call Us</span>
                </button>
                <button
                  onClick={startChat}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaComment />
                  <span>Message Us</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-[500px]">
                <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                  <h3 className="font-semibold">Chat with Us</h3>
                  <button
                    onClick={() => {
                      setShowChat(false);
                      setMessages([]);
                      setCurrentStep(0);
                    }}
                    className="text-black hover:text-gray-200"
                  >
                    <IoMdClose size={24} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'bot' ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'bot'
                            ? 'bg-gray-100 text-black'
                            : 'bg-blue-600 text-black'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
                {currentStep < steps.length && (
                  <MessageInput
                    placeholder={`Enter your ${steps[currentStep].field}`}
                    onSubmit={handleInputSubmit}
                  />
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <IoMdClose size={24} /> : <FaComment size={24} />}
      </motion.button>
    </div>
  );
}

interface MessageInputProps {
  placeholder: string;
  onSubmit: (value: string) => void;
}

function MessageInput({ placeholder, onSubmit }: MessageInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex space-x-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <IoMdSend size={20} />
        </button>
      </div>
    </form>
  );
}
