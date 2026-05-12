import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Phone, X, ChevronLeft, ChevronRight, Globe, ArrowLeft } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: '', details: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Generate calendar days (mocked for current month)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleSendToWhatsApp = () => {
    // Format the message
    const text = `*New Consultation Request*
    
*Name:* ${formData.name}
*Scheduled Time:* ${selectedTime}, May ${selectedDate}, 2026
*Details:* ${formData.details || 'None'}`;

    // Redirect to WhatsApp (replace with actual number)
    const phoneNumber = "917498308077";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
    // Reset state
    setTimeout(() => {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: '', details: '' });
    }, 500);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-10 w-[95%] md:w-auto bg-white text-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[480px] max-h-[90vh] border border-slate-200"
          >
            {/* Left Panel */}
            <div className="w-full md:w-[280px] shrink-0 border-b md:border-b-0 md:border-r border-slate-200 p-6 flex flex-col relative bg-slate-50">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden text-slate-400 hover:text-slate-600"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">SU Group</span>
                <h2 className="text-xl font-bold mt-1 leading-tight text-slate-900">
                  SU GROUP CONSULTATION
                </h2>
              </div>

              <div className="space-y-3 text-slate-600 font-medium text-sm">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-slate-400" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-slate-400" />
                  <span>Phone call</span>
                </div>
                {(selectedDate && selectedTime) && (
                  <div className="mt-8 pt-6 border-t border-slate-200 text-sm">
                    <p className="font-semibold text-slate-900 mb-1">Selected Session</p>
                    <p className="text-slate-600">{selectedTime}, May {selectedDate}, 2026</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel */}
            <motion.div layout className="w-full md:w-auto p-6 relative flex flex-col overflow-hidden bg-white">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 hidden md:block text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>

              {step === 1 ? (
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Select a Date & Time</h3>

                  <motion.div layout className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
                    {/* Calendar */}
                    <motion.div layout className="w-full md:w-[320px] shrink-0 mx-auto lg:mx-0">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <button className="p-1.5 hover:bg-slate-100 rounded-full transition-colors"><ChevronLeft size={18} className="text-slate-500" /></button>
                        <span className="text-base font-medium">May 2026</span>
                        <button className="p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"><ChevronRight size={18} /></button>
                      </div>

                      <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-sm mb-4">
                        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                          <div key={day} className="text-xs font-semibold text-slate-400">{day}</div>
                        ))}
                        {/* Empty cells for May 2026 start */}
                        <div className="py-2"></div>
                        <div className="py-2"></div>
                        <div className="py-2"></div>
                        <div className="py-2"></div>
                        {/* Days */}
                        {days.map(day => {
                          const isSelected = selectedDate === day;
                          const isSunday = day % 7 === 3;
                          const isPastDate = day < new Date().getDate();
                          const isDisabled = isSunday || isPastDate;

                          return (
                            <button
                              key={day}
                              disabled={isDisabled}
                              onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                              className={`aspect-square w-full rounded-full transition-all text-sm font-medium flex items-center justify-center
                                ${isSelected
                                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                  : isDisabled
                                    ? 'text-slate-300 cursor-not-allowed'
                                    : 'text-blue-600 hover:bg-blue-50'}`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-slate-500">
                        <Globe size={16} />
                        <span>India Standard Time (IST)</span>
                      </div>
                    </motion.div>

                    {/* Time Slots */}
                    <AnimatePresence>
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="w-full lg:w-40 flex flex-col h-full lg:max-h-[350px]"
                        >
                          <p className="font-medium text-slate-900 mb-2 text-sm text-center shrink-0">Thu, May {selectedDate}</p>

                          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-2 mb-3">
                            {timeSlots.map(time => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`py-2 px-3 border rounded-md text-sm font-semibold transition-all shrink-0
                                ${selectedTime === time
                                    ? 'border-blue-600 bg-blue-600 text-white'
                                    : 'border-blue-200 text-blue-600 hover:border-blue-600 hover:bg-blue-50'}`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>

                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={handleNext}
                            disabled={!selectedTime}
                            className="mt-auto shrink-0 py-2 px-4 bg-slate-900 text-white rounded-md text-sm font-bold shadow-md hover:bg-slate-800 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="h-full flex flex-col max-w-md mx-auto w-full pt-4"
                >
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-8 hover:text-blue-800 transition-colors w-fit"
                  >
                    <ArrowLeft size={16} />
                    Back
                  </button>

                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Enter Details</h3>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Please share anything that will help prepare for our meeting.</label>
                      <textarea
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all min-h-[120px] resize-none"
                        placeholder="Project details, specific requirements..."
                      ></textarea>
                    </div>

                    <button
                      onClick={handleSendToWhatsApp}
                      disabled={!formData.name}
                      className="w-full py-4 mt-4 bg-[#25D366] text-white rounded-lg text-base font-bold shadow-md shadow-[#25D366]/20 hover:bg-[#20bd5a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Schedule Event via WhatsApp
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ConsultationModal;
