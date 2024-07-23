import { Calendar, MapPin, X } from "lucide-react";

interface DestinationDateAlterProps {
  closeAlterDestinationDate: () => void;
}

export function DestinationDateAlter({
  closeAlterDestinationDate,
}: DestinationDateAlterProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl px-6 py-5 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Alterar Destino e Data</h2>
          <button>
            <X
              className="size-5 text-zinc-400"
              onClick={closeAlterDestinationDate}
            />
          </button>
        </div>
        <p className="text-zinc-400 text-sm mt-2 mb-5">
          Todos convidados podem visualizar o destino e data da viagem.
        </p>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2">
            <MapPin className="text-zinc-400 size-5" />
            <input
              name="destination"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          {/*    */}

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
