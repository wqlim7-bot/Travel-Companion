export default function PackingItem({
  item,
  checked,
  onToggle
}) {

  return (

    <div
      className="
      bg-white
      rounded-xl
      shadow-sm
      p-4
      flex
      items-center
      gap-3
      "
    >

      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="w-5 h-5"
      />


      <p
        className={
          checked
          ? "line-through text-gray-400"
          : "text-gray-700"
        }
      >

        {item}

      </p>


    </div>

  );
}