import DatePicker from "react-datepicker";
import { FiCalendar, FiMapPin, FiUser } from "react-icons/fi";
import TimeSlots from "../TimeSlots";
import { branchesList } from "../../utils/slotUtils";

const BookingForm = ({ formData, errors, updateField, onSubmit }) => (
  <form className="booking-form" onSubmit={onSubmit}>
    <div className="form-section-title">
      <FiUser />
      <h2>Parent Information</h2>
    </div>
    <div className="form-grid">
      <label>
        Parent Name
        <input
          type="text"
          value={formData.parentName}
          onChange={(event) => updateField("parentName", event.target.value)}
          placeholder="Enter parent name"
        />
        {errors.parentName && (
          <span className="error-text">{errors.parentName}</span>
        )}
      </label>
      <label>
        Email
        <input
          type="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="parent@example.com"
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </label>
      <label>
        Phone Number
        <input
          type="tel"
          value={formData.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="9876543210"
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </label>
    </div>

    <div className="form-section-title">
      <FiUser />
      <h2>Child Information</h2>
    </div>
    <div className="form-grid">
      <label>
        Child Name
        <input
          type="text"
          value={formData.childName}
          onChange={(event) => updateField("childName", event.target.value)}
          placeholder="Enter child name"
        />
        {errors.childName && (
          <span className="error-text">{errors.childName}</span>
        )}
      </label>
      <label>
        Child Age
        <select
          value={formData.childAge}
          onChange={(event) => updateField("childAge", event.target.value)}
        >
          <option value="">Select age</option>
          <option value="2 years">2 years</option>
          <option value="3 years">3 years</option>
          <option value="4 years">4 years</option>
          <option value="5 years">5 years</option>
        </select>
        {errors.childAge && (
          <span className="error-text">{errors.childAge}</span>
        )}
      </label>
    </div>

    <div className="form-section-title">
      <FiMapPin />
      <h2>Visit Information</h2>
    </div>
    <div className="form-grid">
      <label>
        Preferred Branch
        <select
          value={formData.branch}
          onChange={(event) => updateField("branch", event.target.value)}
        >
          <option value="">Choose branch</option>
          {branchesList.map((branch) => (
            <option value={branch.id} key={branch.id}>
              {branch.name}
            </option>
          ))}
        </select>
        {errors.branch && <span className="error-text">{errors.branch}</span>}
      </label>
      <label>
        Preferred Date
        <DatePicker
          selected={formData.visitDate}
          onChange={(date) => updateField("visitDate", date)}
          minDate={new Date()}
          placeholderText="Select date"
          dateFormat="dd MMMM yyyy"
          className="date-picker-input"
        />
        {errors.visitDate && (
          <span className="error-text">{errors.visitDate}</span>
        )}
      </label>
    </div>
    <label>
      Time Slot
      <TimeSlots
        branch={formData.branch}
        visitDate={formData.visitDate}
        selectedSlot={formData.timeSlot}
        updateSlot={(slot) => updateField("timeSlot", slot)}
      />
      {errors.timeSlot && <span className="error-text">{errors.timeSlot}</span>}
    </label>
    <label>
      Message
      <textarea
        value={formData.message}
        onChange={(event) => updateField("message", event.target.value)}
        placeholder="Tell us anything we should know before your visit"
      />
    </label>
    <button className="primary-button form-submit" type="submit">
      <FiCalendar /> Review Booking
    </button>
  </form>
);

export default BookingForm;
