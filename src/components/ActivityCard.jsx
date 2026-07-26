export default function ActivityCard({
  time,
  icon,
  title,
  location,
  description
}) {

  return (
    <div className="
      bg-white
      rounded-xl
      shadow-md
      p-5
      flex
      gap-4
      hover:shadow-lg
      transition
    ">

      <div className="text-3xl">
        {icon}
      </div>


      <div>

        <p className="text-sm text-gray-500">
          {time}
        </p>


        <h3 className="text-lg font-semibold">
          {title}
        </h3>


        <p className="text-blue-600">
          📍 {location}
        </p>


        <p className="text-gray-600 mt-2">
          {description}
        </p>

      </div>

    </div>
  );
}