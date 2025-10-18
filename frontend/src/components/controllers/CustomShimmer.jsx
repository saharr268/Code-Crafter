export const CustomShimmer = ({ className }) => {
  return (
    <div
      className={`inset-0 bg-gray-200 animate-pulse rounded-lg ${className}`}
    ></div>
  );
};
