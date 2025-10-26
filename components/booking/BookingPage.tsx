import { BookingForm } from "./BookingForm"
import { Calendar } from "./Calendar"

export const BookingPage = () => {
    return <div className="w-full flex flex-wrap items-stretch justify-center p-10 gap-8">
        <BookingForm />
        <Calendar />
    </div>
}