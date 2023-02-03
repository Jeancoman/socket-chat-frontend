function Dropdown() {
  return (
    <ul
      className="
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          -top-3
          right-10
          py-2
          list-none
          text-left
          rounded-lg
          shadow
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
    >
      <li>
        <a
          className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-medium
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-slate-600
              hover:bg-slate-100
            "
          href="#"
        >
          Action
        </a>
      </li>
      <li>
        <a
          className="
              text-sm
              py-2
              px-4
              font-medium
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-slate-600
              hover:bg-slate-100
            "
          href="#"
        >
          Another action
        </a>
      </li>
      <li>
        <a
          className="
              text-sm
              py-2
              px-4
              font-medium
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-slate-600
              hover:bg-slate-100
            "
          href="#"
        >
          Eliminar contacto
        </a>
      </li>
    </ul>
  );
}

export default Dropdown;