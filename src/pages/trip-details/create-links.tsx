import { X, Tag, Link2 } from "lucide-react";

interface CreateLinksProps {
  closeCreateLinkModal: () => void;
}

export function CreateLinks({ closeCreateLinkModal }: CreateLinksProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl px-6 py-5 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Cadastrar link</h2>
          <button>
            <X
              className="size-5 text-zinc-400"
              onClick={closeCreateLinkModal}
            />
          </button>
        </div>
        <p className="text-zinc-400 text-sm mt-2 mb-5">
          Todos convidados podem visualizar os links importantes.
        </p>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Título do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-l-zinc-800 rounded-lg flex items-center gap-2">
              <Link2 className="text-zinc-400 size-5" />
              <input
                type="url"
                name="link"
                placeholder="URL"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          {/*    */}

          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center"
          >
            Salvar link
          </button>
        </form>
      </div>
    </div>
  );
}
