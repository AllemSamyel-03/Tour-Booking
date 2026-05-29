import { FiClock } from "react-icons/fi";
import { getUnavailableSlots, timeSlots } from "../../utils/slotUtils";

const TimeSlots = ({ branch, visitDate, selectedSlot, updateSlot }) => {
  const unavailableSlots = getUnavailableSlots(branch, visitDate);

  return (
    <div className="time-slot-grid">
      {timeSlots.map((slot) => {
        const isUnavailable = unavailableSlots.includes(slot);
        const isSelected = selectedSlot === slot;

        return (
          <button
            type="button"
            className={`slot-button ${isSelected ? "selected-slot" : ""}`}
            key={slot}
            disabled={isUnavailable}
            onClick={() => updateSlot(slot)}
          >
            <FiClock />
            {slot}
            {isUnavailable && <span>Booked</span>}
          </button>
        );
      })}
    </div>
  );
};

export default TimeSlots;
