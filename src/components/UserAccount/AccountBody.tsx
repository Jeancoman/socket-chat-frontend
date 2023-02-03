function AccountBody() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div>
        <img
          src="https://i.pinimg.com/736x/46/73/e1/4673e129046c33b4c54d28d62ebe45c3.jpg"
          className="h-52 w-52 rounded-full shadow"
        />
      </div>
      <form className="self-start shadow w-full h-48 bg-white px-4 py-3 flex gap-8 justify-center flex-col">
        <div>
          <p className="text-sky-500 font-medium">Nombre público</p>
          <p className="text-slate-900">Camila Machado</p>
        </div>
        <div>
          <p className="text-sky-500 font-medium">Descripción</p>
          <p className="text-slate-900">
            Madre de un hermoso hombrecito de 10 años.
          </p>
        </div>
      </form>
    </div>
  );
}

export default AccountBody;
