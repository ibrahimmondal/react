import { useForm } from "react-hook-form";
import React from "react";

function ExpensesForm({ onsubmit }) {
  const categories = ["home", "family", "tour", "move", "university"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-2 items-center mb-2"
      onSubmit={handleSubmit(onsubmit)}
    >
      {/* Description Field */}
      <input
        type="text"
        placeholder="Description"
        className="input input-bordered input-primary w-full max-w-xs"
        {...register("description", { required: "Description is required" })}
      />
      {errors.description && (
        <span className="text-red-600">{errors.description.message}</span>
      )}

      {/* Amount Field */}
      <input
        type="number"
        placeholder="Amount"
        className="input input-bordered input-primary w-full max-w-xs"
        {...register("amount", { required: "Amount is required" })}
      />
      {errors.amount && (
        <span className="text-red-600">{errors.amount.message}</span>
      )}

      {/* Category Dropdown */}
      <label htmlFor="category" className="items-start w-full max-w-xs">
        Category
      </label>
      <select
        className="select select-bordered w-full max-w-xs"
        {...register("category", { required: "Please select a category" })}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {errors.category && (
        <span className="text-red-600">{errors.category.message}</span>
      )}

      {/* Submit Button */}
      <input
        type="submit"
        value="Add Expense"
        className="btn btn-active btn-neutral"
      />
    </form>
  );
}

export default ExpensesForm;
