// src/components/BookingForm.tsx
import React from 'react';

// Icon mũi tên Lên/Xuống cho input
const UpDownArrows = () => (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col pointer-events-none">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-text-light h-3 w-3 -mb-1"><path d="m18 15-6-6-6 6" /></svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-text-light h-3 w-3 -mt-1"><path d="m6 9 6 6 6-6" /></svg>
    </div>
);

export const BookingForm = () => {
    return (
        <div className="bg-[#D9DAC7] text-brand-text font-text-content p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Đặt Lịch</h2>
            <form>
                <div className="mb-6">
                    <label htmlFor="workshopName" className="block text-sm font-text-content mb-2 font-text-content-min">
                        Tên Workshop
                    </label>
                    <input
                        type="text"
                        id="workshopName"
                        className="bg-white w-full p-3 rounded-lg border-none text-brand-text focus:ring-2 focus:ring-brand-dark"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                        <label htmlFor="date" className="block text-sm font-text-content mb-2 font-text-content-min">
                            Ngày
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="date"
                                className="bg-white w-full p-3 rounded-lg border-none text-brand-text appearance-none focus:ring-2 focus:ring-brand-dark pr-8"
                            // Sử dụng type="text" để style tùy chỉnh mũi tên
                            />
                            <UpDownArrows />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="time" className="block text-sm font-text-content mb-2 font-text-content-min">
                            Thời gian
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="time"
                                className="bg-white w-full p-3 rounded-lg border-none text-brand-text appearance-none focus:ring-2 focus:ring-brand-dark pr-8"
                            />
                            <UpDownArrows />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        className="!text-center border border-[#99A484] bg-brand-light-btn text-brand-text p-3 rounded-lg font-text-content transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        className="!text-center bg-[#424D3E] text-white p-3 rounded-lg font-text-content transition hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50"
                    >
                        Thanh toán
                    </button>
                </div>
            </form>
        </div>
    );
};