import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  // 1. Calculate the number of bookings
  const numBookings = bookings?.length || 0;

  // 2. Calculate the total sales
  const sales =
    bookings?.reduce((total, booking) => total + booking.totalPrice, 0) || 0;

  // 3. Calculate the number of check-ins
  const numCheckIns = confirmedStays?.length || 0;

  // 4. Calculate the occupancy rate
  const occupation = confirmedStays.reduce(
    (total, stay) => total + stay.numNights,
    0
  );
  const totalPossibleNights = cabinCount * numDays;
  const occupancyRate = totalPossibleNights
    ? Math.round((occupation / totalPossibleNights) * 100)
    : 0;

  return (
    <>
      <Stat
        title="Bookings"
        value={numBookings}
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        value={numCheckIns}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy rate"
        value={Math.round(occupancyRate) + "%"}
        color="yellow"
        icon={<HiOutlineChartBar />}
      />
    </>
  );
};

export default Stats;
