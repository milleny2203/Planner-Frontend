import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
//import { ParticipantsType } from "../../types/participants-type";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (email: string) => void;
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl px-6 py-5 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
          <button>
            <X className="size-5 text-zinc-400" onClick={closeGuestsModal} />
          </button>
        </div>
        <p className="text-zinc-400 text-sm mt-2 mb-5">
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </p>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button type="button">
                  <X
                    onClick={() => removeEmailToInvite(email)}
                    className="size-4 text-zinc-400"
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2"
          action=""
        >
          <div className="flex flex-1 gap-2 px-2 items-center">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Convidar
            <Plus className="size-5 text-lime-950" />
          </button>
        </form>
      </div>
    </div>
  );
}
