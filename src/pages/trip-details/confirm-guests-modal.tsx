import { X, User, Mail } from "lucide-react";

interface ConfirmGuestsModalProps {
  closeConfirmGuestsModal: () => void;
}

export function ConfirmGuestsModal({
  closeConfirmGuestsModal,
}: ConfirmGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl px-6 py-5 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirmar participação</h2>
          <button>
            <X
              className="size-5 text-zinc-400"
              onClick={closeConfirmGuestsModal}
            />
          </button>
        </div>
        <p className="text-zinc-400 text-sm mt-2 mb-5">
          Você foi convidado(a) para participar de uma viagem para
          Florianópolis, Brasil nas datas de 16 a 27 de Agosto de 2024. Para
          confirmar sua presença na viagem, preencha os dados abaixo:
        </p>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2">
              <Mail className="text-zinc-400 size-5" />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          {/*    */}

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center"
          >
            Confirmar minha presença
          </button>
        </form>
      </div>
    </div>
  );
}
