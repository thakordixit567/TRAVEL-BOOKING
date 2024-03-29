import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/actions";

const Booking = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const size = data.length;

  const [bookingData, setbookingData] = useState({});

  const handleChange = (e) => {
    //console.log(e.target.value)
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setbookingData(newBookingData);
  };

  const handlebook = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    if(Object.keys(bookingData).length === 5){
        dispatch(makeBooking({...bookingData, id:size + 1}))       
    }else{
        alert("Please select data properly.") 
    }
  };

  console.log(bookingData);

  return (
    <div className="md:mt-[160px] mt-[100px] mx-4 relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="flex flex-col md:flex-row">
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination Form</p>
            <div className="flex flex-row">
              <select
                required
                onChange={(e) => handleChange(e)}
                name="form"
                id="form"
                className="outline-none p-2 w-full"
              >
                <option value="">Please Select</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Delhi</option>
                <option>Chennai</option>
                <option>Bengluru</option>
              </select>
            </div>
          </div>

          {/*To Destination*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination To</p>
            <div className="flex flex-row">
              <select
                name="to"
                id="to"
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full"
              >
                <option value="">Please Select</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Delhi</option>
                <option>Chennai</option>
                <option>Bengluru</option>
              </select>
            </div>
          </div>

          {/*Date*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Travel Date</p>
            <input
              type="date"
              name="date"
              required
              className="outline-none p-2 w-full"
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* guest option */}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Guests</p>
            <div className="flex flex-row">
              <select
                name="guests"
                id="guests"
                className="outline-none p-2 w-full "
                onChange={(e) => handleChange(e)}
              >
                <option value="">Please Select</option>
                <option>1 Person</option>
                <option>2 Person</option>
                <option>3 Person</option>
                <option>4 Person</option>
              </select>
            </div>
          </div>

          {/*Class Type*/}
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Class</p>
            <div className="flex flex-row">
              <select
                required
                name="tickettype"
                id="tickettype"
                className="outline-none p-2 w-full"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* button*/}
          <button
            onClick={(e) => handlebook(e)}
            type="submit"
            className="bg-indigo-500 text-white px-8 py-1 space-x-2 flex items-center justify-center"
          >
            <FaPlus className="mr-1" />
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
