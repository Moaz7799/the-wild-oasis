import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "", label: "-- Select sorting option --", disabled: true }, // <-- default empty option
          { value: "name-asc", label: "Sort by name (a-z)" },
          { value: "name-desc", label: "Sort by name (z-a)" },
          { value: "regularPrice-asc", label: "Sort by price (low to high)" },
          { value: "regularPrice-desc", label: "Sort by price (high to low)" },
          {
            value: "maxCapacity-asc",
            label: "Sort by capacity (low to high)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (high to low)",
          },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
